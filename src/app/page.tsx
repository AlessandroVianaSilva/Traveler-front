"use client"
import Layout from '../components/template/Layout'
import '../app/globals.css'
import 'tailwindcss/tailwind.css'
import Hero from '@/components/Hero'
import TopDestination from '@/components/TopDestination'
import TravelPackages from '@/components/TravelPackages'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ForcarAutenticacao from '@/components/auth/ForcarAutenticacao'
// import SearchBox from '@/components/template/caixaPesquisa'


export default function Home() {
  return (
    // <Layout >
    // titulo="Página Inicial" subtitulo=""
    // >
    //   <h3>Conteúdo!!!!</h3>
    //   {/* <SearchBox/> */}
    // </Layout>
    // <div>
    //   <h2>Aqui</h2>
    // </div>


    // <Layout>
      
    // <main className=''>
    //   <Header/>
    //   <Hero/>
    //   <TopDestination/>
    //   <TravelPackages/>
    //   <Footer/>
    // </main>
    // </Layout>
    <ForcarAutenticacao>
       <main className=''>
       <Header/>
       <Hero/>
     <TopDestination/>
      <TravelPackages/>
       <Footer/>
     </main>
    </ForcarAutenticacao>
  
  )
}
