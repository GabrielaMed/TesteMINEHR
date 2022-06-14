import { ApexOptions } from 'apexcharts'
import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

import { Container } from './styles'

interface IGraphicScatterProps {
  series?: ApexAxisChartSeries
}

export function GraphicScatter(props: IGraphicScatterProps) {
  const [graphicSettings, setGraphicSettings] = useState<IGraphicScatterProps>({
    series: {} as ApexAxisChartSeries
  })
  const graphicOptions = {
    title: {
      text: 'Scatter',
      align: 'left',
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: '16px',
        fontWeight: '700',
        fontFamily: 'Montserrat',
        color: '#5D405C'
      }
    },
    chart: {
      height: 300,
      toolbar: {
        tools: {
          download: true,
          selection: true,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: {}
        },
        offsetY: 0
      }
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
  } as ApexOptions

  useEffect(() => {
    const newState = {
      series: props?.series
    }
    setGraphicSettings(newState)
  }, [props])

  return (
    <Container>
      <ReactApexChart
        options={graphicOptions}
        series={graphicSettings?.series}
        type="scatter"
        height={300}
      />
    </Container>
  )
}
