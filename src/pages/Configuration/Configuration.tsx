import { Grid, Container } from '@mui/material'
import { configurationStyles } from './styles'
import widgetData from '../../widgetData.json'
import Widget from '../../components/Widget/Widget'
import { iWidget } from '../../interfaces/widget'

const Configuration: React.FC = () => {
  return (
    <Container sx={configurationStyles.container}>
      <Grid container mt={0.5} spacing={{ md: 6 }} rowSpacing={2} sx={{ flexGrow: 1 }}>
        {widgetData.map((widget: iWidget) => {
          return <Widget key={widget.id} widgetData={widget.data} />
        })}
      </Grid>
    </Container>
  )
}

export default Configuration