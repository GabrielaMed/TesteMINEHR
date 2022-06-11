import React from 'react'
import { FilterButton } from '../FilterButton'
import { GraphicBar } from '../GraphicBar'
import { GraphicScatter } from '../GraphicScatter'

import { Container, HoldTitleAndSub, Title, Subtitle, Graphics } from './styles'

export function Dashboard() {
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
      <GraphicBar></GraphicBar>
      <GraphicScatter></GraphicScatter>
    </Graphics>

    </>
  )
}
