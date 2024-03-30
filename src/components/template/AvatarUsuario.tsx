"use client"
import Link from "next/link"
import useAuth from "@/data/hook/useAuth"
import Image from "next/image";
import avatar from '../../../public/avatar.svg'

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()
    return(
        <Link href="/perfil">
            <div className="relative">
            <Image 
            // fill={true}
          src= {usuario?.imagemUrl ?? avatar}
          alt="Avatar do Usuário"
          width={700}
          height={500}
        className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
                // fill
        />
            </div>
        </Link>
    )
}