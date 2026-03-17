import { AppProviders } from './providers';
import { AppRouter } from './router';
import './styles/app.css';

export const App = () => {
  return (
    <AppProviders>
      <div className="app">
        <AppRouter />
      </div>
    </AppProviders>
  );
};

export default App;
