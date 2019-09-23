import React, { useState } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import PageStyled from './components/PageStyled'
import SettingsPage from './components/Settings'

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([
    {
      title: 'Array: Elemente ausloggen',
      question:
        'Wie logge ich alle Strings aus einem Array mit mehreren Strings aus?',
      answer: 'list.forEach(element => console.log(element))'
    },
    {
      title: 'HTML-Element erzeugen',
      question: 'Wie erzeuge ich ein neues HTML-Element in JavaScript?',
      answer: "document.createElement('div')"
    }
  ])

  const renderPage = () => {
    const pages = {
      0: <HomePage cards={cards} />,
      1: <section>Practice</section>,
      2: <section>Bookmarks</section>,
      3: <SettingsPage />
    }

    return pages[activeIndex] || <section>404</section>
  }

  return (
    <div>
      <PageStyled>
        {renderPage()}
        <Navigation
          buttonTexts={['Home', 'Practice', 'Bookmarks', 'Settings']}
          onClick={setActiveIndex}
        />
      </PageStyled>
    </div>
  )
}

export default App
