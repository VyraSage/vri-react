// src/components/PromptCards.jsx

import React, { useState, useMemo } from 'react';
import { Card, CardContent, Typography, Pagination, Box, IconButton, Modal } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import prompts from '../prompts/prompts.json'; // Import prompts data

const PromptCards = ({ onPromptSelect }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const totalItems = prompts.length; // Use the length of prompts data
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPromptValue, setSelectedPromptValue] = useState('');

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleCardClick = (prompt) => {
    onPromptSelect(prompt.Prompt); // This function will handle setting the input and submitting
  };

  const handleModalOpen = (promptValue) => {
    setSelectedPromptValue(promptValue);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedPromptValue('');
  };

  const cards = useMemo(() => {
    return prompts
      .slice((page - 1) * itemsPerPage, page * itemsPerPage)
      .map((prompt) => (
        <Card 
          key={prompt.id} // Assuming each prompt has a unique 'id' field
          sx={{ maxWidth: 225, m: 1, ':hover': { backgroundColor: 'grey.300' } }}
          onClick={() => handleCardClick(prompt)}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="subtitle1" component="div">
                {/* Display the short_prompt */}
                {prompt.short_prompt}
              </Typography>
              <IconButton
                onClick={(event) => {
                  event.stopPropagation();
                  handleModalOpen(prompt.Prompt_value);
                }}
              >
                <InfoIcon />
              </IconButton>
            </Box>
            <Typography variant="body2">
              {/* Display the Prompt */}
              {prompt.Prompt}
            </Typography>
          </CardContent>
        </Card>
      ));
  }, [page, itemsPerPage]); // Include itemsPerPage in dependencies

  if (totalPages === 0) return <Typography>No items to display.</Typography>;

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {cards}
        </Box>
        <Pagination count={totalPages} page={page} onChange={handleChange} />
      </Box>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="prompt-value-modal-title"
        aria-describedby="prompt-value-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="prompt-value-modal-title" variant="h6" component="h2">
            Additional Information
          </Typography>
          <Typography id="prompt-value-modal-description" sx={{ mt: 2 }}>
            {selectedPromptValue}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default PromptCards;
