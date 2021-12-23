import { useStaticQuery, graphql } from "gatsby"

export const usePlaceholderQuery = () => {
  const data = useStaticQuery(graphql`
    query PlaceholderQuery {
      placeholder: file(name: { eq: "placeholder-image" }) {
        childImageSharp {
          gatsbyImageData(
            aspectRatio: 1.375
            width: 480
            placeholder: TRACED_SVG
            transformOptions: { cropFocus: CENTER }
          )
        }
      }
    }
  `)
  return data
}
