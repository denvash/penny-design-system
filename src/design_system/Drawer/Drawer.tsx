import { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ICON_COMPONENT } from "../IconRenderer";

/**
 * Specs:
 * - Header `h-22` capped as in Figma
 * - Content as `React.Children`
 * - Supports mobile screen
 * - Backdrop coloring
 *
 * Component that can be shared between Modal and Drawer:
 * - Button Icon
 * - Header Section
 *
 * Additional features:
 * - Focus ring
 * - Headless Panel,Title,Dialog,Backdrop
 */
export const Drawer = (props: DrawerProps) => {
  const { isOpen: isOpenControlled, title, children, onClose = NOOP } = props;

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
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-full transform transition duration-500 ease-in-out data-closed:translate-x-full sm:max-w-xl sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white">
                <div className="border-static flex h-22 flex-row items-start justify-between gap-4 border-b-1 px-8 py-6">
                  <DialogTitle
                    as="h3"
                    className="text-primary text-2xl leading-8 font-semibold"
                  >
                    {title}
                  </DialogTitle>

                  {/**
                   * Same as Modal, can be extracted as Button Icon
                   */}
                  <button
                    type="button"
                    onClick={onCloseInternal}
                    className="text-primary focus:ring-brand hover:text-secondary rounded-md focus:ring-2 focus:outline-hidden"
                  >
                    <CloseIconComponent aria-hidden="true" className="size-8" />
                  </button>
                </div>

                <div className="p-8">{children}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

const CloseIconComponent = ICON_COMPONENT.close;
const NOOP = () => {};

export interface DrawerProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}
