import React, { useState } from 'react'

export default function Card({ title, question, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible)
  }

  return (
    <section onClick={toggleAnswer} className="Card">
      <h2>{title}</h2>
      <p>{question}</p>
      {isAnswerVisible && <Answer text={answer} />}
    </section>
  )

  function Answer({ text }) {
    return (
      <React.Fragment>
        <hr />
        <p>{text}</p>
      </React.Fragment>
    )
  }
}
