import React from 'react'
import { GraphicBar } from '../GraphicBar'
import { GraphicScatter } from '../GraphicScatter'

import { Container, Title } from './styles'

export function Dashboard() {
  return (
    <Container>
      <Title>Dashboard</Title>
      <GraphicBar></GraphicBar>
      <GraphicScatter></GraphicScatter>
    </Container>
  )
}
