import React from 'react'
import Card from './Card'

export default function HomePage({ cards }) {
  return (
    <section className="page">
      <h1>Homepage</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </section>
  )
}
