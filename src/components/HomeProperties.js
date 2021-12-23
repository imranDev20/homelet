import React from "react"
import tw, { styled } from "twin.macro"
import { Hits, connectStateResults } from "react-instantsearch-dom"

import Property from "./Property"
import NoResultsImage from "../images/no-results.png"

const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0 ? (
      children
    ) : (
      <NoResults>
        <img src={NoResultsImage} alt="" />
        {/* No results have been found for {searchState.query} */}
      </NoResults>
    )
)

const HomeProperties = () => {
  return (
    <Wrapper>
      <Container>
        <Results>
          <Hits hitComponent={Property} />
        </Results>
      </Container>
    </Wrapper>
  )
}

export default HomeProperties

const Wrapper = styled.section`
  ${tw`w-full mt-5`}
`
const Container = styled.div`
  ${tw`container mx-auto`}
  .ais-Hits-list {
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); */
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
const NoResults = styled.div`
  img {
    ${tw`mx-auto w-96`}
  }
`
