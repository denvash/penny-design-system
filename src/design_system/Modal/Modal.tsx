import { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Button, ButtonProps } from "@penny/Button";
import { ICON_COMPONENT } from "@penny/IconRenderer";

/**
 * Specs:
 * - Built as Header/Body/Footer sections, as in Figma
 * - Header/Footer capped h-22
 * - Supports mobile screen
 * - Backdrop coloring
 * - Focus ring
 * - Headless components: Panel, Title, Dialog, Backdrop
 *
 * Component that can be extacted:
 * - Button Group
 * - Button Icon
 * - Header Section
 */
export const Modal = (props: ModalProps) => {
  const {
    isOpen: isOpenControlled,
    title,
    description,
    primaryLabel,
    primaryOnClick,
    secondaryLabel,
    secondaryOnClick,
    onClose = NOOP,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpenControlled != null) {
      setIsOpen(isOpenControlled);
    }
  }, [isOpenControlled]);

  const onCloseInternal = useCallback(() => {
    setIsOpen(false);
    onClose();
  }, [onClose]);

  return (
    <Dialog open={isOpen} onClose={onCloseInternal} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="flex flex-col text-left">
              <div className="align-center flex w-full flex-row justify-between p-6">
                <div>
                  <div className="flex h-22 flex-row items-center gap-4">
                    <ErrorIconComponent
                      aria-hidden="true"
                      className="size-8 text-red-600"
                    />
                    <DialogTitle
                      as="h3"
                      className="text-primary text-2xl leading-8 font-semibold"
                    >
                      {title}
                    </DialogTitle>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={onCloseInternal}
                    className="text-primary focus:ring-brand hover:text-secondary rounded-md focus:ring-2 focus:outline-hidden"
                  >
                    <CloseIconComponent aria-hidden="true" className="size-8" />
                  </button>
                </div>
              </div>

              <p className="text-primary px-6 text-base">{description}</p>
            </div>

            <div className="flex h-22 flex-row-reverse items-center justify-between gap-4 p-6 text-center">
              <Button
                className="w-full"
                label={primaryLabel}
                intent="critical"
                onClick={primaryOnClick}
              />
              <Button
                className="w-full"
                label={secondaryLabel}
                intent="secondary"
                onClick={secondaryOnClick}
              />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

const ErrorIconComponent = ICON_COMPONENT.error;
const CloseIconComponent = ICON_COMPONENT.close;
const NOOP = () => {};

export interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  primaryLabel: ButtonProps["label"];
  primaryOnClick: ButtonProps["onClick"];
  secondaryLabel: ButtonProps["label"];
  secondaryOnClick: ButtonProps["onClick"];
  onClose?: () => void;
}
