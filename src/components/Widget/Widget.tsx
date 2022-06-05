import React from 'react'
import { Paper, Grid, Box } from '@mui/material'
import WidgetSection from './common/WidgetSection'
import WidgetSectionField from './common/WidgetSectionField'
import WidgetSwitch from './common/WidgetSwitch'
import WidgetSelect from './common/WidgetSelect'
import WidgetTextField from "./common/WidgetTextField"
import { widgetStyles } from './styles'
import { iWidgetData, iWidgetDataField } from '../../interfaces/widget'
interface Props {
  widgetData: {
    id: number,
    name: string
    data: {
      id: number,
      name: string,
      value: string | number | [] | boolean | object
    }[]
  }[]
}

const Widget = ({ widgetData }: Props) => {

  const renderSwitch = (param: string, value: any) => {
    switch (param) {
      case 'boolean':
        return <WidgetSwitch checked={value} />;
      case 'object':
        return Array.isArray(value) ? <WidgetSelect menuItems={value} /> : <></>;
      default:
        return <WidgetTextField defaultValue={value} />;
    }
  }

  return (
    <Grid item xs={12} sm={12} md={6} >
      <Paper sx={widgetStyles.paper}>
        {
          widgetData.map((item: iWidgetData) => {
            return (
              <Box key={item.id
              }>
                <WidgetSection title={item.name} />
                {
                  item.data.map((data: iWidgetDataField) => {
                    return (
                      <WidgetSectionField key={data.id} label={data.name} component={renderSwitch(typeof data.value, data.value)} />
                    )
                  })
                }
              </Box>
            )
          })
        }
      </Paper>
    </Grid >
  )
}

export default Widget