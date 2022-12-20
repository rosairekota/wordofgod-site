import { StaticImageData } from "next/image";

export interface IGallery{
    id: number
    imageUrl: string|StaticImageData;
}