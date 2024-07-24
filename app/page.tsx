import Image from "next/image";
import LoginForm from "@/app/components-built-in/loginForm";
import AdminIndex from "./components-built-in/adminIndex";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl text-primary-background mt-28 font-semibold text-center">
        Sistema de tickets UTPL
      </h1>
      {/* <LoginForm/> */}
      <AdminIndex/>
    </main>
  );
}
