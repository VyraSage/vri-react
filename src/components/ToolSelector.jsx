import React from 'react';
import { Radio, RadioGroup, FormControlLabel, Box } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import DescriptionIcon from '@mui/icons-material/Description';
import AssistantIcon from '@mui/icons-material/Assistant';

const ToolSelector = () => {
  return (
    <RadioGroup row defaultValue="database">
      <FormControlLabel
        value="database"
        control={<Radio icon={<StorageIcon />} checkedIcon={<StorageIcon />} />}
        label=""
        sx={{ marginRight: 1 }}
      />
      <FormControlLabel
        value="document"
        control={<Radio icon={<DescriptionIcon />} checkedIcon={<DescriptionIcon />} />}
        label=""
        sx={{ marginRight: 1 }}
      />
      <FormControlLabel
        value="assistant"
        control={<Radio icon={<AssistantIcon />} checkedIcon={<AssistantIcon />} />}
        label=""
      />
    </RadioGroup>
  );
};

export default ToolSelector;
