import Header from '../components/Header'
import Hero from '../components/Hero'
import AprenderConstruir from '../components/AprenderConstruir'
import ContenidoInformativo from '../components/ContenidoInformativo'
import Footer from '../components/Footer'

const DotNet = () => {
  return (
    <>
      <Header />
      <Hero parallax={true} />
      <AprenderConstruir />
      <ContenidoInformativo />
      <Footer />
    </>
  )
}

export default DotNet