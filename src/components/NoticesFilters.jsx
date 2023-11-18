import { useState } from 'react';

const NoticesFilters = () => {
  const [isByAgeOpen, setIsByAgeOpen] = useState(false);
  const [isByGenderOpen, setIsByGenderOpen] = useState(false);

  return (
    <div>
      <h4>Filters</h4>
      {isByAgeOpen ? (
        <button>By age</button>
      ) : (
        <div>
          By age
          <label>up to 1 year</label>
          <label>up to 2 years</label>
          <label>from 2 years</label>
        </div>
      )}
      {isByGenderOpen ? <button>By gender</button> : <div></div>}
    </div>
  );
};
