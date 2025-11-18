const Input = ({ type, id, name, value, onChange, minLength, maxLength, min, max, required = true }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="block w-full rounded px-3 py-2 bg-gray-200 text-gray-700 focus:ring focus:ring-opacity-50 border-gray-300 dark:bg-gray-700 dark:text-white dark:focus:border-blue-300 dark:focus:ring-blue-200"
      minLength={minLength}
      maxLength={maxLength}
      min={min}
      max={max}
      required={required}
    />
  );
};

export default Input;
