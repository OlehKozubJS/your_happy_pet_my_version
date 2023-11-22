import { useState } from 'react';

const NoticesFilters = () => {
  const calcYearDifference = oldDate => {
    const newDate = new Date();
    const dateDifference = new Date(newDate - oldDate);
    const diffYears = dateDifference.getFullYear() - 1970;
    return diffYears;
  };

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

  return (
    <div>
      <button onClick={toggleFilters}>Filters</button>
      {isFiltersOpen &&
        (<button>By age</button>)(
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
        )(<button>By gender</button>)(
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
