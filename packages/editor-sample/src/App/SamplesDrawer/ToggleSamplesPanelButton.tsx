import React from 'react';

import { FirstPageOutlined, MenuOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { setEditorState, useSamplesDrawerOpen } from '../../documents/editor/EditorContext';

export default function ToggleSamplesPanelButton() {
  const samplesDrawerOpen = useSamplesDrawerOpen();

  const handleClick = () => {
    setEditorState({ samplesDrawerOpen: !samplesDrawerOpen });
  };
  if (samplesDrawerOpen) {
    return (
      <IconButton onClick={handleClick}>
        <FirstPageOutlined fontSize="small" />
      </IconButton>
    );
  }
  return (
    <IconButton onClick={handleClick}>
      <MenuOutlined fontSize="small" />
    </IconButton>
  );
}
