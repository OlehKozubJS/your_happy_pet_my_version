const GenderForm = ({ onChange }) => {
  const handleChange = event => {
    event.preventDefault();
    const genderData = event.currentTarget.elements.ageSelect;
    onChange(genderData);
  };

  return (
    <form onInput={handleChange}>
      <label>
        <input type="checkbox" name="femaleOption" value={true} />
        female
      </label>
      <label>
        <input type="checkbox" name="maleOption" value={true} />
        male
      </label>
    </form>
  );
};

export { GenderForm };
