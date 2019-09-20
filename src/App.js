import React, { useState } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import GlobalStyle from './components/GlobalStyle'
import Layout from './components/Layout'

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([
    {
      title: 'Foo',
      question: 'What?',
      answer: 'That!'
    },
    {
      title: 'Bar',
      question: 'This?',
      answer: 'That!'
    }
  ])

  function renderPage() {
    const pages = {
      0: <HomePage cards={cards} />,
      1: <section>Practice</section>,
      2: <section>Bookmarks</section>,
      3: <section>Settings</section>
    }

    return pages[activeIndex] || <section>404</section>
  }

  return (
    <div>
      <Layout>
        <GlobalStyle />
        {renderPage()}
        <Navigation
          buttonTexts={['Home', 'Practice', 'Bookmarks', 'Settings']}
          onClick={setActiveIndex}
        />
      </Layout>
    </div>
  )
}
