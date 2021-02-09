import React from 'react'

import Layout from './Layout'
import { graphql, StaticQuery } from 'gatsby'


export class ProductListing extends React.Component {
  render() {
      console.log('prop', this.props.data);
    return (
        <div>
            <p>Hellow</p>
        </div>
    )
  }
}


export default () => (
    <StaticQuery
      query={graphql`
        query ProductListingQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "product-listing" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      fluid(maxWidth: 120, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <ProductListing data={data} count={count} />}
    />
  )
  