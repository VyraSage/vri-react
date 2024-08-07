import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
} from '@mui/material';

const CopilotInterface = () => {
  const [userQuestion, setUserQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Submitted question:', userQuestion);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Vyrasage Co-Pilot
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            label="User Question"
            placeholder="What's on your mind? Write a detailed question and Vyrasage Co-Pilot will query your data and give you real time answers."
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Generated SQL
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            placeholder="Generated SQL will be placed here."
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Response
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            multiline
            rows={6}
            placeholder="Responses from the Vyrasage Co-Pilot will be placed here."
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default CopilotInterface;