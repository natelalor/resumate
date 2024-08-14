import Image from "next/image";

export default function Home() {
  return (
    <main>
      <body className="flex flex-col items-center">
        <div className="text-6xl text-theme-orange">
          <p>Resumate</p>
        </div>
        <div className="body">
          <div className="login">
            <div className="nav">
              <p>Login</p>
              <p>Signup</p>
            </div>
          </div>
        </div>
      </body>
    </main>
  );
}
