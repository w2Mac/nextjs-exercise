import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Septa Cahyadiputra">
          <h3>Septa Cahyadiputra</h3>
          <p className="email">
            <i className="fa fa-envelope"></i><a className="mailto" href="mailto:w2septa@gmail.com">w2septa@gmail.com</a>
          </p>
          <p>Techical Support Engineer</p>
          
    </Layout>
  )
}

export default IndexPage
