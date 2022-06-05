import React from 'react'
import { Box, Paper, Typography, capitalize } from '@mui/material'
import { navbarStyles } from './styles';

interface Props {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <Box sx={navbarStyles.box}>
      <Paper square variant="outlined" sx={navbarStyles.paper}>
        <Typography variant="h3" component="h1">{capitalize(`${title}`)}</Typography>
      </Paper>
    </Box>
  )
}

export default Header