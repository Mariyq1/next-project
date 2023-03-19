import '@/styles/globals.scss'
import Layout from '@/components/Layout'
import Image from 'next/image';
import footer from '../img/Summer.jpg'


const App= ({ Component, pageProps }) =>{
  return (
    <Layout>
      <main>
  <Component {...pageProps} />
      </main>
      <Image
      src={footer}
      width={500}
      height={350}
      alt= "preview"
      placeholder="blur"
      />
  </Layout>
  )
}
export default App;