import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  IconButton,
  List,
  ListItem,
  Stack
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const projects = [
  {
    id: 1,
    name: 'Chakra Soft UI Version',
    icon: '🎨',
    iconBg: '#FF0080',
    members: [
      { id: 1, avatar: 'https://i.pravatar.cc/150?img=1', name: 'User 1' },
      { id: 2, avatar: 'https://i.pravatar.cc/150?img=2', name: 'User 2' },
      { id: 3, avatar: 'https://i.pravatar.cc/150?img=3', name: 'User 3' },
      { id: 4, avatar: 'https://i.pravatar.cc/150?img=4', name: 'User 4' },
    ],
    budget: 14000,
    completion: 60
  },

  {
    id: 2,
    name: 'React Native Upgrade',
    icon: '⚛️',
    iconBg: '#00BFFF',
    members: [
      { id: 1, avatar: 'https://i.pravatar.cc/150?img=5', name: 'User 5' },
      { id: 2, avatar: 'https://i.pravatar.cc/150?img=6', name: 'User 6' },
      { id: 3, avatar: 'https://i.pravatar.cc/150?img=7', name: 'User 7' }
    ],
    budget: 9000,
    completion: 45
  },

  {
    id: 3,
    name: 'API Revamp',
    icon: '🔧',
    iconBg: '#FFA500',
    members: [
      { id: 1, avatar: 'https://i.pravatar.cc/150?img=8', name: 'User 8' },
      { id: 2, avatar: 'https://i.pravatar.cc/150?img=9', name: 'User 9' },
    ],
    budget: 12000,
    completion: 70
  },
  {
    id: 4,
    name: 'New Landing Page',
    icon: '🌐',
    iconBg: '#32CD32',
    members: [
      { id: 1, avatar: 'https://i.pravatar.cc/150?img=10', name: 'User 10' },
      { id: 2, avatar: 'https://i.pravatar.cc/150?img=11', name: 'User 11' },
      { id: 3, avatar: 'https://i.pravatar.cc/150?img=12', name: 'User 12' }
    ],
    budget: 7500,
    completion: 80
  },
  {
    id: 5,
    name: 'AI Chatbot',
    icon: '🤖',
    iconBg: '#800080',
    members: [
      { id: 1, avatar: 'https://i.pravatar.cc/150?img=13', name: 'User 13' },
      { id: 2, avatar: 'https://i.pravatar.cc/150?img=14', name: 'User 14' }
    ],
    budget: 16000,
    completion: 50
  },
  {
    id: 6,
    name: 'E-commerce Revamp',
    icon: '🛍️',
    iconBg: '#20B2AA',
    members: [
      { id: 1, avatar: 'https://i.pravatar.cc/150?img=15', name: 'User 15' },
      { id: 2, avatar: 'https://i.pravatar.cc/150?img=16', name: 'User 16' }
    ],
    budget: 21000,
    completion: 65
  },

];

const ProjectItem = ({ project }) => {
  return (
    <ListItem
      sx={{
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        py: 1,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        width: '100%', 
        flexWrap: 'nowrap' 
      }}
    >
      {/* Project Name and Icon */}
      <Box sx={{ display: 'flex', alignItems: 'center', flex: 2 }}>
        <Box
          sx={{
            width: 0,
            height: 0,
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: project.iconBg,
            mr: 2
          }}
        >
          <Typography>{project.icon}</Typography>
        </Box>
        <Typography color="white" fontSize={12}>{project.name}</Typography>
      </Box>

      {/* Members */}
      <Box sx={{ flex: 1 }}>
      <AvatarGroup
  max={6}
  sx={{
    justifyContent: 'center',
    '& .MuiAvatar-root': {
      width: 18,
      height: 18,
      border: '2px solid #121241' // Custom border applied here
    }
  }}
>
  {project.members.map((member) => (
    <Avatar
      key={member.id}
      src={member.avatar}
      alt={member.name}
    />
  ))}
</AvatarGroup>


      </Box>

      {/* Budget */}
      <Typography sx={{ flex: 1, color: 'white', fontSize: 12 }}>
        ${project.budget.toLocaleString()}
      </Typography>

      {/* Completion */}
      <Box sx={{ flex: 1, position: 'relative' }}>
        <Typography color="white" fontSize={12}>{project.completion}%</Typography>
        <Box
          sx={{
            position: 'absolute',
            bottom: -2,
            left: 0,
            width: '80%',
            height: 2,
            bgcolor: 'rgba(255, 255, 255, 0.1)'
          }}
        >
          <Box
            sx={{
              width: `${project.completion}%`,
              height: '100%',
              bgcolor: '#0066ff',
              borderRadius: 1
            }}
          />
        </Box>
      </Box>
    </ListItem>
  );
};

const ProjectsList = () => {
  return (
<Box
  sx={{
    p: 2,
    borderRadius: 4,
    maxWidth: 1200,
    background: 'linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)'
  }}
>      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Box>
          <Typography variant="h5" color="white" fontSize={16} >
            Projects Overview
          </Typography>
          <Typography color="#4caf50" fontSize={12}>
            30 done this month
          </Typography>
        </Box>
        <IconButton sx={{ color: 'white' }}>
          <MoreVertIcon />
        </IconButton>
      </Box>

      {/* Header Row */}
      <Stack
        direction="row"
        sx={{
          py: 1,
          color: 'grey.500',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Typography sx={{ flex: 2 }} fontSize={12}>COMPANIES</Typography>
        <Typography sx={{ flex: 1, textAlign: 'center' }} fontSize={12}>MEMBERS</Typography>
        <Typography sx={{ flex: 1 }} fontSize={12}>BUDGET</Typography>
        <Typography sx={{ flex: 1 }} fontSize={12}>COMPLETION</Typography>
      </Stack>

      {/* Project List */}
      <List sx={{ p: 0,
          display: 'flex',
          flexDirection: 'column',
          width: '100%' 

       }}>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </List>
    </Box>
  );
};

export default ProjectsList;
