import { StaticImageData } from "next/image";

export interface IJournal {
    imageUrl: string|StaticImageData;
    journalDate: string;
    createdBy: string;
    title?: string;
    description: string;
  };
  