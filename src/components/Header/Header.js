import React from 'react'
import { HeaderContainer, HeaderItem1, HeaderItem2 } from './HeaderStyles'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderItem1>Contacts List</HeaderItem1>
      <hr />
      <HeaderItem2>Contacts</HeaderItem2>
    </HeaderContainer>
  )
}

export default Header
