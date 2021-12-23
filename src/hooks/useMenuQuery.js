import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      menu: allWpMenu(filter: { name: { eq: "Primary Menu" } }) {
        nodes {
          menuItems {
            nodes {
              id
              label
              path
            }
          }
        }
      }
    }
  `)
  return data
}
