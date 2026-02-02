import { Stack, Typography } from '@mui/material';
import { Possibilities, TitlePage } from '@shared/ui';

import { possibilities } from './consts';

export const Home = () => {
  return (
    <div>
      <Stack spacing={3} sx={{ mb: 4 }}>
        <TitlePage text="Складское приложение" />

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
        {possibilities.map(({ textTitle, testDescription, icon }) => (
          <Possibilities
            testDescription={testDescription}
            textTitle={textTitle}
            icon={icon}
          />
        ))}
      </Stack>
    </div>
  );
};
