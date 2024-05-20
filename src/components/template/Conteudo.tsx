import Image from "next/image";
import Backgroundimage from '../../../public/images/car-travel.jpg'
interface ConteudoProps {
    children?: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className="relative w-[100%] h-[80vh]">
            <div> </div>
            
            <Image 
            // fill={true}
          src= {Backgroundimage}
          alt="Avatar do Usuário"
        //   width={700}
        //   height={500}
        className={`
                `}
        />
            
        </div>
    )
}