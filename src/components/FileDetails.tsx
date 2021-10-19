import { sizeInMb } from "libs/sizeInMb";
import { IFile } from "libs/types";
import { FC } from "react";

const FileDetails: FC<{
    file: IFile;
}> = ({ file: { name, format, sizeInBytes } }) => {
    return (
        <div className="flex items-center w-full p-4 my-2">
            <img
                className="w-14 h-14"
                src={`/images/${format}.png`}
                alt={`${format}`}
            />
            <span className="mx-2">{name}</span>
            <span className="ml-auto font-mono">{sizeInMb(sizeInBytes)}</span>
        </div>
    );
};

export default FileDetails;
