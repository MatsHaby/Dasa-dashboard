import { FormControl, Select, MenuItem } from '@mui/material'

interface Props {
  menuItems: string[] | number[]
}

const WidgetSelect = ({ menuItems }: Props) => {
  return (
    <FormControl sx={{ width: '10ch' }} variant="standard" >
      <Select
        defaultValue="Diesel"
      >
        {menuItems.map((item: string | number, index: number) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default WidgetSelect