import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    if (!username.trim() || !email.trim()) {
      setMessage("Please enter username and email.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage(`Account created for ${username}`);
      setPassword("");
    }, 800);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <div className="p-8 bg-gray-800 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <label className="block text-sm mb-1">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600 focus:outline-none"
          />

          <label className="block text-sm mb-1">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600 focus:outline-none"
          />

          <label className="block text-sm mb-1">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-600 py-2 rounded hover:bg-green-700 transition mb-2"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>

        {message && (
          <div className="mt-3 text-center text-sm p-2 rounded" style={{ background: "rgba(255,255,255,0.03)" }}>
            {message}
          </div>
        )}

        <div className="mt-4 text-xs text-center text-gray-400">Demo signup — no real account is created.</div>
      </div>
    </div>
  );
}
