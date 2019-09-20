import React from 'react'
import styled from 'styled-components/macro'

const Navigation = ({ buttonTexts, onClick }) => {
  return (
    <NavigationStyled>
      {buttonTexts.map((text, index) => (
        <ButtonStyled onClick={() => onClick(index)} key={index}>
          {text}
        </ButtonStyled>
      ))}
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  display: flex;
`
const ButtonStyled = styled.button`
  font-size: 2em;
  flex-grow: 1;
`

export default Navigation
