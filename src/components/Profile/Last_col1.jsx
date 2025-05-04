import React, { useState } from 'react';
import { Box, Typography, Switch, Stack } from '@mui/material';

const initialSettings = {
  account: [
    { id: 1, label: 'Email me when someone follows me', enabled: true },
    { id: 2, label: 'Email me when someone answers to...', enabled: false },
    { id: 3, label: 'Email me when someone mentions me', enabled: true }
  ],
  application: [
    { id: 4, label: 'New launches and projects', enabled: false },
    { id: 5, label: 'Monthly product updates', enabled: false },
    { id: 6, label: 'Subscribe to newsletter', enabled: true },
    { id: 7, label: 'Receive mails weekly', enabled: true }
  ]
};

const SettingItem = ({ label, enabled, onToggle }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      py: 0.5,
      gap: 0.7,
    }}
  >
    <Switch
      checked={enabled}
      size="small"
      onChange={onToggle}
      sx={{
        transform: 'scale(0.8)',
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: '#0066ff'
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: '#0066ff'
        }
      }}
    />
    <Typography
      color="white"
      sx={{
        fontSize: '12px',
        opacity: 1,
        lineHeight: 1
      }}
    >
      {label}
    </Typography>
  </Box>
);

const PlatformSettings = () => {
  const [settings, setSettings] = useState(initialSettings);

  const handleToggle = (section, id) => {
    setSettings(prev => ({
      ...prev,
      [section]: prev[section].map(item =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    }));
  };

  return (
    <Box
      sx={{
        p: 2,
        background: 'linear-gradient(27.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 36.65%)',
        borderRadius: 4,
        height: '340px',
        width: '240px',
        boxSizing: 'border-box'
      }}
    >
      <Typography
        variant="h6"
        color="white"
        gutterBottom
        sx={{ fontSize: '16px', mb: 1 }}
      >
        Platform Settings
      </Typography>

      <Stack spacing={1.2}>
        <Box>
          <Typography
            color="gray"
            sx={{
              mb: 0.8,
              fontSize: '12px',
              letterSpacing: '0.03em'
            }}
          >
            ACCOUNT
          </Typography>
          {settings.account.map(setting => (
            <SettingItem
              key={setting.id}
              label={setting.label}
              enabled={setting.enabled}
              onToggle={() => handleToggle('account', setting.id)}
            />
          ))}
        </Box>

        <Box>
          <Typography
            color="gray"
            sx={{
              mb: 0.8,
              fontSize: '12px',
              letterSpacing: '0.03em'
            }}
          >
            APPLICATION
          </Typography>
          {settings.application.map(setting => (
            <SettingItem
              key={setting.id}
              label={setting.label}
              enabled={setting.enabled}
              onToggle={() => handleToggle('application', setting.id)}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default PlatformSettings;
