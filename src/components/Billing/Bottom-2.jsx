import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const transactions = [
  {
    id: 1,
    company: 'Netflix',
    date: '27 March 2020, at 12:30 PM',
    amount: -2500,
    type: 'expense',
    category: 'NEWEST'
  },
  {
    id: 2,
    company: 'Apple',
    date: '27 March 2020, at 12:30 PM',
    amount: 2500,
    type: 'income',
    category: 'NEWEST'
  },
  {
    id: 3,
    company: 'Stripe',
    date: '26 March 2020, at 13:45 PM',
    amount: 800,
    type: 'income',
    category: 'YESTERDAY'
  },
  {
    id: 4,
    company: 'HubSpot',
    date: '26 March 2020, at 12:30 PM',
    amount: 1700,
    type: 'income',
    category: 'YESTERDAY'
  },
  {
    id: 5,
    company: 'Webflow',
    date: '26 March 2020, at 05:00 AM',
    amount: 0,
    type: 'pending',
    category: 'YESTERDAY'
  },
  {
    id: 6,
    company: 'Microsoft',
    date: '25 March 2020, at 16:30 PM',
    amount: -987,
    type: 'expense',
    category: 'YESTERDAY'
  }
];

const TransactionItem = ({ transaction }) => {
  const getIcon = () => {
    switch (transaction.type) {
      case 'income':
        return <ArrowUpwardIcon sx={{ color: '#22c55e' }} />;
      case 'expense':
        return <ArrowDownwardIcon sx={{ color: '#ef4444' }} />;
      default:
        return <ErrorOutlineIcon sx={{ color: '#94a3b8' }} />;
    }
  };

  const getAmountColor = () => {
    switch (transaction.type) {
      case 'income':
        return '#22c55e';
      case 'expense':
        return '#ef4444';
      default:
        return '#94a3b8';
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      py: 1
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{
          width: 30,
          height: 30,
          borderRadius: '50%',
          border: '1px solid',
          borderColor: getAmountColor(),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {getIcon()}
        </Box>
        <Box>
          <Typography color="white" sx={{ fontSize: '12px', mb: 0.1 }}>
            {transaction.company}
          </Typography>
          <Typography color="gray" sx={{ fontSize: '10px' }}>
            {transaction.date}
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ color: getAmountColor(), fontSize: '12px'}}>
        {transaction.type === 'pending' ? 'Pending' : 
         `${transaction.amount > 0 ? '+' : ''}$${Math.abs(transaction.amount)}`}
      </Typography>
    </Box>
  );
};

const Transactions = () => {
  return (
    <Box sx={{ 
      p: 2, 
      borderRadius: 4,
      maxWidth: '800px',
      height: '450px',
      background: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'

    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1
      }}>
        <Typography variant="h5" color="white" fontSize={16}>
          Your Transactions
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 1,
          color: 'gray'
        }}>
          <CalendarTodayIcon fontSize="vrysmall" />
          <Typography fontSize={12}>
            23 - 30 March 2020
          </Typography>
        </Box>
      </Box>

      <Stack spacing={1}>
        {['NEWEST', 'YESTERDAY'].map((category) => (
          <Box key={category}>
            <Typography color="gray" sx={{ mb: 2, fontSize: '12px' }}>
              {category}
            </Typography>
            {transactions
              .filter(t => t.category === category)
              .map(transaction => (
                <TransactionItem 
                  key={transaction.id} 
                  transaction={transaction} 
                />
              ))
            }
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Transactions;