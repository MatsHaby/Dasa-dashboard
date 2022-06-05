import React from 'react'
import { Switch, SwitchProps } from '@mui/material'

const WidgetSwitch = ({ checked }: SwitchProps) => {
  // checked prop is used if you want to set the value of the switch, for this example we are using the default value
  return (
    <Switch defaultChecked />
  )
}

export default WidgetSwitch