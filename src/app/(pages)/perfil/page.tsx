"use client";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import Image from "next/image";
import "../../globals.css";
import "tailwindcss/tailwind.css";
import UserAvatar from "../../../../public/user.svg";

export default function Profile() {
//   const [fileUrl, setfileUrl] = useState(null);
  return (
    <div>
      <div>
        <h1>Configuração de perfil</h1>
        <p>Listagem de suas informações</p>
      </div>

      <div>
        <div>
          <input />
          <Image
            src={UserAvatar}
            alt={"conta upload"}
            width={150}
            height={150}
          />
          <p>mudar imagem</p>
        </div>
        <div>
            {/* <Form/> */}
        </div>
      </div>
    </div>
  );
}
