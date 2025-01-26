export const Button = (props: ButtonProps) => {
  const { onClick, label } = props;

  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

type ButtonProps = {
  label: string;
  onClick: () => void;
};
