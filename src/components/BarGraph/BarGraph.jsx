import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { Box, Typography, Grid, Paper } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const data = [
  { name: '1', value: 220 },
  { name: '2', value: 420 },
  { name: '3', value: 110 },
  { name: '4', value: 190 },
  { name: '5', value: 500 },
  { name: '6', value: 420 },
  { name: '7', value: 670 } 
];

const StatItem = ({ icon, label, value }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <Paper
      sx={{
        p: 0.3,
        borderRadius: 1,
        bgcolor: '#0066ff',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 22,
        height: 22,
      }}
    >
      {React.cloneElement(icon, { sx: { fontSize: 12 } })}
    </Paper>
    <Box>
      <Typography variant="caption" color="gray" lineHeight={1}>
        {label}
      </Typography>
      <Typography
        variant="body2"
        color="white"
        sx={{ position: 'relative', fontWeight: 400 }}
      >
        {value}
        <Box
          sx={{
            position: 'absolute',
            bottom: -2,
            left: 0,
            width: '60%',
            height: 2,
            background: 'linear-gradient(90deg, #0066ff 180%, transparent 20%)',
          }}
        />
      </Typography>
    </Box>
  </Box>
);

const ActiveUsersGraph = () => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 4,
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background:
          'linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)',
      }}
    >
      {/* Chart container */}
      <Box
        sx={{
          borderRadius: 2,
          background:
            'linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)',
        }}
      >
        <ResponsiveContainer width="100%" height={170}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 1, bottom: 2 }}
          >
            <CartesianGrid stroke="transparent" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="#666"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#666"
              tickLine={false}
              axisLine={false}
            />
            <Bar
              dataKey="value"
              fill="#fff"
              radius={[20, 20, 0, 0]}
              barSize={6}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* Titles */}
      <Box mb={0.1} mt={0.1}>
        <Typography variant="h6" color="white" fontSize={16}>
          Active Users
        </Typography>
        <Typography color="#4caf50" fontSize={12}>
          (+23) than last week
        </Typography>
      </Box>

      {/* Stats grid */}
      <Grid container spacing={3} mt={0.1}>
        <Grid item xs={6}>
          <StatItem icon={<FolderIcon fontSize="small" />} label="Users" value="32,984" />
        </Grid>
        <Grid item xs={6}>
          <StatItem icon={<RocketLaunchIcon fontSize="small" />} label="Clicks" value="2.42m" />
        </Grid>
        <Grid item xs={6}>
          <StatItem icon={<ShoppingCartIcon fontSize="small" />} label="Sales" value="2,400$" />
        </Grid>
        <Grid item xs={6}>
          <StatItem icon={<VpnKeyIcon fontSize="small" />} label="Items" value="320" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActiveUsersGraph;
