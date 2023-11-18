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
          <div>
            By age
            <label>up to 1 year</label>
            <label>up to 2 years</label>
            <label>from 2 years</label>
          </div>
        ))(
          isByGenderOpen ? (
            <button>By gender</button>
          ) : (
            <div>
              By gender
              <label>female</label>
              <label>male</label>
            </div>
          )
        )}
    </div>
  );
};