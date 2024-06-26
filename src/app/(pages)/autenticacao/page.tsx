'use client'

import AuthInput from "@/components/auth/AuthInput";
// import "../app/globals.css";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import Image from "next/image";
import Layout from '../../../components/template/Layout'
import '../../globals.css'
import 'tailwindcss/tailwind.css'

import Traveling from '../../../../public/Traveling.png'
import { IconeAtencao } from "@/components/icons";
import useAuth from "@/data/hook/useAuth";

export default function Autenticacao() {
  const { cadastrar, login, loginGoogle} = useAuth()
  
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [erro, setErro] = useState(null);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function exibirErro(msg, tempoEmSegundos = 3) {
    setErro(msg)
    setTimeout(() => setErro(null), tempoEmSegundos * 1000)
}

  async function submit() {
    try {
      if (modo === "login") {
        // exibirErro('Ocorreu um erro no Login!')
        await login(email, senha)
      } else {
        await cadastrar(email, senha)
        // exibirErro('Ocorreu um erro no Cadastro!')
      }
    } catch {
      exibirErro('erro desconhecido')
      // exibirErro(e?.message ?? 'Erro desconhecido!')
    }
  }

  return (
    <div className="flex fle-col h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3 bg-blue-600">
        <Image
          src={Traveling}
          alt="Imagem da Tela de Autenticação"
        //   width={700}
        //   height={500}
        className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className={`text-3xl font-bold mb-5 text-blue-600`}>TRAVELER</h1>
        <h1 className={`text-3xl font-bold mb-5`}>
          {modo === "login"
            ? "Entre com a Sua Conta"
            : "Cadastre-se na Plataforma"}
        </h1>
        {erro ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                        {IconeAtencao}
                        <span className="ml-3">{erro}</span>
                    </div>
                ) : false}

        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />

        <button
          onClick={submit}
          className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
            onClick={loginGoogle}
          className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3
                `}
        >
          Entrar com Google
        </button>
        {modo === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setModo("cadastro")}
              className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}
            >
              {" "}
              Crie um Conta
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já tem uma conta?
            <a
              onClick={() => setModo("login")}
              className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}
            >
              {" "}
              Entre com a suas Credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
