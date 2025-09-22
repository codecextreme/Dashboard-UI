import React from 'react';
import { Box, Typography, Button, Avatar, AvatarGroup } from '@mui/material';
import img1 from '../../assets/Media/Images/img1.png'
import img2 from '../../assets/Media/Images/img2.png'
import img3 from '../../assets/Media/Images/img3.png'

const projects = [
  {
    id: 1,
    title: 'Modern',
    image: img1,
    description: 'As Uber works through a huge amount of internal management turmoil.',
    team: [
      { id: 1, avatar: 'https://i.pravatar.cc/150?img=1' },
      { id: 2, avatar: 'https://i.pravatar.cc/150?img=2' },
      { id: 3, avatar: 'https://i.pravatar.cc/150?img=3' },
    ]
  },
  {
    id: 2,
    title: 'Scandinavian',
    image: img2,
    description: 'Music is something that every person has his or her own specific opinion about.',
    team: [
      { id: 4, avatar: 'https://i.pravatar.cc/150?img=4' },
      { id: 5, avatar: 'https://i.pravatar.cc/150?img=5' },
      { id: 6, avatar: 'https://i.pravatar.cc/150?img=6' },
    ]
  },
  {
    id: 3,
    title: 'Minimalist',
    image: img3,
    description: 'Different people have different taste, and various types of music.',
    team: [
      { id: 7, avatar: 'https://i.pravatar.cc/150?img=7' },
      { id: 8, avatar: 'https://i.pravatar.cc/150?img=8' },
      { id: 9, avatar: 'https://i.pravatar.cc/150?img=9' },
    ]
  }
];

const Projects = () => {
  return (
    <Box sx={{ 
      width: '100%',
      height: '59.5vh',
      pl: 2,
      pt: 1,
      pr: 2,
      background: 'linear-gradient(87.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 26.65%)',
      borderRadius: "20px",
    }}>
      <Typography variant="h6" color="white" >
        Projects
      </Typography>
      <Typography color="gray" sx={{ mb: 1, fontSize: '0.9rem' }}>
        Architects design houses
      </Typography>

      <Box sx={{ 
        display: 'flex',
        gap: 2,
        height: '220px'
      }}>
        {projects.map((project) => (
          <Box 
            key={project.id}
            sx={{
              flex: 1,
              borderRadius: 3,
              position: 'relative'
            }}
          >
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: '100%',
                height: '120px',
                objectFit: 'cover',
                borderRadius: 3
              }}
            />
            <Box sx={{ p: 1.5 }}>
              <Typography 
                variant="subtitle1" 
                color="white"
                sx={{ mb: 0 }}
              >
                {project.title}
              </Typography>
              <Typography 
                color="gray"
                sx={{ 
                  fontSize: '0.8rem',
                  mt: 0,
                  height: '32px',
                }}
              >
                {project.description}
              </Typography>
              <Box sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Button 
                  variant="outlined" 
                  sx={{ 
                    color: 'white',
                    fontSize: '0.75rem',
                    p: 0,
                    mt: 4
                  }}
                >
                  VIEW ALL
                </Button>
                <AvatarGroup max={4}>
                  {project.team.map((member) => (
                    <Avatar
                      key={member.id}
                      src={member.avatar}
                      sx={{ width: 20, height: 20, mt:4}}
                    />
                  ))}
                </AvatarGroup>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;