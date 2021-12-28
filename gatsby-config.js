require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const AlgolioPropertyQuery = `{
  properties: allWpProperty {
    nodes {
      id
      link
      title
      date(fromNow: true)
      acf_property_fields {
        placeName
        postalCode
        propertyType
        bedCount
        price
      }
      
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: TRACED_SVG
                width: 480
                aspectRatio: 1.375
                transformOptions: {cropFocus: CENTER}
              )
            }
          }
        }
      }
    }
  }
}`

const queries = [
  {
    query: AlgolioPropertyQuery,
    transformer: ({ data }) => data.properties.nodes, // optional
  },
]

module.exports = {
  siteMetadata: {
    title: `Homelet Inn`,
    description: `Homelet Inn is a real estate company based in the Great Britain`,
    author: `@gatsbyjs`,
    siteUrl: `http://homelet-inn.local/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: "http://homelet-inn.local/graphql",
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter\: 100 , 200 ,300, 400, 500, 600, 700, 800`,
          `Dancing Script`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 1000,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
