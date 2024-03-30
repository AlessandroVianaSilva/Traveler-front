"use client"
import Head from 'next/head'
import Image from 'next/image'
// import router from 'next/router'
import router, { useRouter } from 'next/navigation'
import loading from '../../../public/loading.gif'
import useAuth from '../../data/hook/useAuth'

export default function ForcarAutenticacao(props) {
    const router = useRouter()

    const { usuario, carregando } = useAuth()

    function renderizarConteudo() {
        return (
            <>
                {/* <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template-cod3r-auth")) {
                                    window.location.href = "/autenticacao"
                                }
                            `
                        }}
                    />
                </Head> */}
                {props.children}
            </>
        )
    }

    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image 
            // fill={true}
          src= {loading}
          alt="loading"
        //   width={700}
        //   height={500}
                // fill
        />
            </div>
        )
    }

    // if(!carregando && usuario?.email) {
    //     return renderizarConteudo()
    // } else if(carregando) {
    //     return renderizarCarregando()
    // } else {
    //     router.push('/autenticacao')
    //     return null
    // }

    if(carregando) {
        return renderizarCarregando()
    } else if(usuario?.email) {
        return renderizarConteudo()
    } else {
        router.push('/autenticacao')
        return null
    }
}