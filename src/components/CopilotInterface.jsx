// src/components/CopilotInterface.jsx

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { postUserQuestion } from '../services/api';
import FeedbackDialog from './FeedbackDialog';
import { useLocation } from 'react-router-dom';

const CopilotInterface = ({ question, setQuestion }) => {
  const [generatedSQL, setGeneratedSQL] = useState('');
  const [llmSummarization, setLlmSummarization] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  // Get the query parameters from the URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const showGeneratedSql = searchParams.get('test') === 'true';
  const hideHeader = searchParams.get('chat') === 'true';  // New line to check for chat parameter

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
    <Box sx={{ width: '100%', maxWidth: 1300, p: 2 }}>
      {!hideHeader && (  // Conditional rendering of the header
        <Typography variant="h4" gutterBottom>
          Retlia Co-Pilot
        </Typography>
      )}
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

      {showGeneratedSql && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="generated-sql-content"
            id="generated-sql-header"
          >
            <Typography>Generated SQL</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              fullWidth
              variant="outlined"
              value={generatedSQL}
              multiline
              rows={6}
              InputProps={{ readOnly: true }}
              margin="normal"
            />
          </AccordionDetails>
        </Accordion>
      )}

      <TextField
        fullWidth
        label="LLM Summarization"
        variant="outlined"
        value={llmSummarization}
        multiline
        rows={8}
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