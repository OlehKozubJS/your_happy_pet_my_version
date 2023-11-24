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
        <input type="checkbox" name="femaleOption" value={true} />
        female
      </label>
      <label>
        <input type="checkbox" name="maleOption" value={true} />
        male
      </label>
      <label>
        <input type="checkbox" name="anyGenderOption" value={true} />
        any gender
      </label>
    </form>
  );
};

export { GenderForm };
