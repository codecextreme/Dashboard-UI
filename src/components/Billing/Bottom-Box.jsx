import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const PaymentMethod = () => {
  return (
    <Box sx={{ 
      p: 2, 
      bgcolor: '#001529', 
      borderRadius: 4,
      maxWidth: '800px',
      background: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'

    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2
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
          <Typography fontSize={12}>
          ADD A NEW CARD
          </Typography>
        </Button>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        gap: 2,
        flexWrap: 'wrap'
      }}>
        {/* Mastercard */}
        <Box
  sx={{
    flex: 1,
    maxWidth: '320px',
    height: '60px',
    p: 1,
    bgcolor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '2px solid', // 🟰 simple border
    borderImageSlice: 1, // 🟰 important for showing gradient properly
    borderImageSource: 'radial-gradient(69.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)'
  }}
>

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
          <EditIcon sx={{ color: 'gray', cursor: 'pointer' , width: '16px'}} />
        </Box>

        {/* Visa Card */}
        <Box
  sx={{
    flex: 1,
    maxWidth: '320px',
    height: '60px',
    p: 1,
    bgcolor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '2px solid', // 🟰 simple border
    borderImageSlice: 1, // 🟰 important for showing gradient properly
    borderImageSource: 'radial-gradient(69.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)'
  }}
>

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
          <EditIcon sx={{ color: 'gray', cursor: 'pointer', width: '16px' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentMethod;