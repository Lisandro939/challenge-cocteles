import React from 'react'
import DrinkCard from '../../DrinkCard'
import { DrinksCarrousel } from './DrinksCarrouselSection.styles'

export default function DrinksCarrouselSection({data}) {

  if (data.length > 0) {
    return (
    <DrinksCarrousel>
        {
            data.map(drink => (
                <DrinkCard 
                name={drink.strDrink} 
                image={drink.strDrinkThumb}
                description="Una mezcla equilibrada de sabores dulces, cítricos y refrescantes crea una experiencia única en cada sorbo, convirtiendo esta bebida en la elección perfecta para cualquier momento."
                />
            ))
        }
    </DrinksCarrousel>
  )} else {
    return (
      <p>No hay datos disponibles</p>
    )
  }
}
