import React from 'react';
import { Radio, RadioGroup, FormControlLabel, Box, Tooltip } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import DescriptionIcon from '@mui/icons-material/Description';
import AssistantIcon from '@mui/icons-material/Assistant';
import { useChatContext } from '../context/ChatContext';

const ToolSelector = () => {
  const { selectedTool, setSelectedTool } = useChatContext();

  return (
    <RadioGroup
      row
      value={selectedTool}
      onChange={(e) => setSelectedTool(e.target.value)}
    >
      <Tooltip title="Ask VRI a question by using your retail data as the source" arrow>
        <FormControlLabel
          value="database"
          control={<Radio icon={<StorageIcon />} checkedIcon={<StorageIcon />} />}
          label=""
          sx={{ marginRight: 1 }}
        />
      </Tooltip>

      <Tooltip title="Query your text documents to find an answer to a question" arrow>
        <FormControlLabel
          value="document"
          control={<Radio icon={<DescriptionIcon />} checkedIcon={<DescriptionIcon />} />}
          label=""
          sx={{ marginRight: 1 }}
        />
      </Tooltip>

      <Tooltip title="Ask the VRI Agent for advice without referencing your dataset" arrow>
        <FormControlLabel
          value="assistant"
          control={<Radio icon={<AssistantIcon />} checkedIcon={<AssistantIcon />} />}
          label=""
        />
      </Tooltip>
    </RadioGroup>
  );
};

export default ToolSelector;
