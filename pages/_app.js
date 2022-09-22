import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='container'>
        <Component {...pageProps} />
		<br></br>
      </main>
	  <Footer />
    </>
  )
}

export default MyApp
