import { Route, Routes } from 'react-router-dom';

import { HomePage } from '@pages/home-page';
import { OrdersPage } from '@pages/orders-page';
import { OrdersStatsPage } from '@pages/orders-stats-page';
import { WarehousePage } from '@pages/warehouse-page';
import { WarehouseStatsPage } from '@pages/warehouse-stats-page';
import { Menu } from '@widgets/menu';

const NotFoundPage = () => {
  return <p>Страница не найдена.</p>;
};

export const AppRouter = () => {
  return (
    <>
      <Menu />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/warehouse" element={<WarehousePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route
            path="/warehouse-stats"
            element={<WarehouseStatsPage />}
          />
          <Route path="/orders-stats" element={<OrdersStatsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};
