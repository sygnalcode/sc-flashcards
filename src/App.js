import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import PageStyled from './components/PageStyled'
import SettingsPage from './components/Settings'
import { getAllCards } from './services'

export default function App() {
  useEffect(() => {
    getAllCards().then(setCards)
  }, [])

  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([])

  function createCard(cardData) {
    console.log(cardData)
    // todo
  }

  const renderPage = () => {
    const pages = {
      0: <HomePage cards={cards} />,
      1: <section>Practice</section>,
      2: <section>Bookmarks</section>,
      3: <SettingsPage onSubmit={createCard} />
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
