import React from 'react';
import { TextField } from '@mui/material';

const UserInput = ({ value, onChange, onSubmit }) => {
  return (
    <TextField
      variant="outlined"
      placeholder="Place your message here for the VRI CoPilot"
      fullWidth
      sx={{
        marginRight: 2,
        '& .MuiOutlinedInput-root': {
          overflowY: 'auto',
          maxHeight: '10rem', // Approximately 10 lines of text
        },
      }}
      multiline
      minRows={1}
      maxRows={10}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault(); // Prevent default behavior if not using Shift+Enter
          onSubmit();
        }
      }}
      inputProps={{ maxLength: 1000 }}
    />
  );
};

export default UserInput;
