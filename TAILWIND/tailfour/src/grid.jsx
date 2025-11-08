import { useState, useEffect } from "react";


export default function Login(props) {

  const [state, setState] = useState(null);


  useEffect(() => {

  }, []);


return (

<div className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-12 ">
  <div className="min-h-[100px] col-span-12 rounded-lg bg-orange-500 shadow sm:col-span-2"></div>
  <div className="min-h-[100px] col-span-12 rounded-lg bg-teal-500 shadow sm:col-span-10"></div>
  <div className="min-h-[100px] col-span-12 rounded-lg bg-red-500 shadow sm:col-span-6"></div>
  <div className="min-h-[100px] rounded-lg bg-purple-500 shadow sm:col-span-6 sm:block hidden"></div>
 </div>



  );
}