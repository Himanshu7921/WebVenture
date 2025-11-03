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
    <div className="p-4">
      <h1 className="bg-amber-700 underlinn"> <p className="text-2xl">Login</p></h1>
      
      
    </div>
  );
}
