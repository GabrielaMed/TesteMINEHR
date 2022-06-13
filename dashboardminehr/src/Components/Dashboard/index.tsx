import React from 'react'
import { FilterButton } from '../FilterButton'
import { GraphicBar } from '../GraphicBar'
import { GraphicScatter } from '../GraphicScatter'

import { Container, HoldTitleAndSub, Title, Subtitle, Graphics } from './styles'

export function Dashboard() {
  const graphicBarData = {
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    categories: [
      'South Korea',
      'Canada',
      'United Kingdom',
      'Netherlands',
      'Italy',
      'France',
      'Japan',
      'United States',
      'China',
      'Germany'
    ]
  }

  const graphicScatterData = {}

  return (
    <>
      <Container>
        <HoldTitleAndSub>
          <Title>Dashboard</Title>
          <Subtitle>Desafio Técnico Frontend</Subtitle>
        </HoldTitleAndSub>

        <FilterButton></FilterButton>
      </Container>

      <Graphics>
        <GraphicBar
          data={graphicBarData.data}
          categories={graphicBarData.categories}
        ></GraphicBar>
        <GraphicScatter></GraphicScatter>
      </Graphics>
    </>
  )
}
