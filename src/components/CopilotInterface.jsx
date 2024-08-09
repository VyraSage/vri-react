import React, { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';
import { postUserQuestion } from '../services/api';
import FeedbackDialog from './FeedbackDialog';

const CopilotInterface = ({ question, setQuestion }) => {
  const [generatedSQL, setGeneratedSQL] = useState('');
  const [llmSummarization, setLlmSummarization] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = await postUserQuestion(question);
      setGeneratedSQL(data.generated_sql || '');
      setLlmSummarization(data.llm_summarization || '');
    } catch (error) {
      console.error('Error fetching data:', error);
      setGeneratedSQL('An error occurred while fetching the response.');
      setLlmSummarization('');
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
    <Box sx={{ width: '100%', maxWidth: 800, p: 2 }}>
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
        {loading ? <CircularProgress size={24} /> : 'Submit'}
      </Button>
      <TextField
        fullWidth
        label="Generated SQL"
        variant="outlined"
        value={generatedSQL}
        multiline
        rows={4}
        InputProps={{ readOnly: true }}
        margin="normal"
      />
      <TextField
        fullWidth
        label="LLM Summarization"
        variant="outlined"
        value={llmSummarization}
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
      <FeedbackDialog
        open={feedbackOpen}
        onClose={handleFeedbackClose}
        originalQuestion={question}
        generatedSQL={generatedSQL}
        llmSummarization={llmSummarization}
      />
    </Box>
  );
};

export default CopilotInterface;