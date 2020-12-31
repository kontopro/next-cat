import Layout from '../components/layout'
import {AithshProvider} from '../components/AithshState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (  
  <Layout>
    <AithshProvider>
      <Component {...pageProps} />
    </AithshProvider>
  </Layout> 
  )
}

export default MyApp
