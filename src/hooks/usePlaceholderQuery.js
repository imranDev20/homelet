import { useStaticQuery, graphql } from "gatsby"

export const usePlaceholderQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholder: file(name: { eq: "placeholder-image-2" }) {
        base
        childImageSharp {
          gatsbyImageData(
            aspectRatio: 1.375
            width: 480
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `)
  return data
}
