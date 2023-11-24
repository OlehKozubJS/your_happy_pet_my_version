const GenderForm = ({ onChange }) => {
  const handleInput = event => {
    event.preventDefault();
    const { femaleOption, maleOption } = event.currentTarget.elements;
    const genderData = {
      female: femaleOption.checked,
      male: maleOption.checked,
    };
    onChange(genderData);
  };

  return (
    <form onInput={handleInput}>
      <label>
        <input type="checkbox" name="femaleOption" />
        female
      </label>
      <label>
        <input type="checkbox" name="maleOption" />
        male
      </label>
      <label>
        <input type="checkbox" name="anyGenderOption" />
        any gender
      </label>
    </form>
  );
};

export { GenderForm };
