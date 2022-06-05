import BuildIcon from '@mui/icons-material/Build';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotesIcon from '@mui/icons-material/Notes';
import { Configuration, Status, Logs } from '../pages';

export const navbarItems = [
  {
    id: 0,
    icon: <BuildIcon />,
    label: 'Configuration',
    element: <Configuration />,
    route: '/',
  },
  {
    id: 1,
    icon: <InsertChartIcon />,
    label: 'Status',
    element: <Status />,
    route: '/status',
  },
  {
    id: 2,
    icon: <NotesIcon />,
    label: 'Logs',
    element: <Logs />,
    route: '/logs',
  }
]