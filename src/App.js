import React from 'react'
import { Card } from 'lib/Card'
import { Loader } from 'lib/Loader'
import styled from 'styled-components/macro'

const ThinnerCard = styled(Card)`
  width: 400px;
`

export const App = () => {
  return (
    <div>
      <ThinnerCard
        coverImage="https://portfolio-m-skill.netlify.app/assets/my-words-img.jpg"
        title="this is the title"
        secondaryText="this is the second text"
        thumbnailUrl="https://portfolio-m-skill.netlify.app/assets/survey-image.jpg" />
      <Card
        title="only title in this card"
        secondaryText="this is the second text" />
      <Loader loaderColor="#fff" />
    </div>
  )
}
