import { ReactNode } from "react";

export type HeadersNav = {
    navId: string;
    localize?: string;
    render?: ReactNode;
}

export type FolderNav = {
    navId: string;
    localize: string;
    children?: FolderNav[];
    file?: {
        icon: string;
    }
}