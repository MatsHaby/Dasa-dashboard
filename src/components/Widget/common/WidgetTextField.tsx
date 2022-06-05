import React, { useState } from 'react'
import { TextField } from '@mui/material'

interface Props {
  defaultValue: string | number
}

const WdigetTextField: React.FC<Props> = ({ defaultValue }: Props) => {
  const [value, setValue] = useState<string | number>(defaultValue)

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  return (
    <TextField id="standard-basic" variant="standard" size="small" sx={{ width: '10ch' }} value={value} onChange={handleChangeValue} />
  )
}

export default WdigetTextField