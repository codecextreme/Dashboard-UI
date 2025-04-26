import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', visitors: 120, signups: 80 },
  { month: 'Feb', visitors: 200, signups: 150 },
  { month: 'Mar', visitors: 180, signups: 130 },
  { month: 'Apr', visitors: 250, signups: 180 },
  { month: 'May', visitors: 300, signups: 210 },
  { month: 'Jun', visitors: 270, signups: 160 },
  { month: 'Jul', visitors: 350, signups: 250 },
  { month: 'Aug', visitors: 400, signups: 300 },
  { month: 'Sep', visitors: 320, signups: 220 },
  { month: 'Oct', visitors: 290, signups: 200 },
  { month: 'Nov', visitors: 310, signups: 190 },
  { month: 'Dec', visitors: 380, signups: 260 },
];

const MonthlyChart = () => {
  return (
    
    <div style={{ width: '99%', height: 250 }}>
       <Box ml={2} mt={1} mb={1}>
              <Typography variant="h6" color="white" fontSize={16}>
                Active Users
              </Typography>
              <Typography color="#4caf50" fontSize={12}>
                (+5) More in 2021
              </Typography>
            </Box>
      <ResponsiveContainer width="99%" height={250}>
        <AreaChart data={data}  >
          <defs>
            <linearGradient id="gradientVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0075FF" stopOpacity={1} />
              <stop offset="100%" stopColor="rgba(0, 117, 255, 0)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradientSignups" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(44, 217, 255, 0.36)" stopOpacity={1} />
              <stop offset="100%" stopColor="rgba(44, 217, 255, 0)" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255, 255, 255, 0.2)" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: '#CBD5E0' }}/>
          <YAxis domain={[0, 500]} tickCount={6} tickLine={false} axisLine={false} tick={{ fill: '#CBD5E0' }}/>
          <Tooltip />
        

          {/* Gradient under Visitors line */}
          <Area
            type="monotone"
            dataKey="visitors"
            stroke="#0075FF"
            fill="url(#gradientVisitors)"
            strokeWidth={2}
          />

          {/* Gradient under Signups line */}
          <Area
            type="monotone"
            dataKey="signups"
            stroke="#2CD9FF"
            fill="url(#gradientSignups)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
