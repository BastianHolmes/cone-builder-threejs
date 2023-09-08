const Input = ({ value, setValue, Name }) => {
  return (
    <div className="form-group">
      <label htmlFor="segments">{Name}</label>
      <input
        min="3"
        id="segments"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="type here"
      />
    </div>
  );
};

export default Input;
