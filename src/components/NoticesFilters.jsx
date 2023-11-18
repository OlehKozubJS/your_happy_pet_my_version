import { useState } from 'react';

const NoticesFilters = () => {
  const [isByAgeOpen, setIsByAgeOpen] = useState(false);
  const [isByGenderOpen, setIsByGenderOpen] = useState(false);

  return (
    <div>
      <h4>Filters</h4>
      <button>By age</button>
      <button>By gender</button>
    </div>
  );
};
