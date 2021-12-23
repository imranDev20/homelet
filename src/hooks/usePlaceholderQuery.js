import { useStaticQuery, graphql } from "gatsby"

export const usePlaceholderQuery = () => {
  const data = useStaticQuery(graphql`
    query PlaceholderQuery {
      placeHolderImg: wpMediaItem(databaseId: { eq: 89 }) {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 480
              aspectRatio: 1.375
              placeholder: TRACED_SVG
            )
          }
        }
      }
    }
  `)
  return data
}
