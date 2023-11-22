const AgeForm = ({ onChange }) => {
  const handleChange = event => {
    const data = event.current;
  };

  return (
    <form onChange={handleChange}>
      <label>
        <input type="checkbox" name="ageSelect" value="0" />
        up to 1 year
      </label>
      <label>
        <input type="checkbox" name="ageSelect" value="1" />
        up to 2 years
      </label>
      <label>
        <input type="checkbox" name="ageSelect" value="2" />
        from 2 years
      </label>
    </form>
  );
};

export { AgeForm };
