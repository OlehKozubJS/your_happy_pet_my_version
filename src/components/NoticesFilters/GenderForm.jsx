const GenderForm = ({ onChange }) => {
  const handleChange = event => {
    event.preventDefault();
    const genderData = Number(event.currentTarget.elements.ageSelect);
    onChange(genderData);
  };

  return (
    <form onChange={handleChange}>
      <label>
        <input type="radio" name="genderSelect" value="female" />
        female
      </label>
      <label>
        <input type="radio" name="genderSelect" value="male" />
        male
      </label>
    </form>
  );
};

export { GenderForm };
