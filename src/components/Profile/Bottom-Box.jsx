import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const PaymentMethod = () => {
  return (
    <Box sx={{ 
      p: 3, 
      bgcolor: '#001529', 
      borderRadius: 4,
      maxWidth: '800px'
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1
      }}>
        <Typography variant="h6" color="white" fontSize={16}>
          Payment Method
        </Typography>
        <Button 
          variant="contained"
          sx={{
            bgcolor: '#0066ff',
            '&:hover': {
              bgcolor: '#0052cc',
            }
          }}
        >
          ADD A NEW CARD
        </Button>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        gap: 2,
        flexWrap: 'wrap'
      }}>
        {/* Mastercard */}
        <Box sx={{
          flex: 1,
          maxWidth: '320px',
          p: 2,
          bgcolor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ 
              display: 'flex', 
              gap: -1
            }}>
              <Box
                sx={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  bgcolor: '#ff5f00',
                  opacity: 0.8
                }}
              />
              <Box
                sx={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  bgcolor: '#eb001b',
                  opacity: 0.8
                }}
              />
            </Box>
            <Typography color="white"  fontSize={12}>
              7812 2139 0823 XXXX
            </Typography>
          </Box>
          <EditIcon sx={{ color: 'gray', cursor: 'pointer'}} />
        </Box>

        {/* Visa Card */}
        <Box sx={{
          flex: 1,
          maxWidth: '320px',
          maxHeight: '80px',
          p: 3,
          bgcolor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography 
              sx={{ 
                color: '#1434CB',
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                fontSize: 14
              }}
            >
              VISA
            </Typography>
            <Typography color="white" fontSize={12}>
              7812 2139 0823 XXXX
            </Typography>
          </Box>
          <EditIcon sx={{ color: 'gray', cursor: 'pointer' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentMethod;