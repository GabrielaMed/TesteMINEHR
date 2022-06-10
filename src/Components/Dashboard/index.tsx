import React from 'react'
import { FilterButton } from '../FilterButton'
import { GraphicBar } from '../GraphicBar'
import { GraphicScatter } from '../GraphicScatter'

import { Container, Title, Subtitle } from './styles'

export function Dashboard() {
  return (
    <Container>
      <Title>Dashboard</Title>
      <Subtitle>Desafio Técnico Frontend</Subtitle>
      <FilterButton></FilterButton>
      <GraphicBar></GraphicBar>
      <GraphicScatter></GraphicScatter>
    </Container>
  )
}
