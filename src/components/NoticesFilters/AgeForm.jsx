const AgeForm = ({ onChange }) => {
  return (
    <form>
      <label>
        <input type="checkbox" name="ageSelect" />
        up to 1 year
      </label>
      <label>
        <input type="checkbox" name="ageSelect" />
        up to 2 years
      </label>
      <label>
        <input type="checkbox" name="ageSelect" />
        from 2 years
      </label>
    </form>
  );
};

export { AgeForm };
