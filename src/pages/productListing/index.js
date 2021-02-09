import React from 'react'

import Layout from '../../components/Layout'
import ProductListing from '../../components/ProductListing'


export default class ProductListingIndex extends React.Component {
  render() {

    return (
      <Layout>
          <ProductListing />
      </Layout>
    )
  }
}


