const AgeForm = ({ onChange }) => {
  const handleInput = event => {
    event.preventDefault();
    const ageData = event.currentTarget.elements.ageOption.value;
    onChange(ageData);
  };

  return (
    <form onInput={handleInput}>
      <label>
        <input type="radio" name="ageOption" value="1-" />
        up to 1 year
      </label>
      <label>
        <input type="radio" name="ageOption" value="2-" />
        up to 2 years
      </label>
      <label>
        <input type="radio" name="ageOption" value="2+" />
        from 2 years
      </label>
      <label>
        <input type="radio" name="ageOption" value="0+" />
        any age
      </label>
    </form>
  );
};

export { AgeForm };
