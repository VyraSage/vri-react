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
  const [llmStep, setLlmStep] = useState('');

  const handleSubmit = () => {
    // TODO: Implement feedback submission logic
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
          value="The original question"
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
          value="SQL Output"
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
          value="LLM Summary"
        />

        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="What did you like about the response?"
          placeholder="Write about the positive attributes of the LLM Response"
          multiline
          rows={3}
        />

        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Tell us what needs to be improved"
          placeholder="Describe the improvements"
          multiline
          rows={3}
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