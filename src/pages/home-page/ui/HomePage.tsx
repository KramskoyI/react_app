import { Stack, Typography } from '@mui/material';

import { Possibilities, TitlePage } from '@shared/ui';

import { homePageText } from '../content';
import { possibilities } from '../model';
import {
  homeCapabilitiesDescriptionStyles,
  homeCapabilitiesSectionStyles,
  homeCapabilitiesTitleStyles,
  homeIntroSectionStyles,
  homeIntroTextStyles,
} from './styles';

export const HomePage = () => {
  return (
    <div>
      <Stack spacing={3} sx={homeIntroSectionStyles}>
        <TitlePage text={homePageText.title} />

        <Typography variant="body1" sx={homeIntroTextStyles}>
          {homePageText.description}
        </Typography>
      </Stack>

      <Stack spacing={1} sx={homeCapabilitiesSectionStyles}>
        <Typography variant="h6" sx={homeCapabilitiesTitleStyles}>
          {homePageText.capabilitiesTitle}
        </Typography>
        <Typography variant="body2" sx={homeCapabilitiesDescriptionStyles}>
          {homePageText.capabilitiesDescription}
        </Typography>
      </Stack>

      <Stack spacing={6}>
        {possibilities.map(({ textTitle, testDescription, icon }) => (
          <Possibilities
            key={textTitle}
            testDescription={testDescription}
            textTitle={textTitle}
            icon={icon}
          />
        ))}
      </Stack>
    </div>
  );
};
