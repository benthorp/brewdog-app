import Chip from '@mui/material/Chip';
import { hasDryHops } from '../Utils';

function DryHopsChip({ beer }) {
  return (
    hasDryHops(beer) && (
      <Chip
        label="Dry Hopped"
        color="success"
        sx={{
          margin: '10px 10px 10px',
          position: 'absolute',
          left: 0,
          fontSize: 14,
        }}
      />
    )
  );
}

export default DryHopsChip;
