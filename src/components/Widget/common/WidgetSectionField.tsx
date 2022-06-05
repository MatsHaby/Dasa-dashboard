import React from 'react'
import { Box, BoxProps, Typography, TextFieldProps } from '@mui/material'

interface Props {
  label: string,
  component: BoxProps | TextFieldProps
}

const WidgetSectionField = ({ label, component }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-end', paddingLeft: "10px" }}>
      <Typography>{label}</Typography>
      <>
        {component}
      </>
    </Box>
  )
}

export default WidgetSectionField