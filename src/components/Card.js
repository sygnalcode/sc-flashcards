import React, { useState } from 'react'
import styled from 'styled-components/macro'

const Card = ({ title, question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible)
  }

  const Answer = ({ text }) => {
    return (
      <React.Fragment>
        <hr />
        <p>{text}</p>
      </React.Fragment>
    )
  }

  return (
    <CardStyled onClick={toggleAnswer}>
      <h2>{title}</h2>
      <p>{question}</p>
      {isAnswerVisible && <Answer text={answer} />}
    </CardStyled>
  )
}

const CardStyled = styled.section`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`
export default Card
