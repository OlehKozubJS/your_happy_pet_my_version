const AgeForm = ({ onChange }) => {
  const handleChange = event => {
    event.preventDefault();
    const { upToOneSelect, upToTwoSelect, fromTwoSelect } =
      event.currentTarget.elements;
    const ageData = {
      upToOne: upToOneSelect.checked ? true : false,
      upToTwo: upToTwoSelect.checked ? true : false,
      fromTwo: fromTwoSelect.checked ? true : false,
    };
    console.log(ageData);
    onChange(ageData);
  };

  return (
    <form onInput={handleChange}>
      <label>
        <input type="checkbox" name="upToOneSelect" value={true} />
        up to 1 year
      </label>
      <label>
        <input type="checkbox" name="upToTwoSelect" value={true} />
        up to 2 years
      </label>
      <label>
        <input type="checkbox" name="fromTwoSelect" value={true} />
        from 2 years
      </label>
    </form>
  );
};

export { AgeForm };
