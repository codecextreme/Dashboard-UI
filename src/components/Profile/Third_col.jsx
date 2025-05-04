import React from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ProfileInfo = () => {
  return (
    <Box
      sx={{
        width: '310px',
        height: '250px',
        p: 2,
        borderRadius: 4,
        overflow: 'hidden',
        background: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)',
      }}
    >
      <Typography variant="h5" color="white" fontSize={16}>
        Profile Informations
      </Typography>

      <Typography
        color="gray"
        sx={{
          mb: 1,
          mt: 1,
          fontSize: '11.7px',
          lineHeight: '1',
        }}
      >
        Hi, I'm Mark Johnson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term.
      </Typography>

      <Stack spacing={1}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography color="gray" sx={{ width: '120px', fontSize: 12, marginTop: 2 }}>
            Full Name:
          </Typography>
          <Typography color="white" fontSize={12} marginTop={2}>
            Mark Johnson
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography color="gray" sx={{ width: '120px', fontSize: 12 }}>
            Mobile:
          </Typography>
          <Typography color="white" fontSize={12}>
            (44) 123 1234 123
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography color="gray" sx={{ width: '120px', fontSize: 12 }}>
            Email:
          </Typography>
          <Typography color="white" fontSize={12}>
            mark@simmmple.com
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography color="gray" sx={{ width: '120px', fontSize: 12 }}>
            Location:
          </Typography>
          <Typography color="white" fontSize={12}>
            United States
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography color="gray" sx={{ width: '120px', fontSize: 12 }}>
            Social Media:
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton size="small" sx={{ color: 'white' }}>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white' }}>
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white' }}>
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProfileInfo;
