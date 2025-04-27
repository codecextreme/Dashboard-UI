import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const CreditBalance = () => {
  return (
    <Box sx={{ 
      bgcolor: '#001529',
      borderRadius: 4,
      p: 3,
      maxWidth: 600
    }}>
      {/* Main Balance Card */}
      <Box sx={{
        bgcolor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 4,
        width: 254,
        height: 68,
        p: 2,
        mb: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        <Box>
          <Typography 
            color="gray"
            sx={{ mb: 0.4, fontSize: 12 }}
          >
            Credit Balance
          </Typography>
          <Typography 
            variant="h3" 
            color="white"
            sx={{ 
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: '-0.5px'
            }}
          >
            $25,215
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box component="img"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjIgMTJoLTRsLTMgOUw5IDNoLTRcIi8+PC9zdmc+"
            sx={{ 
              width: 25,
              height: 25,
              filter: 'brightness(0.7)'
            }}
          />
          <IconButton sx={{ color: 'gray' }}>
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Newest Transaction */}
      <Box>
        <Typography 
          color="gray"
          sx={{ mb: 1, fontSize: 12 }}
        >
          NEWEST
        </Typography>

        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{
              bgcolor: 'rgba(34, 197, 94, 0.2)',
              borderRadius: 2,
              p: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <AccountBalanceIcon sx={{ color: '#22c55e' }} />
            </Box>
            
            <Box>
              <Typography color="white" sx={{ fontSize: 14 }}>
                Bill & Taxes
              </Typography>
              <Typography color="gray" sx={{ fontSize: 12 }}>
                Today, 16:36
              </Typography>
            </Box>
          </Box>

          <Typography 
            color="white"
            sx={{ fontSize: 16 }}
          >
            -$154.50
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CreditBalance;