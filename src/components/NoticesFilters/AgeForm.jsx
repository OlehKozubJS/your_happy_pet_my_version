const AgeForm = ({ onChange }) => {
  const handleChange = event => {
    event.preventDefault();
    const ageData = Number(event.currentTarget.elements.ageSelect);
    onChange(ageData);
  };

  return (
    <form onChange={handleChange}>
      <label>
        <input type="radio" name="ageSelect" value="0" />
        up to 1 year
      </label>
      <label>
        <input type="radio" name="ageSelect" value="1" />
        up to 2 years
      </label>
      <label>
        <input type="radio" name="ageSelect" value="2" />
        from 2 years
      </label>
    </form>
  );
};

export { AgeForm };
