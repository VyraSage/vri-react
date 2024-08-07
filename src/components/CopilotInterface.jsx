import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import FeedbackDialog from './FeedbackDialog';

const CopilotInterface = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [openFeedback, setOpenFeedback] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulating API call
    setTimeout(() => {
      setResponse(`Here's a simulated response to your question: "${question}"`);
      setIsLoading(false);
    }, 1000);
  };

  const handleFeedbackOpen = () => {
    setOpenFeedback(true);
  };

  const handleFeedbackClose = () => {
    setOpenFeedback(false);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, width: '100%' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Vyrasage Co-Pilot
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Ask a question"
          variant="outlined"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          margin="normal"
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Submit'}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleFeedbackOpen}
          >
            Feedback
          </Button>
        </Box>
      </form>
      {response && (
        <Typography sx={{ mt: 2 }} variant="body1">
          {response}
        </Typography>
      )}
      <FeedbackDialog open={openFeedback} onClose={handleFeedbackClose} />
    </Paper>
  );
};

export default CopilotInterface;