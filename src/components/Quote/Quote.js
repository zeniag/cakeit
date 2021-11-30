import React from "react"
import { useQuoteQuery } from "../../hooks/useQuoteQuery"
import { Content, Wrapper } from "./Quote.styles"
import QuoteImg from "../../images/quote.svg"

const Quote = () => {
  const { quote } = useQuoteQuery()
  const quoteData = quote.ACF_HomePage
  console.log(quote)
  return (
    <Wrapper>
      <Content>
        <img src={QuoteImg} alt="Quote" />
        <h6>{quoteData.citat1Text}</h6>
        <h6>{quoteData.citat1Author}</h6>
      </Content>
    </Wrapper>
  )
}

export default Quote
