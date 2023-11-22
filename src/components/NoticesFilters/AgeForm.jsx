const AgeForm = ({ onChange }) => {
  return (
    <form>
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
