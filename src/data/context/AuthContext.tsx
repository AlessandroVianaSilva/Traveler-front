"use client"
import { createContext, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import Usuario from '@/model/Usuario'
import { Router } from 'next/router'
import { useRouter } from 'next/navigation'
// import GerenciarCookie from '@/app/actions'
// import GerenciarCookie from '@/app/actions'

// import { cookies } from 'next/headers'


interface AuthContextProps{
    usuario?: Usuario
    carregando?: boolean
    login: (email: string, senha: string) => Promise<void>
    cadastrar: (email: string, senha: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL
}
}

export function AuthProvider(props) {
    const router = useRouter()

    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario>(null)

    async function configurarSessao(usuarioFirebase: firebase.User | null) {
        if (usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            // gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else {
            setUsuario(null)
            // gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }


    async function login(email, senha) {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email, senha)
    
            await configurarSessao(resp.user)
            router.push('/')
        } finally {
            setCarregando(false)
        }
    }

    async function cadastrar(email: string, senha: string) {
        try {
            setCarregando(true)
            const resp = await firebase.auth()
                .createUserWithEmailAndPassword(email, senha)
    
            await configurarSessao(resp.user)
            router.push('/')
        } finally {
            setCarregando(false)
        }
    }

    async function loginGoogle() {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            await configurarSessao(resp.user)
            router.push('/')
        } finally{
            setCarregando(false)
        }
        
        
    }
    useEffect(() =>{
        const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
        return () => cancelar()
    }, [])

    async function logout(){
        try{
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
            router.push('/autenticacao')
        } finally{
            setCarregando(false)
        }
    }

    return(
    <AuthContext.Provider value={{
        usuario,
        carregando,
        cadastrar,
        login,
        loginGoogle,
        logout
    }}>
        {props.children}
    </AuthContext.Provider>
    )
}


export default AuthContext