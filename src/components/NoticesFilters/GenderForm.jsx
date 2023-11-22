const GenderForm = ({ onChange }) => {
  const handleChange = event => {
    event.preventDefault();
    const genderData = event.currentTarget.elements.ageSelect;
    onChange(genderData);
  };

  return (
    <form onInput={handleChange}>
      <label>
        <input type="checkbox" name="genderSelect" value="female" />
        female
      </label>
      <label>
        <input type="checkbox" name="genderSelect" value="male" />
        male
      </label>
    </form>
  );
};

export { GenderForm };
