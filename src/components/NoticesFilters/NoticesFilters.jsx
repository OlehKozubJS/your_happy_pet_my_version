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

  return (
    <div>
      <button onClick={toggleFilters}>Filters</button>
      {isFiltersOpen &&
        (<button onClick={toggleAge}>By age</button>)(
          isByAgeOpen && (
            <form>
              <label>
                <input type="checkbox" />
                up to 1 year
              </label>
              <label>
                <input type="checkbox" />
                up to 2 years
              </label>
              <label>
                <input type="checkbox" />
                from 2 years
              </label>
            </form>
          )
        )(<button onClick={toggleGender}>By gender</button>)(
          isByGenderOpen && (
            <form>
              <label>
                <input type="checkbox" />
                female
              </label>
              <label>
                <input type="checkbox" />
                male
              </label>
            </form>
          )
        )}
    </div>
  );
};

export { NoticesFilters };
