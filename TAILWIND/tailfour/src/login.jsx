import { useState, useEffect } from "react";


export default function Login(props) {
  // local state
  const [state, setState] = useState(null);

  // side effects (optional)
  useEffect(() => {
    // run on mount
  }, []);

  // UI (must return valid JSX; one root element)
  return (
    <div className=" bg-gray-900">
      <div className="bg-gray-700 p-14 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-center text-3xl text-white mb-8 font-bold">Login</h2>
            <form action="">
              <div className="mb-4">
                  <label htmlFor="" className="block text-sm text-left px-1 mb-2">Email:</label>
                  <input type="email" className="w-full px-3 py-2 rounded-xl bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" name="" id="" placeholder="Email" />
              </div>
              <div className="mb-4">
                  <label htmlFor="" className="block text-sm text-left px-1 mb-2">Password:</label>
                  <input type="password" className="w-full px-3 py-2 rounded-xl bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"d name="" id="" placeholder="Password" />
              </div>
              <button type="submit" className=" bg-blue-700 w-full hover:bg-blue-800 shadow-2xl" >Login</button>
          </form>
      </div>
  </div>
  );
}
