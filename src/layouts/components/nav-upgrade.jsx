import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { alpha as hexAlpha } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';

import { Label } from 'src/components/label';

import { useMockedUser } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export function NavUpgrade({ sx, ...other }) {
  const { user } = useMockedUser();

  return (
  <></>
  );
}

// ----------------------------------------------------------------------

export function UpgradeBlock({ sx, ...other }) {
  return (
 <></>
  );
}
