import Layout from '../components/template/Layout'
import '../app/globals.css'
import 'tailwindcss/tailwind.css'
// import useAppData from '@/data/hook/useAppData'

export default function Notificacoes() {
  // const ctx = useAppData()
  return (
    <Layout titulo="Notificações" 
      subtitulo="Aqui você irá gerenciar as suas notificações!">
        {/* <h2>{ctx.tema}</h2> */}
    </Layout>
  )
}