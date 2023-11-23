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
    </form>
  );
};

export { GenderForm };
