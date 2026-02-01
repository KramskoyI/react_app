import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Paper, Stack, Typography } from '@mui/material';

export const Home = () => {
  return (
    <div>
      <Stack spacing={3} sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          fontWeight={600}
          color="text.primary">
          Складское приложение
        </Typography>

        <Typography variant="body1" color="text.primary" maxWidth={700}>
          Приложение помогает вести учёт товара, оформлять и отслеживать заказы,
          видеть движение остатков и не держать всё в голове или разрозненных
          таблицах. Рабочее место, где собрано всё, что нужно для ежедневной
          операционной работы.
        </Typography>
      </Stack>

      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight={600} color="text.primary">
          Основные возможности
        </Typography>
        <Typography variant="body2" color="text.primary">
          Краткое описание ключевых сценариев, которые закрывает система.
        </Typography>
      </Stack>

      <Stack spacing={6}>
        <Paper
          elevation={0}
          sx={{
            m: 2.5,
            p: 2.5,
            borderRadius: 2,
            border: '1px solid #E5E7EB',
            backgroundColor: 'background.paper',
            boxSizing: 'border-box',
          }}>
          <Stack spacing={1.5}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Inventory2OutlinedIcon color="primary" />
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color="text.secondary">
                Учёт товаров и остатков
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              Добавление новых позиций, изменение карточек товара, приход,
              перемещение и списание. Остатки всегда в актуальном состоянии, без
              ручных пересчётов и риска запутаться в Excel. Можно быстро найти
              нужный товар и понять, сколько его на складе.
            </Typography>
          </Stack>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            m: 2.5,
            p: 2.5,
            borderRadius: 2,
            border: '1px solid #E5E7EB',
            backgroundColor: 'background.paper',
            boxSizing: 'border-box',
          }}>
          <Stack spacing={1.5}>
            <Stack direction="row" spacing={1} alignItems="center">
              <ShoppingCartOutlinedIcon color="primary" />
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color="text.secondary">
                Работа с заказами
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              Оформление, резервирование и отгрузка заказов в одном месте. Видно
              статус каждого заказа, какие позиции зарезервированы, что уже
              отгружено, а что требует внимания. Это снижает ошибки при сборке и
              помогает не терять заказы в процессе обработки.
            </Typography>
          </Stack>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            m: 2.5,
            p: 2.5,
            borderRadius: 2,
            border: '1px solid #E5E7EB',
            backgroundColor: 'background.paper',
            boxSizing: 'border-box',
          }}>
          <Stack spacing={1.5}>
            <Stack direction="row" spacing={1} alignItems="center">
              <QueryStatsOutlinedIcon color="primary" />
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color="text.secondary">
                Контроль и базовая аналитика
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              Просмотр истории движений по товарам и заказам, базовые отчёты по
              обороту и остаткам. Можно увидеть, какие позиции ходовые, какие
              «лежат» на складе, и где возможен дефицит. Расширенные отчёты и
              дашборды можно будет добавить как следующий шаг.
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
};
