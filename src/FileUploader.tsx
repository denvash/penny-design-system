import { useCallback, useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const MAX_FILES_DEFAULT = 1;

type FileUploaderProps = {
  onDrop: (file: File[]) => void;
  maxFiles?: number;
};

export const FileUploader = (props: FileUploaderProps) => {
  const { onDrop, maxFiles = MAX_FILES_DEFAULT } = props;

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles,
    noClick: true, // Better UX to prevent miss clicks
  });

  const filesListMetadata = acceptedFiles.map((file) => {
    return (
      <li key={file.path} className="truncate pt-1 text-sm text-gray-500">
        {file.path} - {file.size} bytes
      </li>
    );
  });

  return (
    <div
      {...getRootProps()}
      // Ordered last to override getRootProps className if available
      className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
    >
      <div className="text-center">
        <div className="flex text-sm/6 text-gray-600">
          <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
            <span>Upload a file</span>

            <input {...getInputProps()} />
          </label>

          <p className="pl-1">or drag and drop</p>
        </div>
        <ul role="list" className="max-w-sm divide-y divide-gray-200">
          {filesListMetadata}
        </ul>
      </div>
    </div>
  );
};
