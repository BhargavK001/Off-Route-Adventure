"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
    images: { url: string; alt: string; name: string }[];
    initialIndex: number;
    isOpen: boolean;
    onClose: () => void;
}

export default function ImageLightbox({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    // Update current index when initialIndex changes (e.g., when a new image is clicked)
    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    const handlePrevious = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    // Handle keyboard navigation Let's use useCallback to avoid recreation,
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") handlePrevious();
            if (e.key === "ArrowRight") handleNext();
        },
        [isOpen, onClose, handlePrevious, handleNext]
    );

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open Let's bind keyboard handlers,
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen || images.length === 0) return null;

    const currentImage = images[currentIndex];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity"
            onClick={onClose}
        >
            {/* Target loading visual effect for initial launch */}
            <div className="absolute top-4 right-4 z-50 flex items-center gap-4">
                <div className="bg-black/50 text-white/50 text-sm px-3 py-1.5 rounded-full backdrop-blur-md">
                    {currentIndex + 1} / {images.length}
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-md"
                    aria-label="Close lightbox"
                >
                    <X className="h-6 w-6" />
                </button>
            </div>

            <div className="relative w-full h-full md:w-[90vw] md:h-[90vh] flex items-center justify-center p-4">
                <div
                    className="relative w-full h-full flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()} // Let's Prevent closing when clicking the image area,
                >
                    <Image
                        src={currentImage.url}
                        alt={currentImage.alt}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                        quality={100}
                    />
                    {/* Image Details Details Let's add them at bottom */}
                    <div className="absolute bottom-4 left-0 right-0 p-4 text-center pointer-events-none">
                        <p className="text-white text-lg md:text-xl font-medium drop-shadow-md bg-black/40 inline-block px-4 py-2 rounded-xl backdrop-blur-sm">
                            {currentImage.name}
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons Navigation Buttons Navigation Buttons Let's add them */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={handlePrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all backdrop-blur-md transform hover:scale-110 hidden md:flex"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all backdrop-blur-md transform hover:scale-110 hidden md:flex"
                        aria-label="Next image"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>

                    {/* Mobile touch zones (invisible buttons overlaying left/right edges) */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-1/4 z-40 md:hidden"
                        onClick={handlePrevious}
                    />
                    <div
                        className="absolute right-0 top-0 bottom-0 w-1/4 z-40 md:hidden"
                        onClick={handleNext}
                    />
                </>
            )}
        </div>
    );
}
