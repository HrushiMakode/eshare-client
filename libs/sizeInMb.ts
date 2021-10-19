export const sizeInMb = (bytes: string): string =>
    `${(+bytes / (1024 * 1024)).toFixed(2)} MB`;
