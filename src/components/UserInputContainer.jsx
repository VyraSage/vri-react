import React from 'react';
import { Box } from '@mui/material';
import UserInput from './UserInput';
import ToolSelector from './ToolSelector';

const UserInputContainer = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
      <UserInput />
      <ToolSelector />
    </Box>
  );
};

export default UserInputContainer;
