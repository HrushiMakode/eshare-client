import React, { Dispatch, FunctionComponent, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropZone: FunctionComponent<{ setFile: Dispatch<any> }> = ({
    setFile,
}) => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
        setFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragAccept, isDragReject } =
        useDropzone({
            onDrop,
            multiple: false,
            accept: "image/jpeg,image/png,audio/mpeg",
        });
    return (
        <div className="p-4 w-full">
            <div
                {...getRootProps()}
                className="h-80 w-full rounded-md cursor-pointer focus:outline-none"
            >
                <input {...getInputProps()} />
                <div
                    className={
                        "flex flex-col items-center justify-center border-2 border-dashed border-yellow-light rounded-xl h-full space-y-3 " +
                        (isDragReject === true ? "border-red-500" : "") +
                        (isDragAccept === true ? "border-green-500" : "")
                    }
                >
                    <img
                        src="/images/folder.png"
                        alt="Folder"
                        className="h-16 w-16"
                    />
                    {isDragReject ? (
                        <p>Sorry , File not supportred</p>
                    ) : (
                        <>
                            <p>Drag & Drop Files Here</p>
                            <p className="mt-2 text-base text-gray-300">
                                Only jpeg,png &mp3 files supporeted
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DropZone;
