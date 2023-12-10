import React from 'react'
import { Card, CardDetails } from './DrinkCard.styles'
import { PrimaryButton } from './General.styles'

export default function DrinkCard({name, description, image}) {
  return (
    <Card
    image={image}
    >
        <CardDetails>
            <h4>{name}</h4>
            <p>{description}</p>
            <PrimaryButton width="fit">Ver receta</PrimaryButton>
        </CardDetails>
    </Card>
  )
}
