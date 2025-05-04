import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

export default function Practice() {
  return (
    <div>
      <Box
        sx={{
          p: 3,
          borderRadius: 4,
          gap: 4,
          color: "white",
          maxWidth: "800px",
          height: "430px",
          background:
            "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
        }}
      >
        <Box 
        sx={{
            display: "flex",
            justifyContent: "space-between",
        }}>
        <Typography variant="h5" fontSize={16} color="white" sx={{ mb: 1 }}>
          Billing Information
        </Typography>
        <button variant="contained" color="blue">click me</button>
        <Typography>Billing Information</Typography>
        <Typography>Billing Information</Typography>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
  <Typography color="white">Billing Info</Typography>
  <Button variant="contained">Add</Button>
</Stack>
        </Box>
      
      <Box
      sx={{
        color: "white",

    }}>
           <Typography>Billing Information</Typography>
           <Typography>Billing Information</Typography>
         </Box>
         </Box>
    </div>
  );
}
