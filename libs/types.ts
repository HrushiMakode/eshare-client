export interface IFile {
    name: string;
    sizeInBytes: string;
    format: string;
    id?: string;
}

export interface FileUploadResponse {
    id: string;
    downloadPageLink: string;
}
