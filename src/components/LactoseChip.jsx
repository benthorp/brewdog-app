import Chip from '@mui/material/Chip';
import { hasLactose } from '../Utils';

function LactoseChip({ beer }) {
  return (
    hasLactose(beer) && (
      <Chip
        label="CONTAINS LACTOSE"
        color="error"
        sx={{
          margin: '10px 10px 10px',
          position: 'absolute',
          right: 0,
          fontSize: 14,
        }}
      />
    )
  );
}

export default LactoseChip;
