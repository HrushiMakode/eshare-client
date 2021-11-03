import axios from "axios";
import { GetServerSidePropsContext, NextPage } from "next";
import { IFile } from "libs/types";
import FileDetails from "@components/FileDetails";

import fileDownload from "js-file-download";

const index: NextPage<{
    file: IFile | null;
}> = ({ file }) => {
    const handleDownload = async () => {
        const { data } = await axios.get<Blob>(`/api/files/${id}/download`, {
            responseType: "blob",
        });
        fileDownload(data, name);
    };

    if (!file)
        return (
            <div>
                <div className="text-center">😞😞😞😞</div>
                <div>oops! File does not exists! </div>
                <div>Check the URL again !! 😥😥</div>
            </div>
        );

    const { name, id } = file;
    return (
        <div className="flex flex-col p-4 items-center justify-center space-y-4 bg-gray-800 rounded-md shadow-xl">
            {
                <>
                    <img
                        className="w-16 h-16 "
                        src="/images/file-download.png"
                        alt="file-download"
                    />
                    <h1 className="text-xl">
                        Your file is ready to be downloaded
                    </h1>
                    <FileDetails file={file} />
                    <button className="button" onClick={handleDownload}>
                        📥 Download
                    </button>
                </>
            }
        </div>
    );
};

export default index;

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { id } = context.query;
    let file: IFile | null;
    try {
        const { data } = await axios.get<IFile>(
            `${process.env.API_BASE_URL}/api/files/${id}`
        );
        file = data;
    } catch (error) {
        console.log(error);
        file = null;
    }

    return {
        props: {
            file,
        },
    };
};
