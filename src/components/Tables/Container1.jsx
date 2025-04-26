import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Chip,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const authors = [
  {
    id: 1,
    name: 'Esthera Jackson',
    email: 'esthera@simmmple.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    role: 'Manager',
    department: 'Organization',
    status: 'Online',
    date: '14/06/21'
  },
  {
    id: 2,
    name: 'Alexa Liras',
    email: 'alexa@simmmple.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    role: 'Programmer',
    department: 'Developer',
    status: 'Offline',
    date: '14/06/21'
  },
  {
    id: 3,
    name: 'Laurent Michael',
    email: 'laurent@simmmple.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    role: 'Executive',
    department: 'Projects',
    status: 'Online',
    date: '14/06/21'
  },
  {
    id: 4,
    name: 'Freduardo Hill',
    email: 'freduardo@simmmple.com',
    avatar: 'https://i.pravatar.cc/150?img=4',
    role: 'Manager',
    department: 'Organization',
    status: 'Online',
    date: '14/06/21'
  },
  {
    id: 5,
    name: 'Daniel Thomas',
    email: 'daniel@simmmple.com',
    avatar: 'https://i.pravatar.cc/150?img=5',
    role: 'Programmer',
    department: 'Developer',
    status: 'Offline',
    date: '14/06/21'
  },
  {
    id: 6,
    name: 'Mark Wilson',
    email: 'mark@simmmple.com',
    avatar: 'https://i.pravatar.cc/150?img=6',
    role: 'Designer',
    department: 'UI/UX Design',
    status: 'Offline',
    date: '14/06/21'
  }
];

const AuthorsTable = () => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 4,
        background: 'linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)',
      }}
    >
      <Typography variant="h6" color="white" mb={1}>
        Authors Table
      </Typography>

      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'gray', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>AUTHOR</TableCell>
              <TableCell sx={{ color: 'gray', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>FUNCTION</TableCell>
              <TableCell sx={{ color: 'gray', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>STATUS</TableCell>
              <TableCell sx={{ color: 'gray', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>EMPLOYED</TableCell>
              <TableCell sx={{ color: 'gray', borderBottom: '1px solid rgba(255,255,255,0.1)' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((author) => (
              <TableRow key={author.id} sx={{ '& td': { py: 0.5 } }}>
                <TableCell
                  sx={{
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Avatar src={author.avatar} />
                  <Box>
                    <Typography color="white" fontSize={12}>{author.name}</Typography>
                    <Typography color="gray" variant="body2" fontSize={10}>{author.email}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <Typography color="white" fontSize={12}>{author.role}</Typography>
                  <Typography color="gray" variant="body2" fontSize={10}>{author.department}</Typography>
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <Chip
                    label={author.status}
                    size="small"
                    sx={{
                      bgcolor: author.status === 'Online' ? '#48BB78' : '',
                      color: 'white',
                      borderRadius: '8px',
                      border: author.status === 'Online' ? 'none' : '1.5px solid white',
                    }}
                  />
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: 12 }}>
                  {author.date}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <IconButton size="small" sx={{ color: 'gray' }}>
                    <EditIcon fontSize="small" />
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

export default AuthorsTable;
