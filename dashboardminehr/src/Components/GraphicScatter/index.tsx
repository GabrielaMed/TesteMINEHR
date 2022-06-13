import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

import { Container, Title } from './styles'

interface IGraphicScatterProps {
  series: ApexAxisChartSeries
}

export function GraphicScatter(props: IGraphicScatterProps) {
  const [graphicSettings, setGraphicSettings] = useState<IGraphicScatterProps>()
  const graphicOptions = {
    chart: {
      height: 350
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: function (val: string) {
          return parseFloat(val).toFixed(1)
        }
      }
    },
    yaxis: {
      tickAmount: 7
    }
  }

  useEffect(() => {
    const newState = {
      series: props.series
    }
    setGraphicSettings(newState)
  }, [props])

  return (
    <Container>
      <Title>Scatter</Title>
      <ReactApexChart
        options={graphicOptions}
        series={graphicSettings?.series}
        type="scatter"
        height={300}
      />
    </Container>
  )
}
