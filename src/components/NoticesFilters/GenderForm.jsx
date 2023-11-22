const GenderForm = () => {
  return (
    <form>
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
