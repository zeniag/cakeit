import React from "react"
import { useQuoteQuery } from "../../hooks/useQuoteQuery"
import { Content, Wrapper } from "./Quote.styles"
import QuoteImg from "../../images/quote.svg"

const Quote = () => {
  const { quote } = useQuoteQuery()
  const quoteData = quote.ACF_HomePage
  return (
    <Wrapper>
      <Content>
        <img src={QuoteImg} alt="Quote" />
        <h6>{quoteData.citat1Text}</h6>
        <p>{quoteData.citat1Author}</p>
      </Content>
    </Wrapper>
  )
}

export default Quote
