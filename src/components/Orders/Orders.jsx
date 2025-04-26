import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LockIcon from '@mui/icons-material/Lock';
import AdobeIcon from '@mui/icons-material/Apps';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const orders = [
  {
    id: 1,
    icon: <NotificationsIcon sx={{ color: '#3182CE', fontSize: 18 }} />,
    title: '$2400, Design changes',
    timestamp: '22 DEC 7:20 PM',
  },
  {
    id: 2,
    icon: <ShoppingCartIcon sx={{ color: '#E53E3E', fontSize: 18 }} />,
    title: 'New order #4219423',
    timestamp: '21 DEC 11:21 PM',
  },
  {
    id: 3,
    icon: <ShoppingBagIcon sx={{ color: '#3182CE', fontSize: 18 }} />,
    title: 'Server Payments for April',
    timestamp: '21 DEC 9:28 PM',
  },
  {
    id: 4,
    icon: <CreditCardIcon sx={{ color: '#F6AD55', fontSize: 18 }} />,
    title: 'New card added for order #3210145',
    timestamp: '20 DEC 3:52 PM',
  },
  {
    id: 5,
    icon: <LockIcon sx={{ color: '#ffffff', fontSize: 18 }} />,
    title: 'Unlock packages for Development',
    timestamp: '19 DEC 11:35 PM',
  },
  {
    id: 6,
    icon: <AdobeIcon sx={{ color: '#FF0080', fontSize: 18 }} />,
    title: 'New order #9851258',
    timestamp: '18 DEC 4:41 PM',
  }
];

const OrderItem = ({ order }) => (
  <Stack
    direction="row"
    spacing={2}
    sx={{
      py: 0,
      alignItems: 'center',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      '&:last-child': {
        borderBottom: 'none'
      }
    }}
  >
    <Box
      sx={{
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {order.icon}
    </Box>
    <Box>
      <Typography color="white" sx={{ fontSize: '12px', fontWeight: 500 }}>
        {order.title}
      </Typography>
      <Typography color="gray" sx={{ fontSize: '9px' }}>
        {order.timestamp}
      </Typography>
    </Box>
  </Stack>
);

const OrdersOverview = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)',
        borderRadius: 4,
        p: 3,
        maxWidth: 500,
        width: '100%',
        height: 346
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" color="white" fontSize={16}>
          Orders overview
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CheckCircleIcon sx={{ color: '#48BB78', fontSize: 12 }} />
          <Typography color="gray" fontSize={12}>
            <span style={{ color: '#48BB78', fontSize: 12 }}>+30%</span> this month
          </Typography>
        </Box>
      </Box>

      <Stack spacing={1.5}>
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </Stack>
    </Box>
  );
};

export default OrdersOverview;