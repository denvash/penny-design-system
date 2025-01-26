import { useCallback, useState } from "react";
import axios from "axios";

export const useEFSUpload = (): HookEFSUpload => {
  const [file, setFile] = useState<File | null>(DEFAULT_EMPTY_FILE);
  const [retentionMin, setRetentionMin] = useState(DEFAULT_RETENTION_MINUTES);
  const [fileUrl, setFileUrl] = useState(DEFAULT_EMPTY_FILE_URL);
  const [error, setError] = useState(DEFAULT_EMPTY_ERROR);

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload");

      // Early return on error
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const headers = {
      "Retention-Min": retentionMin.toString(),
    };

    try {
      const response = await axios.put(API_ENDPOINT_FILE_UPLOAD, formData, {
        headers,
      });

      setFileUrl(response.data.fileUrl);

      // API succeed; reset error
      if (error !== DEFAULT_EMPTY_ERROR) {
        setError(DEFAULT_EMPTY_ERROR);
      }
    } catch (err) {
      setError(`File upload failed: ${err}`);
    }
  };

  const resetUpload = useCallback(() => {
    setFile(DEFAULT_EMPTY_FILE);
    setError(DEFAULT_EMPTY_ERROR);
    setFileUrl(DEFAULT_EMPTY_FILE_URL);
  }, []);

  return {
    handleUpload,
    uploadedFileUrl: fileUrl,
    isValidFileUrl: fileUrl !== DEFAULT_EMPTY_FILE_URL,
    onChangeRetentionMinutes: setRetentionMin,
    retentionMinutes: retentionMin,
    onChangeUploadedFile: setFile,
    uploadError: error,
    resetUpload,
  };
};

const DEFAULT_EMPTY_FILE = null;
const DEFAULT_EMPTY_ERROR = "";
const DEFAULT_EMPTY_FILE_URL = "";
const DEFAULT_RETENTION_MINUTES = 1;

// Hardcoded endpoint, should be moved to .env etc
const API_ENDPOINT_FILE_UPLOAD = "http://localhost:8080/v1/file";

type HookEFSUpload = {
  handleUpload: () => void;
  uploadedFileUrl: string | undefined;
  isValidFileUrl: boolean;
  retentionMinutes: number;
  onChangeRetentionMinutes: (retention: number) => void;
  onChangeUploadedFile: (file: File | null) => void;
  uploadError: string;
  resetUpload: () => void;
};
