import React, { FC } from "react";

const DownloadFile: FC<{ downloadPageLink: string }> = ({
    downloadPageLink,
}) => {
    return (
        <div className="p-1">
            <h1 className="my-2 text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                provident dolores neque optio, tempore quisquam asperiores,
                quidem, sunt vel numquam in perspiciatis. Quae placeat illo
                officiis fuga nisi reiciendis in?
            </h1>
            <div className="flex space-x-3">
                <span className="break-all">{downloadPageLink}</span>
                <img
                    src="/images/copy.png"
                    alt="download png"
                    className="
                    w-8 h-8
                    object-contain 
                    cursor-pointer"
                    onClick={() =>
                        navigator.clipboard.writeText(downloadPageLink)
                    }
                />
            </div>
        </div>
    );
};

export default DownloadFile;
