// src/components/FeedbackDialog.jsx

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
import { submitFeedback } from '../services/api'; // Import the new API function
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating correlation_id

const FeedbackDialog = ({ open, onClose, question, generatedSQL, llmSummarization }) => {
  const [llmStep, setLlmStep] = useState('');
  const [successInfo, setSuccessInfo] = useState('');
  const [improvementInfo, setImprovementInfo] = useState('');

  const handleSubmit = async () => {
    const feedbackData = {
      correlation_id: uuidv4(),
      customer_id: 'Cust123',
      llm_step: llmStep === 'sqlSelect' ? 'SQL' : 'Summary',
      original_question: question,
      llm_generated_sql_select: generatedSQL,
      llm_summary: llmSummarization,
      information_about_success: successInfo,
      needed_improvements: improvementInfo,
    };

    try {
      await submitFeedback(feedbackData);
      onClose(); // Close dialog after successful submission
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Optionally handle errors here (e.g., show a notification)
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
            <FormControlLabel value="sqlSelect" control={<Radio />} label="SQL Select" />
            <FormControlLabel value="llmSummary" control={<Radio />} label="LLM Summary" />
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
          value={question}
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
          value={successInfo}
          onChange={(e) => setSuccessInfo(e.target.value)}
        />

        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Tell us what needs to be improved"
          placeholder="Describe the improvements"
          multiline
          rows={3}
          value={improvementInfo}
          onChange={(e) => setImprovementInfo(e.target.value)}
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
