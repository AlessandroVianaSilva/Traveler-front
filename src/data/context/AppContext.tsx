// "use client";
// import { createContext, useState } from "react";


// interface AppContextProps {
//     tema?: string
//     alternarTema?: () => void
// }

// const AppContext = createContext<AppContextProps>({})

// export function AppProvider(props) {
//     const [tema, setTema] = useState('dark')

//     function alternarTema() {
//         const tema = '' ? 'dark' : ''
//     }

//     // useEffect(() => {
//     //     const temaSalvo = localStorage.getItem('tema')
//     //     setTema(temaSalvo)
//     // }, [])

//     return (
//         <AppContext.Provider value={{
//             tema,
//             alternarTema
//         }}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }

// export default AppContext