
import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import ForcarAutenticacao from '../auth/ForcarAutenticacao'
import useAppData from '../../data/hook/useAppData'

interface LayoutProps {
    children?: any
}

export default function Layout(props: LayoutProps) {
    // const { tema } = useAppData()
    // console.log(tema)
    return (
        <ForcarAutenticacao>
                    {/* <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} /> */}
                        {props.children}
                
        </ForcarAutenticacao>
    )
}