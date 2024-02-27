import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons"
import MenuItem from "./MenuItem"

export default function MenuLateral() {
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
            <ul className="flex-grow">
                <MenuItem url="/" texto="inicio" icone={IconeCasa}/>
                <MenuItem url="/ajustes" texto="ajustes" icone={IconeAjustes}/>
                <MenuItem url="/notificacoes" texto="notificações" icone={IconeSino}/>
            </ul>
            <ul>
                <MenuItem
                    texto="Sair" icone={IconeSair} 
                    // onClick={logout}
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