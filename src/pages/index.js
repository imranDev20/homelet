import * as React from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import HomeProperties from "../components/HomeProperties"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"

const searchClient = algoliasearch(
  "VUOFOXPPB1",
  "a4a0fcbf2ca2ba7c4e3f7bb7b975c12c"
)

const IndexPage = () => (
  <Layout>
    <InstantSearch searchClient={searchClient} indexName="Homelet">
      <Seo title="Home" />
      <Hero />
      <HomeProperties />
    </InstantSearch>
  </Layout>
)

export default IndexPage
