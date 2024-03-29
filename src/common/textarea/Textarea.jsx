const Textarea = ({ onChange, value }) => {
  return (
    <textarea
      className="w-100 p-1 my-2 border-0 bg-transparent"
      placeholder="take a note ..."
      rows=""
      cols=""
      onChange={onChange}
      value={value}
      required></textarea>
  );
};

export default Textarea;
