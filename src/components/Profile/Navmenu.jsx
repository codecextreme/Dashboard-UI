import React from 'react';
import { Box, Button, Avatar, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import fram from '../../assets/Media/Images/fram.png'

const Navbar = () => {
  return (
    <Box
      sx={{
        width: '1020px',
        height: '80px',
        background: 'linear-gradient(112.83deg, rgba(6, 11, 40, 0.94) 0%, rgba(10, 14, 35, 0.62) 110.84%)',
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
      }}
    >
      {/* Left Section - Profile */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          src= {fram}
          variant="square"
          sx={{ 
            width: 50, 
            height: 50,
            borderRadius: 1
          }}
        />
        <Box>
          <Typography color="white" sx={{ fontWeight: 500 }}>
            Mark Johnson
          </Typography>
          <Typography color="gray" sx={{ fontSize: '0.875rem' }}>
            mark@simmmple.com
          </Typography>
        </Box>
      </Box>

      {/* Right Section - Buttons */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          startIcon={<VisibilityIcon />}
          sx={{
            bgcolor: '#1e88e5',
            '&:hover': { bgcolor: '#1976d2' },
            textTransform: 'none',
          }}
        >
          Overview
        </Button>
        <Button
          startIcon={<GroupsIcon />}
          sx={{
            color: 'gray',
            '&:hover': { color: 'white' },
            textTransform: 'none',
          }}
        >
          Teams
        </Button>
        <Button
          startIcon={<AccountTreeIcon />}
          sx={{
            color: 'gray',
            '&:hover': { color: 'white' },
            textTransform: 'none',
          }}
        >
          Projects
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;