import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { homePagePossibilitiesText } from './content';

export const possibilities = [
  {
    textTitle: homePagePossibilitiesText[0].title,
    testDescription: homePagePossibilitiesText[0].description,
    icon: <Inventory2OutlinedIcon color="primary" />,
  },
  {
    textTitle: homePagePossibilitiesText[1].title,
    testDescription: homePagePossibilitiesText[1].description,
    icon: <ShoppingCartOutlinedIcon color="primary" />,
  },
  {
    textTitle: homePagePossibilitiesText[2].title,
    testDescription: homePagePossibilitiesText[2].description,
    icon: <QueryStatsOutlinedIcon color="primary" />,
  },
];
