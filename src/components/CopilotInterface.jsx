import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
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

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const showGeneratedSql = searchParams.get('test') === 'true';
  const hideHeader = searchParams.get('chat') === 'true';

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
      {!hideHeader && (
        <Box
          component="img"
          sx={{
            height: 60, // Adjust this value to match your desired height
            mb: 2, // margin bottom for spacing
            display: 'block', // ensures proper spacing
          }}
          alt="Retlia AI Assistant"
          src="/Retlia-logo-transparent-gif.gif"
        />
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

      <Paper 
        variant="outlined" 
        sx={{ 
          p: 2, 
          mt: 2, 
          mb: 2,
          minHeight: '200px',
          backgroundColor: '#fafafa',
          '& pre': {
            backgroundColor: '#f0f0f0',
            padding: '8px',
            borderRadius: '4px',
            overflowX: 'auto'
          },
          '& code': {
            backgroundColor: '#f0f0f0',
            padding: '2px 4px',
            borderRadius: '4px'
          }
        }}
      >
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          LLM Summarization
        </Typography>
        <ReactMarkdown>
          {llmSummarization}
        </ReactMarkdown>
      </Paper>

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