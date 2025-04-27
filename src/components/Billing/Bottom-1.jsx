import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const billingData = [
  {
    id: 1,
    name: 'Oliver Liam',
    company: 'Viking Burrito',
    email: 'oliver@burrito.com',
    vatNumber: 'FRB1235476'
  },
  {
    id: 2,
    name: 'Oliver Liam',
    company: 'Viking Burrito',
    email: 'oliver@burrito.com',
    vatNumber: 'FRB1235476'
  },
  {
    id: 3,
    name: 'Oliver Liam',
    company: 'Viking Burrito',
    email: 'oliver@burrito.com',
    vatNumber: 'FRB1235476'
  }
];

const BillingCard = ({ billing }) => (
  <Box
    sx={{
      p: 2,
      borderRadius: 3,
      mb: 3,
      background: 'linear-gradient(127.09deg, rgba(24, 29, 60, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'

    }}
  >
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 0
    }}>
      <Typography color="white" sx={{ fontSize: '16px' }}>
        {billing.name}
      </Typography>
      <Box sx={{ display: 'flex', gap: 0 }}>
        <Button
          startIcon={<DeleteOutlineIcon />}
          sx={{ color: '#ff4d4d', fontSize: "10px"}}
        >
          DELETE
        </Button>
        <Button
          startIcon={<EditIcon />}
          sx={{ color: 'gray', fontSize: '10px' }}
        >
          EDIT
        </Button>
      </Box>
    </Box>

    <Stack spacing={0}>
      <Typography color="gray" fontSize={10}>
        Company Name: {billing.company}
      </Typography>
      <Typography color="gray" fontSize={10}>
        Email Address: {billing.email}
      </Typography>
      <Typography color="gray" fontSize={10}>
        VAT Number: {billing.vatNumber}
      </Typography>
    </Stack>
  </Box>
);

const BillingInformation = () => {
  return (
    <Box sx={{ 
      p: 3, 
      borderRadius: 4,
      maxWidth: '800px',
      height: '450px',
      background: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'

    }}>
      <Typography 
        variant="h5" 
        fontSize={16}
        color="white" 
        sx={{ mb: 1 }}
      >
        Billing Information
      </Typography>

      {billingData.map((billing) => (
        <BillingCard key={billing.id} billing={billing} />
      ))}
    </Box>
  );
};

export default BillingInformation;