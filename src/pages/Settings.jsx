import React from 'react'
import { Box, Typography, Container, Paper, Switch, FormControlLabel, Divider } from '@mui/material'

const Settings = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
        Settings
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
          Preferences
        </Typography>
        
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Email Notifications"
          sx={{ color: 'text.secondary' }}
        />
        
        <FormControlLabel
          control={<Switch />}
          label="Push Notifications"
          sx={{ color: 'text.secondary' }}
        />
        
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Dark Mode"
          sx={{ color: 'text.secondary' }}
        />
      </Paper>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
          Privacy
        </Typography>
        
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Share Location"
          sx={{ color: 'text.secondary' }}
        />
        
        <FormControlLabel
          control={<Switch />}
          label="Share Ride Data"
          sx={{ color: 'text.secondary' }}
        />
      </Paper>
    </Container>
  )
}

export default Settings
