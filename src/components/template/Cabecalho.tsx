import BotaoAlternarTema from './BotaoAlternarTema'
import Titulo from './Titulo'
// import useAppData from '../../data/hook/useAppData'

interface CabecalhoProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Cabecalho(props: CabecalhoProps) {
    // const {tema, alternarTema} = useAppData()

    return (
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={`flex flex-grow justify-end items-center`}>
                {/* <BotaoAlternarTema tema='dark' /> */}
            </div>
        </div>
    )
}