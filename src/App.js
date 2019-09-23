import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import CardList from './components/CardList'
import PageStyled from './components/PageStyled'
import SettingsPage from './components/Settings'
import { getAllCards, postCard } from './services'

export default function App() {
  useEffect(() => {
    getAllCards().then(setCards)
  }, [])

  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([])

  function createCard(cardData) {
    postCard(cardData).then(card => setCards([...cards, card]))
  }

  const renderPage = () => {
    const pages = {
      0: <CardList title="Home" cards={cards} />,
      1: (
        <CardList
          title="Practice"
          cards={cards.filter(card => card.doPractice)}
        />
      ),
      2: (
        <CardList
          title="Bookmarks"
          cards={cards.filter(card => card.isBookmarked)}
        />
      ),
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
