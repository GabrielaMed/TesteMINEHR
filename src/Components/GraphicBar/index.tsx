import { ApexOptions } from 'apexcharts'
import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

import { Container } from './styles'

interface IGraphicBarProps {
  data: Number[]
  categories: String[]
}

interface IGraphicProps {
  series?: ApexAxisChartSeries
  options?: ApexOptions
}

export function GraphicBar(props: IGraphicBarProps) {
  const [graphicSettings, setGraphicSettings] = useState<IGraphicProps>({
    series: {} as ApexAxisChartSeries,
    options: {} as ApexOptions
  })

  useEffect(() => {
    const newState = {
      series: [
        {
          data: props.data
        }
      ] as ApexAxisChartSeries,
      options: {
        title: {
          text: 'Barras',
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
          type: 'bar',
          toolbar: {
            show: true,
            offsetY: 0
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: props.categories
        }
      } as ApexOptions
    }

    setGraphicSettings(newState)
  }, [props])

  return (
    <Container>
      <ReactApexChart
        options={graphicSettings.options}
        series={graphicSettings.series}
        type="bar"
        height={300}
      />
    </Container>
  )
}
