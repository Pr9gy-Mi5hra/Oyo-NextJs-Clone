"use client"

import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, [auth]);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between border-b-2 border-gray-300 items-center h-auto md:h-24 px-5 md:px-10">
      <div className="flex items-center">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={200}
          height={200}
          className="w-24 h-24 md:w-28 md:h-28"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center md:ml-auto">
        <div className="hidden md:flex">
          <Block title={"Become a member"} para={"Additional 10% off on stays."} />
          <Block title={"OYO for business"} para={"Trusted by 5000 corporates."} />
          <Block title={"List your property"} para={"Start earning in 30 min."} />
          <Block title={"987654321"} para={"Call us to book now."} />
        </div>
        <div className="flex items-center ml-3 md:ml-0">
          <Image
            src={"/demo.svg"}
            alt="demo"
            width={200}
            height={200}
            className="w-10 h-10 rounded-full mr-3 md:mr-5"
          />
          {auth ? (
            <h3 className="font-bold cursor-pointer" onClick={handleLogout}>
              Logout
            </h3>
          ) : (
            <Link href={"/login"} className="font-bold">
              Login / Signup
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;




// "use client";
// import Image from "next/image";
// import Block from "./Block";
// import Link from "next/link";
// import Cookies from "js-cookie";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const Header1 = () => {
//   const [auth, setAuth] = useState(false);

//   useEffect(() => {
//     const key = Cookies.get("user");
//     if(key){
//       setAuth(true);
//       return;
//     }
//     setAuth(false);
//   }, [auth]);
  
//   const router = useRouter();

//   const handleLogout = () => {
//     Cookies.remove("user");
//     setAuth(false);
//     router.push("/");
//   };
//   return (
//     <div className=" flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
//       <Image
//         src={"/logo.png"}
//         alt="logo"
//         width={200}
//         height={200}
//         className=" w-28 h-28 "
//       />
//       <div className=" h-full flex">
//         <Block title={"Become a member"} para={"Additional 0% off on stays."} />
//         <Block
//           title={"OYO for business"}
//           para={"Trusted by 5000 corporates."}
//         />
//         <Block title={"List your property"} para={"Start earning in 30 min."} />
//         <Block title={"987654321"} para={"Call us to book now."} />
//         <div className="flex items-center px-3 ">
//           <Image
//             src={"/demo.svg"}
//             alt="demo"
//             width={200}
//             height={200}
//             className=" w-10 h-10 rounded-full mr-5"
//           />
//           {auth ? (
//             <h3
//               className=" font-bold cursor-pointer"
//               onClick={handleLogout}
//             >
//               Logout
//             </h3>
//           ) : (
//             <Link href={"/login"} className=" font-bold">
//               Login / Signup
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header1;



// import React from 'react'
// import Image from 'next/image'
// import Block from './Block'
// import Link from "next/link";
// const Header1 = () => {
//     return (
//         <div className='flex justify-between border-b-2 border-gray-300  items-center h-24 px-10'>
//             <Image src={'/logo.png'} alt='logo' width={200} height={200} className='w-28 h-28' />
//             <div className='border-r-2 border-gray-300 h-full flex'><Block title={'Become a member'}para={'Additional 10% 0ff on stays.'} />
//             <Block title={'Oyo for business'}para={'Trusted by 5000 corporates.'} />
            
//             <Block title={'List your property'}para={'Start earning in 30 min.'} />
            
//             <Block title={'987654321'}para={'Call us to book now.'} />
//             <div className='flex items-center PX-3'>
//             <Image src={'/demo.svg'}alt="demo" width={200}height={200}className='w-10 h-10 rounded-full mr-5'/>
//                  <Link href={'/login'}>
//                  <h3 className='font-bold'>Login/Signup</h3>
//                  </Link>
//             </div>
            
//             </div>


//         </div>
//     )
// }

// export default Header1
