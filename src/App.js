import React, { useState } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import GlobalStyle from './components/GlobalStyle'
import Layout from './components/Layout'

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

export default App
