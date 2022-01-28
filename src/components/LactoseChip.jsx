import Chip from '@mui/material/Chip';
import { hasLactose } from '../Utils';

function LactoseChip({ beer }) {
  return (
    hasLactose(beer) && (
      <Chip
        label="has dairy"
        color="warning"
        className="lactose-warning"
        sx={{
          margin: '10px 10px 10px',
          position: 'absolute',
          right: 0,
        }}
      />
    )
  );
}

export default LactoseChip;
