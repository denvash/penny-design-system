import { Button, ButtonProps } from "../Button/Button";

export const Card = (props: CardProps) => {
  const {
    title,
    description,
    primaryActionLabel,
    primaryActionOnClick,
    primaryActionSize = "small",
  } = props;

  const isButtonEnabled =
    primaryActionLabel != null && primaryActionOnClick != null;

  return (
    <div className="border-static overflow-hidden rounded-md border bg-white p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-base leading-[24px] font-semibold text-gray-900">
            {title}
          </h3>
          <p className="text-secondary text-sm">{description}</p>
        </div>

        {isButtonEnabled && (
          <div className="shrink-0">
            <Button
              intent="primary"
              label={primaryActionLabel}
              onClick={primaryActionOnClick}
              size={primaryActionSize}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export interface CardProps {
  /** Title text */
  title: string;
  /** Description (sub-title) */
  description: string;
  /** Option primary-button label text */
  primaryActionLabel?: ButtonProps["label"];
  /** Optional primary-button click handler */
  primaryActionOnClick?: () => ButtonProps["onClick"];
  /** Sizing of primary button */
  primaryActionSize?: ButtonProps["size"];
}
