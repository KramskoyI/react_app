import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const possibilities = [
  {
    textTitle: 'Учёт товаров и остатков',
    testDescription:
      'Добавление новых позиций, изменение карточек товара, приход, перемещение и списание. Остатки всегда в актуальном состоянии, без ручных пересчётов и риска запутаться в Excel. Можно быстро найти нужный товар и понять, сколько его на складе.',
    icon: <Inventory2OutlinedIcon color="primary" />,
  },
  {
    textTitle: 'Работа с заказами',
    testDescription:
      'Оформление, резервирование и отгрузка заказов в одном месте. Видно статус каждого заказа, какие позиции зарезервированы, что уже отгружено, а что требует внимания. Это снижает ошибки при сборке и помогает не терять заказы в процессе обработки.',
    icon: <ShoppingCartOutlinedIcon color="primary" />,
  },
  {
    textTitle: 'Контроль и базовая аналитика',
    testDescription:
      'Просмотр истории движений по товарам и заказам, базовые отчёты по обороту и остаткам. Можно увидеть, какие позиции ходовые, какие лежат на складе, и где возможен дефицит. Расширенные отчёты и дашборды можно будет добавить как следующий шаг.',
    icon: <QueryStatsOutlinedIcon color="primary" />,
  },
];
