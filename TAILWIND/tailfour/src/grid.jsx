import { useState, useEffect } from "react";


export default function Login(props) {

  const [state, setState] = useState(null);


  useEffect(() => {

  }, []);


return (
<div className=" bg-gray-900 text-white">
    <p className=" sm:text-3xl text-sm ">Hello this is goat</p>
    <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
  <div>
    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
      <svg className="h-6 w-6 stroke-white" >

      </svg>
    </span>
  </div>
  <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
   The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
<div class="bg-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
  <div>
    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
      <svg className="h-6 w-6 stroke-white" >

      </svg>
    </span>
  </div>
  <h3 className="text-gray-900  mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
  <p className="text-gray-500  mt-2 text-sm ">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
</div>


  );
}