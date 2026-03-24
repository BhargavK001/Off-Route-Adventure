"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Camera } from "lucide-react";
import type { DestinationGallery } from "@/lib/cloudinary";
import ImageLightbox from "./ImageLightbox";

// Browser-safe Cloudinary URL generator
function getOptimizedUrl(publicId: string, width = 800): string {
    return `https://res.cloudinary.com/dlgjwovla/image/upload/c_fill,f_auto,g_auto,q_auto,w_${width}/${publicId}`;
}

interface InteractiveGalleryProps {
    galleries: DestinationGallery[];
}

export default function InteractiveGallery({ galleries }: InteractiveGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (galleryIndex: number, imageIndex: number) => {
        setCurrentGalleryIndex(galleryIndex);
        setCurrentImageIndex(imageIndex);
        setLightboxOpen(true);
    };

    if (galleries.length === 0) {
        return (
            <div className="text-center py-16 text-gray-500">
                <Camera className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                <p className="text-lg">Gallery loading... Check back soon!</p>
            </div>
        );
    }

    // Flatten the current gallery's images for the Lightbox format
    const currentGalleryData = galleries[currentGalleryIndex]?.images.map((img) => {
        // Extract unique name or use the display name fallback
        const filename = img.public_id.split("/").pop();
        // Remove file extensions (like .jpg or .webp) for a cleaner name in the UI Let's do it cleanly,
        const cleanName = filename?.split(".")[0];

        return {
            url: getOptimizedUrl(img.public_id, 1600), // Larger resolution for lightbox view 
            alt: `${galleries[currentGalleryIndex].displayName} - ${cleanName || "Image"}`,
            name: cleanName || galleries[currentGalleryIndex].displayName,
        };
    }) || [];


    return (
        <>
            <div className="space-y-16">
                {galleries.map((gallery, galleryIndex) => (
                    <div key={gallery.folderName}>
                        {/* Destination Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                                <MapPin className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {gallery.displayName}
                                </h3>
                                <p className="text-sm text-gray-500 flex items-center gap-1">
                                    <Camera className="h-3.5 w-3.5" />
                                    {gallery.images.length} photo{gallery.images.length !== 1 ? "s" : ""}
                                </p>
                            </div>
                        </div>

                        {/* Image Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {gallery.images.map((image, imgIndex) => {
                                const optimizedUrl = getOptimizedUrl(image.public_id, 800); // 800px width for thumbnails
                                const filename = image.public_id.split("/").pop();
                                const cleanName = filename?.split(".")[0] || gallery.displayName;

                                return (
                                    <div
                                        key={image.public_id}
                                        onClick={() => openLightbox(galleryIndex, imgIndex)}
                                        className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                                    >
                                        <Image
                                            src={optimizedUrl}
                                            alt={`${gallery.displayName} - ${cleanName}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            loading={imgIndex < 4 ? "eager" : "lazy"}
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                        {/* Content on hover */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                            <div className="flex items-center gap-2 text-white mb-1">
                                                <MapPin className="h-4 w-4 text-green-300 shrink-0" />
                                                <span className="font-semibold text-sm truncate">{gallery.location}</span>
                                            </div>
                                            <p className="text-white/75 text-xs truncate capitalize">{cleanName.replace(/[-_]/g, ' ')}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {lightboxOpen && (
                <ImageLightbox
                    images={currentGalleryData}
                    initialIndex={currentImageIndex}
                    isOpen={lightboxOpen}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </>
    );
}
