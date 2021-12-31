import React from "react"
import { Hits, connectStateResults } from "react-instantsearch-dom"

import { Wrapper, Container, NoResults } from "../styles/Homeproperties.styles"

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
