import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          acf {
            team_members {
              value
              label
            }
            video_iframe
            viewing_link
            repo_link
            images {
              dummy
              image {
                localFile {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log({ data })
  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      {data.allWordpressPost.edges.map((post, index) => (
        <div>
          <ul>
            <li>{post.node.title}</li>
            <li>{post.node.excerpt}</li>
            <li>{post.node.slug}</li>
          </ul>
          <h3>ACF CONTENT</h3>
          <textarea style={{minHeight: '100px', width: '100%'}}>
            {JSON.stringify(post.node.acf)}
          </textarea>
        </div>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
