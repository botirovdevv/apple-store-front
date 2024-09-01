"use client";
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MaterialInput() {

  return (
    <Box
  component="form"
  sx={{ '& > :not(style)': { margin: "11px 0", width: '100%', height: '56px' } }}
  autoComplete="off"
>
      <TextField
        id="filled-basic"
        label="Your Name"
        variant="filled"
        className="input"
        sx={{
          '& .MuiFilledInput-root': {
            border: '1px solid rgba(255, 255, 255, 0.24)',
            borderRadius: '12px',
            padding: '8px 12px',
            width: '100%',
            height: '56px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            boxShadow: 'none',
            '&:before': {
              display: 'none',
            },
            '&:after': {
              display: 'none',
            },
            '&:hover': {
              border: '1px solid rgba(255, 255, 255, 0.24)',
              boxShadow: 'none',
              '&:before': {
                display: 'none',
              },
            },
            '&.Mui-focused': {
              border: '1px solid rgba(255, 255, 255, 0.6)',
              padding: '9px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
            },
          },
          '& .MuiInputBase-input': {
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '140%',
            color: '#fff',
          },
          '& .MuiInputLabel-root': {
            fontWeight: 700,
            fontSize: '10px',
            lineHeight: '140%',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: '#fff',
          },
        }}
      />

      <TextField
        id="filled-basic"
        label="Phone Number"
        variant="filled"
        className="input"
        sx={{
          '& .MuiFilledInput-root': {
            border: '1px solid rgba(255, 255, 255, 0.24)',
            borderRadius: '12px',
            padding: '8px 12px',
            width: '100%',
            height: '56px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            boxShadow: 'none',
            '&:before': {
              display: 'none',
            },
            '&:after': {
              display: 'none',
            },
            '&:hover': {
              border: '1px solid rgba(255, 255, 255, 0.24)',
              boxShadow: 'none',
              '&:before': {
                display: 'none',
              },
            },
            '&.Mui-focused': {
              border: '1px solid rgba(255, 255, 255, 0.6)',
              padding: '9px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
            },
          },
          '& .MuiInputBase-input': {
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '140%',
            color: '#fff',
          },
          '& .MuiInputLabel-root': {
            fontWeight: 700,
            fontSize: '10px',
            lineHeight: '140%',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: '#fff',
          },
        }}
      />
    </Box>
  );
}
