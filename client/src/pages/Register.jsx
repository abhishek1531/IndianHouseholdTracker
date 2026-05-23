import toast from "react-hot-toast";
import { useState } from "react";
import InputField from "../components/InputField";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    toast.success("Registration Successful");

    console.log({
    name,
    email,
    password,
    });
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh]">

      <form
        onSubmit={handleRegister}
        className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md border border-zinc-800"
      >

        <h1 className="text-4xl font-bold mb-8 text-center">
          Register
        </h1>

        <div className="space-y-5">

          <InputField
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputField
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl text-lg font-semibold transition"
          >
            Register
          </button>

        </div>

      </form>

    </div>
  );
}

export default Register;