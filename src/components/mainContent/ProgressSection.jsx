import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

function ProgressSection() {
  return (
    <div className="graphs">
      <CircularProgress
        className="customesize"
        variant="determinate"
        thickness={8}
        value={85}
        size={60}
        style={{ transform: 'rotate(-340deg)' }}
        sx={{
          color: 'rgba(0, 59, 126, 1)',
        }}
      />
      <Typography variant="caption">0.97</Typography>
    </div>
  );
}

export default ProgressSection;
