import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CloudinaryImage {
    public_id: string;
    secure_url: string;
    width: number;
    height: number;
    folder: string;
    format: string;
}

export interface DestinationGallery {
    folderName: string;
    displayName: string;
    location: string;
    images: CloudinaryImage[];
}

const FOLDER_CONFIG: Record<string, { displayName: string; location: string }> = {
    Andharban: { displayName: "Andharban Forest Trek", location: "Andharban" },
    Devkund: { displayName: "Devkund Waterfall", location: "Devkund" },
    Gokundi: { displayName: "Gokundi Trek", location: "Gokundi" },
    Hampi: { displayName: "Hampi Heritage", location: "Hampi" },
    Harishchandrgad: { displayName: "Harishchandragad Fort", location: "Harishchandragad" },
    Kalsubai: { displayName: "Kalsubai Peak", location: "Kalsubai" },
    Malvan: { displayName: "Malvan Beach & Scuba", location: "Malvan" },
    Rajgad: { displayName: "Rajgad Fort", location: "Rajgad" },
    Vasota: { displayName: "Vasota Fort & Camping", location: "Vasota" },
};

export async function getCloudinaryFolderImages(folder: string): Promise<CloudinaryImage[]> {
    try {
        const result = await cloudinary.search
            .expression(`asset_folder:${folder}`)
            .sort_by("created_at", "desc")
            .max_results(30)
            .execute();

        return result.resources.map((r: Record<string, unknown>) => ({
            public_id: r.public_id as string,
            secure_url: r.secure_url as string,
            width: r.width as number,
            height: r.height as number,
            folder: (r.asset_folder as string) || "",
            format: r.format as string,
        }));
    } catch (error) {
        console.error(`Error fetching images from folder ${folder}:`, error);
        return [];
    }
}

export async function getAllDestinationGalleries(): Promise<DestinationGallery[]> {
    const folderNames = Object.keys(FOLDER_CONFIG);

    const galleries = await Promise.all(
        folderNames.map(async (folder) => {
            const images = await getCloudinaryFolderImages(folder);
            const config = FOLDER_CONFIG[folder];
            return {
                folderName: folder,
                displayName: config.displayName,
                location: config.location,
                images,
            };
        })
    );

    return galleries.filter((g) => g.images.length > 0);
}

export function getOptimizedUrl(publicId: string, width = 800): string {
    return cloudinary.url(publicId, {
        transformation: [
            { width, crop: "fill", gravity: "auto", quality: "auto", fetch_format: "auto" },
        ],
        secure: true,
    });
}

export { FOLDER_CONFIG };
