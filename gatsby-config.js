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
      content
      
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: TRACED_SVG
                width: 480
                aspectRatio: 1.375
              )
            }
          }
        }
      }
    }
  }
}`

// height: 200

const queries = [
  {
    query: AlgolioPropertyQuery,
    transformer: ({ data }) => data.properties.nodes, // optional
  },
]

module.exports = {
  siteMetadata: {
    title: `Homelet Inn`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
      resolve: `gatsby-source-wordpress`,
      options: {
        url: "http://homelet-inn.local/graphql",
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
