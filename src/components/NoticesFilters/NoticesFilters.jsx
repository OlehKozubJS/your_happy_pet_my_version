import { useState } from 'react';
import { AgeForm } from './AgeForm';
import { GenderForm } from './GenderForm';

const NoticesFilters = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isByAgeOpen, setIsByAgeOpen] = useState(false);
  const [isByGenderOpen, setIsByGenderOpen] = useState(false);

  const toggleFilters = () => {
    if (isFiltersOpen) {
      setIsFiltersOpen(false);
    } else {
      setIsFiltersOpen(true);
    }
  };

  const toggleAge = () => {
    if (isByAgeOpen) {
      setIsByAgeOpen(false);
    } else {
      setIsByAgeOpen(true);
    }
  };

  const toggleGender = () => {
    if (isByGenderOpen) {
      setIsByGenderOpen(false);
    } else {
      setIsByGenderOpen(true);
    }
  };

  const selectAge = () => {};

  const selectGender = () => {};

  return (
    <div>
      <button onClick={toggleFilters}>Filters</button>
      {isFiltersOpen && (
        <div>
          <button onClick={toggleAge}>By age</button>
          {isByAgeOpen && <AgeForm onChange={selectAge} />}
          <button onClick={toggleGender}>By gender</button>
          {isByGenderOpen && <GenderForm onChange={selectGender} />}
        </div>
      )}
    </div>
  );
};

export { NoticesFilters };

/*
        
<button onClick={toggleAge}>By age</button>
{isByAgeOpen && <AgeForm />}
<button onClick={toggleGender}>By gender</button>
{isByGenderOpen && <GenderForm />}

*/
