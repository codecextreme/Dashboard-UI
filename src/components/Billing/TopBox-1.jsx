import React from 'react';
import { Box, Typography } from '@mui/material';

const CreditCard = () => {
  return (
   <Box
  sx={{
    width: '100%',      // full width of parent
    height: '100%',     // full height of parent
    borderRadius: '20px',
    p: 2,
    background: 'linear-gradient(135deg, #0055ff 0%, #000066 100%)',
    position: 'relative',
    overflow: 'hidden'
  }}
>
      {/* Card Brand */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            fontWeight: 600,
            fontSize: 18
          }}
        >
          Vision UI
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          gap: -1.5 
        }}>
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              bgcolor: 'rgba(255,255,255,0.6)',
            }}
          />
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              bgcolor: 'rgba(255,255,255,0.4)',
            }}
          />
        </Box>
      </Box>

      {/* Card Number */}
      <Typography
        variant="h4"
        sx={{
          color: 'white',
          letterSpacing: '4px',
          mb: 1,
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        7812 2139 0823 XXXX
      </Typography>

      {/* Card Details */}
      <Box
        sx={{
          display: 'flex',
          gap: 4,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: 12,
              mb: 1,
            }}
          >
            VALID THRU
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            05/24
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: 12,
              mb: 1,
            }}
          >
            CVV
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            09X
          </Typography>
        </Box>
      </Box>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(33, 33, 255, 0.2) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default CreditCard;