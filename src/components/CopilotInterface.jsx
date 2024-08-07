import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  CircularProgress,
} from '@mui/material';
import { postUserQuestion } from '../services/api';

const CopilotInterface = () => {
  const [userQuestion, setUserQuestion] = useState('');
  const [generatedSQL, setGeneratedSQL] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneratedSQL('');
    setResponse('');

    try {
      const data = await postUserQuestion(userQuestion);
      setGeneratedSQL(data.generated_sql);
      setResponse(data.llm_summarization);
    } catch (error) {
      setResponse(`Error: ${error.response?.status || 'Unknown'} - ${error.message}`);
    } finally {
      setIsLoading(false);
    }
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
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : 'Submit'}
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
            value={generatedSQL}
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
            value={response}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default CopilotInterface;