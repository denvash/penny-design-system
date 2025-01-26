import { useCallback, useState } from "react";
import { FileUploader } from "./FileUploader";
import "./output.css";
import { Button } from "./Button";
import { NumberInput } from "./NumberInput";
import { useEFSUpload } from "./useEFSUpload";
import { UploadSuccessModal } from "./UploadSuccessModal";

export default function App() {
  const {
    retentionMinutes,
    onChangeRetentionMinutes,
    handleUpload,
    onChangeUploadedFile,
    uploadedFileUrl,
    isValidFileUrl,
    uploadError,
    resetUpload,
  } = useEFSUpload();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Known assumption we only handle a single file
    const [uploadedFirstFile] = acceptedFiles;
    onChangeUploadedFile(uploadedFirstFile);
  }, []);

  return (
    <>
      <UploadSuccessModal
        title="File uploaded successfully!"
        primaryButtonLabel="Reset"
        uploadedFileUrl={uploadedFileUrl}
        isOpen={isValidFileUrl}
        onPrimaryButtonClick={resetUpload}
      />

      <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="center w-fit divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-6 py-5">
            <p className="text-lg font-semibold text-gray-600">
              Ephemeral File Sharing
            </p>
          </div>
          <div className="flex flex-col gap-2 p-6">
            <FileUploader onDrop={onDrop} />

            <NumberInput
              value={retentionMinutes}
              onChange={onChangeRetentionMinutes}
            />
          </div>

          <div className="flex flex-col gap-4 bg-gray-50 px-4 py-4 sm:px-6">
            <Button onClick={handleUpload} label="Submit" />

            {uploadError && (
              <p className="font-semibold text-red-500">Error: {uploadError}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
