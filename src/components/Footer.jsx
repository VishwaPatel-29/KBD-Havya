import React, { useState } from 'react'
import { Box, Typography, Grid, IconButton, Link, Collapse, List, ListItem, ListItemText } from '@mui/material'
import {
  Email,
  Phone,
  LocationOn,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  ExpandMore,
  ExpandLess,
  DirectionsCar,
  Person,
  AttachMoney,
  Help,
  Assessment,
  Notifications,
  Map,
} from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTheme } from '../features/uiSlice'

const Footer = () => {
  const theme = useSelector(selectTheme)
  const currentYear = new Date().getFullYear()
  const [expandedSection, setExpandedSection] = useState('')

  // Core Routes
  const coreLinks = [
    { label: 'Home', path: '/' },
    { label: 'Login', path: '/login' },
    { label: 'Register', path: '/register' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Driver Dashboard', path: '/driver-dashboard' },
    { label: 'Admin Dashboard', path: '/admin-dashboard' },
  ]

  // User Management Routes
  const userManagementLinks = [
    { label: 'Settings', path: '/settings' },
    { label: 'Change Password', path: '/change-password' },
    { label: 'Forgot Password', path: '/forgot-password' },
    { label: 'Email Verification', path: '/email-verification' },
    { label: 'Profile', path: '/profile' },
  ]

  // Ride Management Routes
  const rideManagementLinks = [
    { label: 'Book Ride', path: '/book' },
    { label: 'Find Ride', path: '/find-ride' },
    { label: 'Schedule Ride', path: '/schedule-ride' },
    { label: 'Ride History', path: '/ride-history' },
    { label: 'Ride Tracking', path: '/ride-tracking' },
    { label: 'My Rides', path: '/rides' },
  ]

  // Payment & Billing Routes
  const paymentLinks = [
    { label: 'Payment Methods', path: '/payment-methods' },
    { label: 'Payment History', path: '/payment-history' },
    { label: 'Wallet', path: '/wallet' },
    { label: 'Billing', path: '/billing' },
  ]

  // Support & Help Routes
  const supportLinks = [
    { label: 'Help Center', path: '/help' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'About Us', path: '/about' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy' },
  ]

  // Admin Feature Routes
  const adminLinks = [
    { label: 'User Management', path: '/user-management' },
    { label: 'Ride Management', path: '/ride-management' },
    { label: 'Analytics', path: '/analytics' },
    { label: 'Reports', path: '/reports' },
  ]

  // Additional Features
  const featureLinks = [
    { label: 'Notifications', path: '/notifications' },
    { label: 'Messages', path: '/messages' },
    { label: 'Map View', path: '/map-view' },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/urbanmove' },
    { icon: Twitter, href: 'https://twitter.com/urbanmove' },
    { icon: LinkedIn, href: 'https://linkedin.com/company/urbanmove' },
    { icon: Instagram, href: 'https://instagram.com/urbanmove' },
  ]

  const handleSectionToggle = (section) => () => {
    setExpandedSection(expandedSection === section ? '' : section)
  }

  return (
    <Box
      component="footer"
      sx={{
        background: theme === 'dark' ? '#0a0a0a' : '#fff',
        borderTop: `1px solid ${theme === 'dark' ? '#333' : '#e0e0e0'}`,
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
        <Grid container spacing={4}>
          {/* Column 1: KBD-Havya & Contact Us */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* KBD-Havya Section */}
              <Box sx={{ 
                mb: 3, 
                pb: 3, 
                borderBottom: `1px solid ${theme === 'dark' ? '#333' : '#e8f4f8'}`,
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box sx={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #00B4B4 0%, #008080 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <DirectionsCar sx={{ fontSize: 22, color: '#fff' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#00B4B4' }}>
                    UrbanMove
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 3,
                    lineHeight: 1.6,
                    color: theme === 'dark' ? '#b0b0b0' : '#555',
                  }}
                >
                  Smart Commutes. Real-Time Routes. Your trusted ride-sharing partner for safe, affordable, and reliable transportation.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {socialLinks.map((social) => (
                    <IconButton
                      key={social.href}
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: 36,
                        height: 36,
                        color: '#00B4B4',
                        border: '1px solid #00B4B4',
                        borderRadius: '50%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #00B4B4 0%, #008080 100%)',
                          color: '#fff',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(0, 180, 180, 0.3)',
                        },
                      }}
                    >
                      <social.icon sx={{ fontSize: 18 }} />
                    </IconButton>
                  ))}
                </Box>
              </Box>

              {/* Contact Us Section */}
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2.5,
                    fontWeight: 600,
                    color: theme === 'dark' ? '#fff' : '#1a1a1a',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 30,
                      height: 2,
                      background: 'linear-gradient(90deg, #00B4B4 0%, #008080 100%)',
                      borderRadius: 1,
                    }
                  }}
                >
                  Contact Us
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                  <LocationOn sx={{ color: '#00B4B4', fontSize: 18, mt: 0.5 }} />
                  <Typography
                    variant="body2"
                    sx={{ 
                      color: theme === 'dark' ? '#b0b0b0' : '#555',
                      lineHeight: 1.5
                    }}
                  >
                    Ahmedabad, Gujarat 
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Email sx={{ color: '#00B4B4', fontSize: 18 }} />
                  <Link
                    href="mailto:support@kbdhavya.com"
                    sx={{
                      color: theme === 'dark' ? '#b0b0b0' : '#555',
                      textDecoration: 'none',
                      '&:hover': { color: '#00B4B4' },
                      transition: 'color 0.3s ease'
                    }}
                  >
                    urbanmove@gmail.com
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Phone sx={{ color: '#00B4B4', fontSize: 18 }} />
                  <Link
                    href="tel:+15551234567"
                    sx={{
                      color: theme === 'dark' ? '#b0b0b0' : '#555',
                      textDecoration: 'none',
                      '&:hover': { color: '#00B4B4' },
                      transition: 'color 0.3s ease'
                    }}
                  >
                    +91 6352839671
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Column 2: Core Pages & Support & Help */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Core Pages Section */}
              <Box sx={{ 
                mb: 3, 
                pb: 3, 
                borderBottom: `1px solid ${theme === 'dark' ? '#333' : '#e8f4f8'}`,
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2.5,
                    fontWeight: 600,
                    color: theme === 'dark' ? '#fff' : '#1a1a1a',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 30,
                      height: 2,
                      background: 'linear-gradient(90deg, #00B4B4 0%, #008080 100%)',
                      borderRadius: 1,
                    }
                  }}
                >
                  Core Pages
                </Typography>
                {coreLinks.map((link, index) => (
                  <Box key={link.label} sx={{ mb: 1.5 }}>
                    <Link
                      component={RouterLink}
                      to={link.path}
                      sx={{
                        color: theme === 'dark' ? '#b0b0b0' : '#555',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        paddingLeft: 2,
                        '&:hover': { 
                          color: '#00B4B4',
                          paddingLeft: 1,
                          '&:before': {
                            content: '"→"',
                            position: 'absolute',
                            left: -15,
                            color: '#00B4B4',
                            fontSize: '0.8rem'
                          }
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>

              {/* Support & Help Section */}
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2.5,
                    fontWeight: 600,
                    color: theme === 'dark' ? '#fff' : '#1a1a1a',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 30,
                      height: 2,
                      background: 'linear-gradient(90deg, #00B4B4 0%, #008080 100%)',
                      borderRadius: 1,
                    }
                  }}
                >
                  Support & Help
                </Typography>
                {supportLinks.map((link, index) => (
                  <Box key={link.label} sx={{ mb: 1.5 }}>
                    <Link
                      component={RouterLink}
                      to={link.path}
                      sx={{
                        color: theme === 'dark' ? '#b0b0b0' : '#555',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        paddingLeft: 2,
                        '&:hover': { 
                          color: '#00B4B4',
                          paddingLeft: 1,
                          '&:before': {
                            content: '"→"',
                            position: 'absolute',
                            left: -15,
                            color: '#00B4B4',
                            fontSize: '0.8rem'
                          }
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Column 3: User Management & Admin Features */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* User Management Section */}
              <Box sx={{ 
                mb: 3, 
                pb: 3, 
                borderBottom: `1px solid ${theme === 'dark' ? '#333' : '#e8f4f8'}`,
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2.5,
                    fontWeight: 600,
                    color: theme === 'dark' ? '#fff' : '#1a1a1a',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 30,
                      height: 2,
                      background: 'linear-gradient(90deg, #00B4B4 0%, #008080 100%)',
                      borderRadius: 1,
                    }
                  }}
                >
                  User Management
                </Typography>
                {userManagementLinks.map((link, index) => (
                  <Box key={link.label} sx={{ mb: 1.5 }}>
                    <Link
                      component={RouterLink}
                      to={link.path}
                      sx={{
                        color: theme === 'dark' ? '#b0b0b0' : '#555',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        paddingLeft: 2,
                        '&:hover': { 
                          color: '#00B4B4',
                          paddingLeft: 1,
                          '&:before': {
                            content: '"→"',
                            position: 'absolute',
                            left: -15,
                            color: '#00B4B4',
                            fontSize: '0.8rem'
                          }
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>

              {/* Admin Features Section */}
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2.5,
                    fontWeight: 600,
                    color: theme === 'dark' ? '#fff' : '#1a1a1a',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 30,
                      height: 2,
                      background: 'linear-gradient(90deg, #00B4B4 0%, #008080 100%)',
                      borderRadius: 1,
                    }
                  }}
                >
                  Admin Features
                </Typography>
                {adminLinks.map((link, index) => (
                  <Box key={link.label} sx={{ mb: 1.5 }}>
                    <Link
                      component={RouterLink}
                      to={link.path}
                      sx={{
                        color: theme === 'dark' ? '#b0b0b0' : '#555',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        paddingLeft: 2,
                        '&:hover': { 
                          color: '#00B4B4',
                          paddingLeft: 1,
                          '&:before': {
                            content: '"→"',
                            position: 'absolute',
                            left: -15,
                            color: '#00B4B4',
                            fontSize: '0.8rem'
                          }
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Column 4: Ride Management & Features */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Ride Management Section */}
              <Box sx={{ 
                mb: 3, 
                pb: 3, 
                borderBottom: `1px solid ${theme === 'dark' ? '#333' : '#e8f4f8'}`,
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2.5,
                    fontWeight: 600,
                    color: theme === 'dark' ? '#fff' : '#1a1a1a',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 30,
                      height: 2,
                      background: 'linear-gradient(90deg, #00B4B4 0%, #008080 100%)',
                      borderRadius: 1,
                    }
                  }}
                >
                  Ride Management
                </Typography>
                {rideManagementLinks.map((link, index) => (
                  <Box key={link.label} sx={{ mb: 1.5 }}>
                    <Link
                      component={RouterLink}
                      to={link.path}
                      sx={{
                        color: theme === 'dark' ? '#b0b0b0' : '#555',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        paddingLeft: 2,
                        '&:hover': { 
                          color: '#00B4B4',
                          paddingLeft: 1,
                          '&:before': {
                            content: '"→"',
                            position: 'absolute',
                            left: -15,
                            color: '#00B4B4',
                            fontSize: '0.8rem'
                          }
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>

              {/* Features Section */}
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2.5,
                    fontWeight: 600,
                    color: theme === 'dark' ? '#fff' : '#1a1a1a',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 30,
                      height: 2,
                      background: 'linear-gradient(90deg, #00B4B4 0%, #008080 100%)',
                      borderRadius: 1,
                    }
                  }}
                >
                  Features
                </Typography>
                {featureLinks.map((link, index) => (
                  <Box key={link.label} sx={{ mb: 1.5 }}>
                    <Link
                      component={RouterLink}
                      to={link.path}
                      sx={{
                        color: theme === 'dark' ? '#b0b0b0' : '#555',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        paddingLeft: 2,
                        '&:hover': { 
                          color: '#00B4B4',
                          paddingLeft: 1,
                          '&:before': {
                            content: '"→"',
                            position: 'absolute',
                            left: -15,
                            color: '#00B4B4',
                            fontSize: '0.8rem'
                          }
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Column 5: Payment & Billing */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Payment & Billing Section */}
              <Box sx={{ 
                mb: 3, 
                pb: 3, 
                borderBottom: `1px solid ${theme === 'dark' ? '#333' : '#e8f4f8'}`,
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2.5,
                    fontWeight: 600,
                    color: theme === 'dark' ? '#fff' : '#1a1a1a',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 30,
                      height: 2,
                      background: 'linear-gradient(90deg, #00B4B4 0%, #008080 100%)',
                      borderRadius: 1,
                    }
                  }}
                >
                  Payment & Billing
                </Typography>
                {paymentLinks.map((link, index) => (
                  <Box key={link.label} sx={{ mb: 1.5 }}>
                    <Link
                      component={RouterLink}
                      to={link.path}
                      sx={{
                        color: theme === 'dark' ? '#b0b0b0' : '#555',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        paddingLeft: 2,
                        '&:hover': { 
                          color: '#00B4B4',
                          paddingLeft: 1,
                          '&:before': {
                            content: '"→"',
                            position: 'absolute',
                            left: -15,
                            color: '#00B4B4',
                            fontSize: '0.8rem'
                          }
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>

              {/* Empty space for balance */}
              <Box sx={{ flexGrow: 1 }} />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 4,
            borderTop: `1px solid ${theme === 'dark' ? '#333' : '#e0e0e0'}`,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: theme === 'dark' ? '#a0a0a0' : '#666' }}
          >
            &copy; {currentYear} UrbanMove. All rights reserved. | Smart Commutes. Real-Time Routes.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
