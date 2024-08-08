import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { postFeedback } from '../services/api';

const FeedbackDialog = ({ open, onClose, originalQuestion, generatedSQL, llmSummarization }) => {
  const [llmStep, setLlmStep] = useState('SQL');
  const [likedResponse, setLikedResponse] = useState('');
  const [improvements, setImprovements] = useState('');

  const handleSubmit = async () => {
    const feedbackData = {
      correlation_id: uuidv4(),
      customer_id: "Cust123",
      llm_step: llmStep,
      original_question: originalQuestion,
      llm_generated_sql_select: generatedSQL,
      llm_summary: llmSummarization,
      information_about_success: likedResponse,
      needed_improvements: improvements
    };

    try {
      await postFeedback(feedbackData);
      onClose();
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Provide Feedback</DialogTitle>
      <DialogContent>
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">LLM Step</FormLabel>
          <RadioGroup
            row
            value={llmStep}
            onChange={(e) => setLlmStep(e.target.value)}
          >
            <FormControlLabel value="SQL" control={<Radio />} label="SQL Select" />
            <FormControlLabel value="Summary" control={<Radio />} label="LLM Summary" />
          </RadioGroup>
        </FormControl>

        <Typography variant="subtitle1" gutterBottom>
          User's original question
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{ readOnly: true }}
          label="The original question"
          value={originalQuestion}
        />

        <Typography variant="subtitle1" gutterBottom>
          SQL Statement
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{ readOnly: true }}
          label="SQL Output"
          value={generatedSQL}
        />

        <Typography variant="subtitle1" gutterBottom>
          Final LLM Response
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{ readOnly: true }}
          label="LLM Summary"
          value={llmSummarization}
        />

        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="What did you like about the response?"
          placeholder="Write about the positive attributes of the LLM Response"
          multiline
          rows={3}
          value={likedResponse}
          onChange={(e) => setLikedResponse(e.target.value)}
        />

        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Tell us what needs to be improved"
          placeholder="Describe the improvements"
          multiline
          rows={3}
          value={improvements}
          onChange={(e) => setImprovements(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit Feedback
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FeedbackDialog;