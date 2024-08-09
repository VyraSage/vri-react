import React, { useState, useMemo } from 'react';
import { Card, CardContent, Typography, Pagination, Box } from '@mui/material';
import prompts from '../prompts/prompts.json'; // Import prompts data

const PromptCards = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const totalItems = prompts.length; // Use the length of prompts data
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const cards = useMemo(() => {
    return prompts
      .slice((page - 1) * itemsPerPage, page * itemsPerPage)
      .map((prompt) => (
        <Card 
          key={prompt.id} // Assuming each prompt has a unique 'id' field
          sx={{ maxWidth: 300, m: 1, ':hover': { backgroundColor: 'grey.300' } }}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              {/* Display the Prompt */}
              {prompt.Prompt}
            </Typography>
            <Typography variant="body2">
              {/* Display the Prompt_value */}
              {prompt.Prompt_value}
            </Typography>
          </CardContent>
        </Card>
      ));
  }, [page, itemsPerPage]); // Include itemsPerPage in dependencies

  if (totalPages === 0) return <Typography>No items to display.</Typography>;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {cards}
      </Box>
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </Box>
  );
};

export default PromptCards;
