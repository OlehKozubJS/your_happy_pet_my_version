//import { NoticesPage } from './pages/NoticesPage/NoticesPage';
import { NoticesFilters } from './components/NoticesFilters/NoticesFilters';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <NoticesFilters />
    </div>
  );
};
