import React from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import { link } from 'fs'

const SettingsPage = () => {
  return (
    <section>
      <h1>settings</h1>
      <FormStyled>
        <InputStyled type="text" placeholder="Titel"></InputStyled>
        <TextareaStyled
          type="textarea"
          placeholder="Frage"
          rows="5"
        ></TextareaStyled>
        <TextareaStyled
          type="textarea"
          placeholder="Antwort"
          rows="5"
        ></TextareaStyled>
        <Button>Create card</Button>
      </FormStyled>
    </section>
  )
}

const FormStyled = styled.form`
  display: grid;
  gap: 20px;
  padding: 20px;
`

const InputStyled = styled.input`
  font-size: 1.1em;
`

const TextareaStyled = styled.textarea`
  font-size: 1.1em;
`

export default SettingsPage
