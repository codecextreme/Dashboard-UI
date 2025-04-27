import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const invoices = [
  {
    id: 'MS-415646',
    date: 'March, 01, 2020',
    amount: 180
  },
  {
    id: 'RV-126749',
    date: 'February, 10, 2021',
    amount: 250
  },
  {
    id: 'FB-212562',
    date: 'April, 05, 2020',
    amount: 560
  },
  {
    id: 'QW-103578',
    date: 'June, 25, 2019',
    amount: 120
  },
  {
    id: 'AR-803481',
    date: 'March, 01, 2019',
    amount: 300
  }
];

const InvoiceItem = ({ invoice }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      py: 0.5,
     
    }}
  >
    <Box>
      <Typography color="white" sx={{ fontSize: '12px', mb: 0.1 }}>
        {invoice.date}
      </Typography>
      <Typography color="gray" sx={{ fontSize: '10px' }}>
        #{invoice.id}
      </Typography>
    </Box>
    
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
      <Typography color="gray" sx={{ fontSize: '12px' }}>
        ${invoice.amount}
      </Typography>
      <Button
        startIcon={<PictureAsPdfIcon />}
        sx={{
          color: 'gray',
          '&:hover': {
            color: 'white'
          }
        }}
      >
        <Typography sx={{fontSize: '10px', color:"white"}}>
        PDF
        </Typography>
      </Button>
    </Box>
  </Box>
);

const Invoices = () => {
  return (
    <Box sx={{ 
      p: 2, 
      bgcolor: '#001529', 
      borderRadius: 4,
      maxWidth: '800px',
      height: '342px',
      background: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'

    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2
      }}>
        <Typography variant="h5" color="white"  fontSize={16}>
          Invoices
        </Typography>
        <Button 
          variant="contained"
          sx={{
            bgcolor: '#0066ff',
            '&:hover': {
              bgcolor: '#0052cc'
            }
          }}
        >
          <Typography fontSize={12}>
          VIEW ALL
          </Typography>
        </Button>
      </Box>

      <Stack spacing={1.5}>
        {invoices.map((invoice) => (
          <InvoiceItem key={invoice.id} invoice={invoice} />
        ))}
      </Stack>
    </Box>
  );
};

export default Invoices;