import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

// const BlogPost = () => {
//   const {
//     markdownRemark: {
//       frontmatter: { title },
//       html,
//     },
//   } = useStaticQuery(graphql`
//     query Post {
//       markdownRemark {
//         frontmatter {
//           title
//         }
//         html
//       }
//     }
//   `)

//   return (
//     <>
//       <h1>{title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: html }}></div>
//     </>
//   )
// }

export default BlogPost
