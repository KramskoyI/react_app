import { Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import { Home, Menu, Warehouse } from './features';

function About() {
  return <p>Это пример второй страницы для проверки роутинга.</p>;
}

function NotFound() {
  return <p>Страница не найдена.</p>;
}

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Menu />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default App;
