import React, { useState } from 'react'
import styled from 'styled-components/macro'

const Card = ({ title, question, answer, isBookmarked, onBookmarkClick }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible)
  }

  function Answer({ text }) {
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
      <BookmarkStyled />
      <i onClick={onBookmarkClick}>
        {isBookmarked ? 'bookmarked' : 'not bookmarked'}
      </i>
    </CardStyled>
  )
}

const CardStyled = styled.section`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`
const BookmarkStyled = styled.div`
  position: absolute;
  top: -2px;
  right: 20px;
  height: 20px;
  border: 20px solid #444;
  border-bottom: 20px solid transparent;
  :active {
    border: hotpink;
  }
`

export default Card
