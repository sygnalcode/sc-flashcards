import React from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

export default function SettingsPage({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    // console.log(data)
    onSubmit(data)
  }

  return (
    <div>
      <h1>Settings Page</h1>
      <FormStyled onSubmit={handleSubmit}>
        <LabelStyled>
          Title
          <input name="title" />
        </LabelStyled>
        <LabelStyled>
          Question
          <textarea name="question" />
        </LabelStyled>
        <LabelStyled>
          Answer
          <textarea name="answer" />
        </LabelStyled>
        <LabelStyled>
          Bookmark
          <input type="checkbox" name="isBookmarked" />
        </LabelStyled>
        <Button>Create card</Button>
      </FormStyled>
    </div>
  )
}

const FormStyled = styled.form`
  display: grid;
  gap: 20px;
  padding: 20px;
`

const LabelStyled = styled.label`
  display: grid;
  gap: 10px;
`
