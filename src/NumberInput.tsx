export const NumberInput = (props: NumberInputProps) => {
  const { value, onChange } = props;

  return (
    <div className="flex">
      <div className="flex shrink-0 items-center rounded-l-md bg-white px-3 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6">
        Retention (min.)
      </div>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min="1"
        placeholder="Insert Retention (Minutes)"
        className="-ml-px block w-full grow rounded-r-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
    </div>
  );
};

type NumberInputProps = {
  value: number;
  onChange: (input: number) => void;
};
