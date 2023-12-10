import React, { useEffect, useState } from 'react'
import { CardContainer, DescriptionContainer, SectionContainer } from './DrinkMostSelectedSection.styles'
import DrinkCard from '../DrinkCard'
import axios from 'axios'

export default function DrinkMostSelectedSection() {

  const [drink, setDrink] = useState({})

  useEffect(() => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => {
      setDrink(res.data.drinks[0])
    })
  }, [])

  return (
    <SectionContainer>
        <CardContainer>
          <DrinkCard 
          name={drink.strDrink} 
          description="Una mezcla equilibrada de sabores dulces, cítricos y refrescantes crea una experiencia única en cada sorbo, convirtiendo esta bebida en la elección perfecta para cualquier momento."
          image={drink.strDrinkThumb}
          />
        </CardContainer>
        <DescriptionContainer>
            <h3>Los tragos <span>más elegidos</span></h3>
            <p>¡Explora un mundo de sabores en cada sorbo!</p>
            <p>Descrube nuestra exquisita selección de tragos, donde cada día te presentamos las opciones más elegantes y cautivadoras.</p>
            <p>¡Deleita tus sentidos con nuestras creaciones únicas y vive momentos inolvidables con cada copa!</p>
        </DescriptionContainer>
    </SectionContainer>
  )
}
