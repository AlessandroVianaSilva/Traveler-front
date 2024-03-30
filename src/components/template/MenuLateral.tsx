"use client"
import { IconeAjustes, IconeCasa, IconeMinhasViagens, IconePerfil, IconeSair } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"
import useAuth from "@/data/hook/useAuth"
import { useRouter } from "next/navigation"
// import Logo from "./Logo"

export default function MenuLateral() {
    const {logout} = useAuth()
    const router = useRouter()

    return (
        <aside className={`flex flex-col
        bg-gray-200 text-gray-700
        dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gray-500
                h-20 w-20
            `}>

            </div>
            {/* <Logo /> */}
            <ul className="flex-grow">
                <MenuItem url="/" texto="Inicio" icone={IconeCasa}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>
                <MenuItem url="/perfil" texto="Perfil" icone={IconePerfil}/>
                <MenuItem url="/minhasviagens" texto="Viagens" icone={IconeMinhasViagens}/>
            </ul>
            <ul>
                <MenuItem
                    texto="Sair" icone={IconeSair} 
                    onClick={logout}
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-500 hover:text-white
                        dark:hover:text-white
                    `}
                    
                />
            </ul>
        </aside>
    )
}