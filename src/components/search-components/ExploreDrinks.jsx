import React, { useEffect, useState } from 'react'
import { ButtonsWrapper, ExploreDrinksContainer, ExploreOptionsWrapper, IconDeleteWrapper, IconSearchWrapper, IconWrapper, SearchBox, SearchInput } from './ExploreDrinks.styles'
import { Icon } from '@iconify/react'
import { handleLeftClick } from '../../functions/handleLeftClick'
import { handleRightClick } from '../../functions/handleRightClick'
import DrinksCarrouselSection from './carrousel-section/DrinksCarrouselSection'

export default function ExploreDrinks({data, name}) {

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(3)
    const [search, setSearch] = useState(name)

  return (
    <ExploreDrinksContainer>
        <SearchBox>
            <SearchInput 
            type="text" 
            placeholder="Search"
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            />
            <IconDeleteWrapper
            onClick={() => setSearch("")}
            >
                <Icon icon="iconoir:cancel" width="25" height="25" />
            </IconDeleteWrapper>
            <IconSearchWrapper>
                <Icon icon="ion:search-outline" width="20" height="20" />
            </IconSearchWrapper>
        </SearchBox>
        
        <h4>
            {data.length} Resultados en tu búsqueda
        </h4>
        <ExploreOptionsWrapper>
            <h3>Explora las siguientes opciones</h3>
            <ButtonsWrapper>
                <IconWrapper
                onClick={() => handleLeftClick(start, end, data.length, setStart, setEnd)}
                >
                    <Icon icon="ion:arrow-up-outline" width="20" height="20" />
                </IconWrapper>
                <IconWrapper
                onClick={() => handleRightClick(start, end, data.length, setStart, setEnd)}
                >
                    <Icon icon="ion:arrow-down-outline" width="20" height="20" />
                </IconWrapper>
            </ButtonsWrapper>
        </ExploreOptionsWrapper>
        <DrinksCarrouselSection data={data.slice(start, end)} />
    </ExploreDrinksContainer>
  )
}
