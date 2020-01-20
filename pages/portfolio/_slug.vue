// query MyQuery {
//   portfolio(where: {title: "Salvation Army Southern California"}) {
//     edges {
//       node {
//         portfolio {
//           tags {
//             ... on Tag {
//               id
//               slug
//             }
//           }
//           projectImages {
//             sourceUrl
//             caption(format: RENDERED)
//           }
//         }
//         content(format: RENDERED)
//         id
//       }
//     }
//   }
// }
