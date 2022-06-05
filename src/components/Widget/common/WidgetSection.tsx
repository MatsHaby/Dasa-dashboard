import { Box, Typography } from '@mui/material'
import React from 'react'

interface Props {
  title: string
}

const WidgetSection = ({ title }: Props) => {
  return (
    <Box mt={2}>
      <Typography sx={{ color: '#3631AE' }}>{title}</Typography>
    </Box>
  )
}

export default WidgetSection