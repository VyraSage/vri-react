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

const FeedbackDialog = ({ open, onClose }) => {
  const [llmStep, setLlmStep] = useState('sql');

  const handleSubmit = () => {
    // Here you would handle the submission of feedback
    // For now, we'll just close the dialog
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Provide Feedback</DialogTitle>
      <DialogContent>
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">LLM Step</FormLabel>
          <RadioGroup
            row
            name="llm-step"
            value={llmStep}
            onChange={(e) => setLlmStep(e.target.value)}
          >
            <FormControlLabel value="sql" control={<Radio />} label="SQL Select" />
            <FormControlLabel value="llm" control={<Radio />} label="LLM Summary" />
          </RadioGroup>
        </FormControl>

        <Typography variant="subtitle1" gutterBottom>
          User's original question
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          disabled
          value="The original question"
          margin="normal"
        />

        <Typography variant="subtitle1" gutterBottom>
          SQL Statement
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          disabled
          value="SQL Output"
          margin="normal"
        />

        <Typography variant="subtitle1" gutterBottom>
          Final LLM Response
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          disabled
          value="LLM Summary"
          margin="normal"
        />

        <TextField
          fullWidth
          label="What did you like about the response?"
          placeholder="Write about the positive attributes of the LLM Response"
          multiline
          rows={4}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Tell us what needs to be improved"
          placeholder="Describe the improvements"
          multiline
          rows={4}
          margin="normal"
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