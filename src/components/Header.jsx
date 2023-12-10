import React from 'react'
import { HeaderContainer, Link, Logo, Nav } from './Header.styles'

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Link href='/'>Menú</Link>
        <Link>Recetas</Link>
      </Nav>
      <Logo src="/Logo-Cocktails.png" alt="Logo" />
    </HeaderContainer>
  )
}
