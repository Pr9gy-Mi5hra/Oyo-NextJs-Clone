"use client"

import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState("");

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 md:h-80">
      <div className="p-5">
        <h2 className="text-4xl md:text-5xl text-white text-center font-bold">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="flex flex-col md:flex-row justify-center my-5 mx-5 md:mx-20">
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-6/12 h-16 outline-none px-3 text-lg border-r-0 md:border-r-2 border-gray-400"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button
            type="submit"
            className="w-full md:w-auto h-16 px-3 py-2 md:ml-3 mt-3 md:mt-0 bg-green-400 hover:bg-green-600 text-white text-xl"
          >
            <Link href={`/hotels?city=${city}`}>Search</Link>
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center mx-5 md:mx-20 my-5 font-bold">
          <button
            type="submit"
            className="w-full md:w-auto h-16 px-3 py-2 md:mr-5 mb-3 md:mb-0 text-white bg-transparent hover:bg-gray-500 hover:border-gray-500 border border-white rounded-xl"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className="w-full md:w-auto h-16 px-3 py-2 md:mr-5 mb-3 md:mb-0 text-white bg-transparent hover:bg-gray-500 hover:border-gray-500 border-2 border-white rounded-xl"
          >
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;


// "use client";

// import Link from "next/link";
// import { useState } from "react";

// const Header3 = () => {
//   const [city, setCity] = useState(" ");

//   return (
//     <div className=" bg-gradient-to-r from-red-600 to-red-400 h-60">
//       <div className=" p-5">
//         <h2 className=" text-4xl text-white text-center font-bold">
//           Over 157,000 hotels and homes across 35 countries
//         </h2>
//         <div className="flex justify-center my-5 mx-20 ">
//           <input
//             type="text"
//             placeholder="Search..."
//             className=" w-6/12  h-16 outline-none px-3 text-lg border-r-2 border-gray-400 "
//             onChange={(e) => {
//               setCity(e.target.value);
//             }}
//           />
//           {/* <input
//             type="date"
//             placeholder="Search..."
//             className="  h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
//           />
//           <input
//             type="date"
//             placeholder="Search..."
//             className=" h-16 outline-none px-3 text-lg col-span-1"
//           /> */}

//           <button
//             type="submit"
//             className=" h-16 px-3 py-2 w-72 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl"
//           >
//             <Link href={`/hotels?city=${city}`}>Search</Link>
//           </button>
//         </div>
//         <div className="flex mx-20 my-5 font-bold">
//           <button
//             type="submit"
//             className=" h-16 px-3 py-2 hover:cursor-pointer text-white mr-5"
//           >
//             Continue your search
//           </button>
//           <button
//             type="submit"
//             className=" h-16 px-3 py-2 hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-gray-500 rounded-xl"
//           >
//             Homestay in India hotels
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header3;



// 'use client'

// import Link from "next/link"

// const Header3 = () => {
//   return (
//     <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
//       <div className=" p-5">
//         <h2 className="text-4xl text-white text-center font-bold">
//         Over 157,000 hotels and homes across 35 countries</h2>
//         <div className="grid grid-cols-5 my-5 mx-20">
//             <input type="text" placeholder="Search..." className=" h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2"/>
//             <input type="text" placeholder="Search..." className=" h-16 outline-none px-3 text-lg border-r-2 border-gray-col-span-1 "/>
//             <input type="text" placeholder="Search..." className=" h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"/>
            
//             <button type="submit" className="h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl">
//               <Link href={'/hotels'}>Search</Link>
//             </button>
           
//         </div>
//         <div className="flex mx-20 my-5 font-bold">
//         <button type="submit" className="h-16 px-3 py-2  hover:cursor-pointer text-white mr-5 font-bold">Continue your search</button>
//         <button type="submit" className="h-16 px-3 py-2  hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-slate-500 rounded-xl">Homestay in India hotels</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header3
