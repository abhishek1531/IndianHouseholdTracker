function InputField({
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-green-400"
    />
  );
}

export default InputField;