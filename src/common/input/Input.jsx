const Input = ({ title, onChange, value }) => {
  return (
    <input
      type="text"
      placeholder="title ..."
      className="w-100 p-1 my-2 border-0 bg-transparent fw-bold"
      onChange={onChange}
      value={value}
      required
    />
  );
};

export default Input;
