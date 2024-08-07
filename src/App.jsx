// src/App.jsx

import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md" sx={{ padding: 4, textAlign: 'center' }}>
      <Box sx={{ maxWidth: '65%', margin: '0 auto', textAlign: 'left' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Vyrasage Co-Pilot
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="user_question"
          placeholder="What's on your mind? Write a detailed question and Vyrasage Co-Pilot will query your data and give you real time answers."
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" color="primary" sx={{ mt: 2, mb: 2 }}>
          Submit
        </Button>
        <TextField
          fullWidth
          variant="outlined"
          label="generated-sql"
          placeholder="Generated SQL will be placed here."
          InputProps={{
            readOnly: true,
          }}
          multiline
          rows={4}
          margin="normal"
        />
        <TextField
          fullWidth
          variant="outlined"
          label="response"
          placeholder="Responses from the Vyrasage Co-Pilot will be placed here."
          InputProps={{
            readOnly: true,
          }}
          multiline
          rows={4}
          margin="normal"
        />
      </Box>
    </Container>
  );
}

export default App;
