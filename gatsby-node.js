const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  // const { createPage } = actions
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })

  const { data } = await graphql(`
    query PropertyLinkQuery {
      allWpProperty {
        nodes {
          uri
        }
      }
    }
  `)

  data.allWpProperty.nodes.forEach(node => {
    actions.createPage({
      path: node.uri,
      component: path.resolve("./src/templates/PropertyDetails.js"),
      context: { uri: node.uri },
    })
  })
}
