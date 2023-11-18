import { useState } from 'react';

const NoticesFilters = () => {
  const [isByAgeOpen, setIsByAgeOpen] = useState(false);
  const [isByGenderOpen, setIsByGenderOpen] = useState(false);

  return (
    <div>
      <h4>Filters</h4>
      {isByAgeOpen ? <button>By age</button> : <div></div>}
      {isByGenderOpen ? <button>By gender</button> : <div></div>}
    </div>
  );
};
