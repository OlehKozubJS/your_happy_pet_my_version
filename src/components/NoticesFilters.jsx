import { useState } from 'react';

const NoticesFilters = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isByAgeOpen, setIsByAgeOpen] = useState(false);
  const [isByGenderOpen, setIsByGenderOpen] = useState(false);

  return (
    <div>
      <h4>Filters</h4>
      {isFiltersOpen &&
        (isByAgeOpen ? (
          <button>By age</button>
        ) : (
          <form>
            <label>up to 1 year</label>
            <label>up to 2 years</label>
            <label>from 2 years</label>
          </form>
        ))(
          isByGenderOpen ? (
            <button>By gender</button>
          ) : (
            <form>
              <label>female</label>
              <label>male</label>
            </form>
          )
        )}
    </div>
  );
};
