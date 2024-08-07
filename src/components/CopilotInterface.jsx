import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { fetchData } from '../services/api';
import FeedbackDialog from './FeedbackDialog';

const CopilotInterface = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = await fetchData(question);
      setResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('An error occurred while fetching the response.');
    }
    setLoading(false);
  };

  const handleFeedbackOpen = () => {
    setFeedbackOpen(true);
  };

  const handleFeedbackClose = () => {
    setFeedbackOpen(false);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Vyrasage Co-Pilot
      </Typography>
      <TextField
        fullWidth
        label="Ask a question"
        variant="outlined"
        value={question}
        onChange={handleQuestionChange}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={loading}
        sx={{ mt: 2, mb: 2 }}
      >
        {loading ? 'Loading...' : 'Submit'}
      </Button>
      <TextField
        fullWidth
        label="Response"
        variant="outlined"
        value={response}
        multiline
        rows={4}
        InputProps={{ readOnly: true }}
        margin="normal"
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleFeedbackOpen}
        sx={{ mt: 2 }}
      >
        Feedback
      </Button>
      <FeedbackDialog open={feedbackOpen} onClose={handleFeedbackClose} />
    </Box>
  );
};

export default CopilotInterface;