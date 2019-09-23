import React from 'react'
import styled from 'styled-components/macro'
import Card from './Card'

const CardList = ({ cards, title }) => {
  return (
    <PageStyled>
      <h1>{title}</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </PageStyled>
  )
}

const PageStyled = styled.section`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
`

export default CardList
