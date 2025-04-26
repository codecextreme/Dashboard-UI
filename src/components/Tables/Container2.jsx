import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  LinearProgress,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const projects = [
  {
    id: 1,
    name: 'Chakra Soft UI Version',
    icon: '🎨',
    iconBg: '#FF0080',
    budget: '$14,000',
    status: 'Working',
    completion: 60
  },
  {
    id: 2,
    name: 'Add Progress Track',
    icon: '🔷',
    iconBg: '#4299E1',
    budget: '$3,000',
    status: 'Cancelled',
    completion: 10
  },
  {
    id: 3,
    name: 'Fix Platform Errors',
    icon: '🎯',
    iconBg: '#48BB78',
    budget: 'Not set',
    status: 'Done',
    completion: 100
  },
  {
    id: 4,
    name: 'Launch our Mobile App',
    icon: '🟢',
    iconBg: '#48BB78',
    budget: '$32,000',
    status: 'Done',
    completion: 100
  },
  {
    id: 5,
    name: 'Add the New Pricing Page',
    icon: '💎',
    iconBg: '#0066ff',
    budget: '$400',
    status: 'Working',
    completion: 25
  }
];

const Projects = () => {
  return (
    <Box sx={{ p: 2, pl: 2, bgcolor: '#001529', borderRadius: 4, background: 'linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)'
    }}>
      <Box sx={{ mb: 0 }}>
        <Typography variant="h5" color="white" mb={0.5} fontSize={18}>
          Projects
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CheckCircleIcon sx={{ color: '#48BB78', fontSize: 14 }} />
          <Typography color="gray" fontSize={12}>
            30 done this month
          </Typography>
        </Box>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ '& th': { py: 0.5, pt: 2} }}> {/* Reduced vertical padding */}

              <TableCell sx={{ color: 'gray', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>COMPANIES</TableCell>
              <TableCell sx={{ color: 'gray', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>BUDGET</TableCell>
              <TableCell sx={{ color: 'gray', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>STATUS</TableCell>
              <TableCell sx={{ color: 'gray', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>COMPLETION</TableCell>
              <TableCell sx={{ color: 'gray', borderBottom: '1px solid rgba(255,255,255,0.1)' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
    <TableRow key={project.id} sx={{ '& td': { py: 0.6 } }}>
                <TableCell 
                  sx={{ 
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Box
                    sx={{
                      width: 35,
                      height: 35,
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px'
                    }}
                  >
                    {project.icon}
                  </Box>
                  <Typography color="white" fontSize={12}>
                    {project.name}
                  </Typography>
                </TableCell>
                <TableCell sx={{ color: 'white', fontSize: 12, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {project.budget}
                </TableCell>
                <TableCell sx={{ color: 'white', fontSize: 12, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {project.status}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)',  width: '20%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography color="white" variant="body2" fontSize={12}>
                      {project.completion}%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={project.completion}
                      sx={{
                        width: '100%',
                        height: 3,
                        borderRadius: 5,
                        bgcolor: 'rgba(255,255,255,0.1)',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: '#0066ff',
                          borderRadius: 5,
                        }
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <IconButton size="small" sx={{ color: 'gray' }}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Projects;