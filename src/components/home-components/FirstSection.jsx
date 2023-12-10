import React, { useEffect, useState } from 'react'
import { Button, ButtonsContainer, Circle, IconWrapper, SearchContainer, SearchInput, SectionContainer, SectionSubcontainer, Subtitle, Title } from './FirstSection.styles'
import { PrimaryButton } from '../General.styles'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import DropdownSection from './first-section/DropdownSection'
import { handleSearch } from '../../functions/handleSearch'

export default function FirstSection() {

  const navigate = useNavigate()

  const [history, setHistory] = useState([])

  const [display, setDisplay] = useState("none")
  const [search, setSearch] = useState("nombre")
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    if (localStorage.getItem("search")) {
      setHistory(JSON.parse(localStorage.getItem("search")))
    }
  }, [])
  
  return (
    <SectionContainer>
        <Title>Encuentra las mejores recetas en Cócteles</Title>
        <SectionSubcontainer>
            <Subtitle>¿Qué trago te gustaría preparar hoy?</Subtitle>
            <ButtonsContainer>
                <Button 
                onClick={() => setSearch("nombre")}
                search={search == "nombre" ? "#EABB00" : "#fff"}>Por nombre</Button>
                <Button 
                onClick={() => setSearch("ingredientes")}
                search={search == "ingredientes" ? "#EABB00" : "#fff"}>Por ingredientes</Button>
                <Button 
                onClick={() => setSearch("categorías")}
                search={search == "categorías" ? "#EABB00" : "#fff"}>Por categorías</Button>
            </ButtonsContainer>
            <SearchContainer>
                <SearchInput 
                type="text" 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={"Buscar el trago por " + search}
                borderRadius={display === "none" ? "40px" : "20px 20px 0 0"}
                disabled={display === "none" ? false : true}
                placeholderTextColor={display === "none" ? "#888" : "#fff"}
                />
                <IconWrapper 
                onClick={() => {
                  display === "none" ? setDisplay("block") : setDisplay("none")
                }}>
                  <Icon width="20px" icon="fe:search" />
                </IconWrapper>
                <DropdownSection
                history={history}
                setHistory={setHistory}
                display={display}
                search={search}
                searchInput={searchInput}
                />
                <PrimaryButton 
                onClick={() => {
                  navigate(handleSearch(searchInput, search))
                }}
                width="fit">
                  Buscar
                </PrimaryButton>
            </SearchContainer>
        </SectionSubcontainer>
        <Circle />
    </SectionContainer>
  )
}
