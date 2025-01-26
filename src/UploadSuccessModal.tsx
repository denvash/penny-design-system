import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export const UploadSuccessModal = (props: ModalProps) => {
  const {
    isOpen: isOpenOverride,
    uploadedFileUrl,
    primaryButtonLabel,
    onPrimaryButtonClick,
    title,
  } = props;

  useEffect(() => {
    if (isOpenOverride) {
      setIsOpen(isOpenOverride);
    }
  }, [isOpenOverride]);

  const [isOpen, setIsOpen] = useState(false);
  const [isURLCopied, setIsURLCopied] = useState(false);

  return (
    <Dialog open={isOpen} onClose={NOOP} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                <CheckIcon
                  aria-hidden="true"
                  className="size-6 text-green-600"
                />
              </div>
              <div className="text-center">
                <DialogTitle
                  as="h3"
                  className="text-base font-semibold text-gray-900"
                >
                  {title}
                </DialogTitle>
                <div>
                  {uploadedFileUrl != null && (
                    <>
                      <a
                        className="font-thin"
                        href={uploadedFileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {uploadedFileUrl}
                      </a>

                      <button
                        type="button"
                        className="mt-2 inline-flex items-center gap-x-1.5 rounded bg-indigo-50 px-2 py-1 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => {
                          navigator.clipboard.writeText(uploadedFileUrl);
                          setIsURLCopied(true);
                        }}
                      >
                        Copy URL
                        {isURLCopied && (
                          <CheckCircleIcon
                            aria-hidden="true"
                            className="-mx-0.5 size-5"
                          />
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

const NOOP = () => {};

type ModalProps = {
  isOpen: boolean;
  primaryButtonLabel: string;
  onPrimaryButtonClick: () => void;
  title: string;
  uploadedFileUrl: string | undefined;
};
