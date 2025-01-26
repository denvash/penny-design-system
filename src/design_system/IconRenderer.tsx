import {
  PlusIcon,
  ExclamationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

type IconRender = {
  className: string;
};

export const ICON_COMPONENT = {
  plus: (props: IconRender) => {
    const { className } = props;
    return <PlusIcon aria-hidden="true" className={className} />;
  },
  error: (props: IconRender) => {
    const { className } = props;
    return <ExclamationCircleIcon aria-hidden="true" className={className} />;
  },
  close: (props: IconRender) => {
    const { className } = props;
    return <XMarkIcon aria-hidden="true" className={className} />;
  },
};
