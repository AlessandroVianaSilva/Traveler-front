// interface TituloProps {
//     // titulo: string
//     // subtitulo: string
//     // children?: any
// }

import { IconeCalendario, IconeMapa } from "../icons";

// export default function SearchBox(props) {
//     return (
//         <div>
//             <h1 className={`
//             font-black text-3xl
//             text-gray-900
//             dark:text-gray-100
//             `}>
//                 {/* {props.titulo} */}
//             </h1>

//             <h2 className={`
//             font-light text-sm text-gray-700 dark:text-gray-300
//             `}>
//                 {/* {props.subtitulo} */}
//             </h2>
//         </div>
//     )
// }

const SearchBox = () => {
  return (
    <div
      className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 x1:grid-cols-4 
    items-center justify-center gap-[1rem] mt-[3rem] w-[100%]"
    >
      {/* primeiro input */}
      <div className="flex items-center space-x-6">
        <div className="w-[1.5rem] h-[1.5rem] text-black">{IconeMapa}</div>
        <div>
          <p className="text-[18px] font-semibold mb-[0.2rem]">Localicação</p>
          <input
            className="outline-none border-none"
            type="text"
            placeholder="Para onde ir?"
          />
        </div>
      </div>
      {/* segundo input */}
      <div className="flex items-center space-x-6">
        <div className="w-[1.5rem] h-[1.5rem] text-black">
          {IconeCalendario}
        </div>
        <div>
          <p className="text-[18px] font-semibold mb-[0.2rem]">Data</p>
          <input
            className="outline-none border-none"
            type="date"
            placeholder="Data inicial"
          />
        </div>
      </div>
      {/* terceiro input */}
      <div className="flex items-center space-x-6">
        <div className="w-[1.5rem] h-[1.5rem] text-black">
          {IconeCalendario}
        </div>
        <div>
          <p className="text-[18px] font-semibold mb-[0.2rem]">Data</p>
          <input
            className="outline-none border-none"
            type="date"
            placeholder="Data final"
          />
        </div>
      </div>
      
    </div>
  );
};
export default SearchBox;
