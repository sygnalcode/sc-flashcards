import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import CardList from './components/CardList'
import PageStyled from './components/PageStyled'
import SettingsPage from './components/Settings'
import { getAllCards, postCard, patchCard } from './services'

export default function App() {
  useEffect(() => {
    getAllCards().then(setCards)
  }, [])

  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([])

  function createCard(cardData) {
    postCard(cardData).then(card => setCards([...cards, card]))
  }

  // function toggleBookmark(id, cardData) {
  //   patchCard(id, cardData)
  //   console.log(id, cardData)
  //   .then(card => (card.isBookmarked = !isBookmarked))
  //   .then(card => setCards([...cards, card]))
  // }

  function handleBookmarkClick(card) {
    // console.log(card)
    patchCard(card._id, { isBookmarked: !card.isBookmarked }).then(
      changedCard => {
        const index = cards.findIndex(card => card._id === changedCard._id)
        setCards([
          ...cards.slice(0, index),
          { ...card, isBookmarked: changedCard.isBookmarked },
          ...cards.slice(index + 1)
        ])
      }
    )
    // console.log(changedCard => console.log(changedCard))
  }

  function renderPage() {
    const pages = {
      0: (
        <CardList
          onBookmarkClick={handleBookmarkClick}
          title="Home"
          cards={cards}
        />
      ),
      1: (
        <CardList
          onBookmarkClick={handleBookmarkClick}
          title="Practice"
          cards={cards.filter(card => card.doPractice)}
        />
      ),
      2: (
        <CardList
          onBookmarkClick={handleBookmarkClick}
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
