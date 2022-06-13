import { ApexOptions } from 'apexcharts'
import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { MdInfo } from 'react-icons/md'

import { Container, Title } from './styles'

interface IGraphicBarProps {
  data: Number[]
  categories: String[]
}

interface IGraphicProps {
  series?: ApexAxisChartSeries
  options?: ApexOptions
}

export function GraphicBar(props: IGraphicBarProps) {
  const [graphicSettings, setGraphicSettings] = useState<IGraphicProps>()

  useEffect(() => {
    const newState = {
      series: [
        {
          data: props.data
        }
      ] as ApexAxisChartSeries,
      options: {
        chart: {
          type: 'bar',
          toolbar: {
            show: true,
            color: '#5D405C',
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
      <Title>Barras</Title>
      <MdInfo color="#19D7AA" />
      {graphicSettings?.series && graphicSettings?.options && (
        <ReactApexChart
          options={graphicSettings.options}
          series={graphicSettings.series}
          type="bar"
          height={300}
        />
      )}
    </Container>
  )
}
