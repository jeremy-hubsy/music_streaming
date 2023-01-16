import { useRouter } from "next/router";
import { FC, useState } from "react";
// import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";
import Button from "./atoms/button";
import NextImage from "next/image";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const user = await auth(mode, { email, password });
    setLoading(false);
    router.push("/");
  }

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center flex-col">
      <div className="h-24">
        <NextImage
          src="/logo.png"
          height={60}
          width={120}
          alt="logo of the company"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 rounded w-2/6 h-3/5 flex justify-evenly flex-col items-center"
      >
        <div>
          <h2 className="text-white">
            {mode === "signin" ? "Signin to your account" : "Create an account"}
          </h2>
        </div>
        <div>
          <div className="text-white">Email</div>
          <input
            className="bg-slate-800 border border-slate-600 w-96 h-12 rounded"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <div className="text-white">Password</div>
          <input
            className="bg-slate-800 border border-slate-600 w-96 h-12 rounded"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></input>
        </div>
        <Button>{mode}</Button>
      </form>
    </div>
  );
};

export default AuthForm;
