import DownloadFile from "@components/DownloadFile";
import DropZone from "@components/DropZone";
import FileDetails from "@components/FileDetails";
import axios from "axios";
import Loading from "libs/shared/Loading";
import { FileUploadResponse } from "libs/types";
import { useState } from "react";

export default function Home(): JSX.Element {
	const [file, setFile] = useState(null);
	const [id, setId] = useState(null);
	const [downloadPageLink, setDownloadPageLink] = useState<string>(null);
	const [uploadState, setUploadState] = useState<
		"⌛ Uploading" | "❌ Upload Failed" | "✔️ Uploaded" | "📤 Upload"
	>("📤 Upload");

	const handleUpload = async () => {
		if (uploadState === "⌛ Uploading") return;
		setUploadState("⌛ Uploading");
		const formData = new FormData();
		formData.append("file", file);
		try {
			const { data } = await axios.post<FileUploadResponse>(
				"api/files/upload",
				formData
			);
			setDownloadPageLink(data.downloadPageLink);
			setId(data.id);
			setUploadState("✔️ Uploaded");
		} catch (error) {
			console.log(error);
			setUploadState("❌ Upload Failed");
			setTimeout(() => {
				setUploadState("📤 Upload");
			}, 1000);
		}
	};

	const resetFile = () => {
		setFile(null);
		setDownloadPageLink(null);
		setUploadState("📤 Upload");
	};

	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<h1 className="font-medium text-3xl text-center">
				Got File ? Share it with just a link
			</h1>
			<div className="w-96 flex flex-col items-center justify-center bg-gray-800 shadow-xl rounded-xl">
				{!downloadPageLink && <DropZone setFile={setFile} />}
				{file && (
					<FileDetails
						file={{
							format: file.type.split("/")[1],
							name: file.name,
							sizeInBytes: file.size,
						}}
					/>
				)}

				{!downloadPageLink && file && (
					<button className="button" onClick={handleUpload}>
						{uploadState}
					</button>
				)}
				{downloadPageLink && (
					<div className="p-2 text-center flex flex-col items-center">
						<DownloadFile downloadPageLink={downloadPageLink} />
						{/* Email form */}
						<button onClick={resetFile} className="button">
							Upload New File
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
