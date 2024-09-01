import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-2 h-screen">
      <div className="left-bg">
        <h1>Hello</h1>
      </div>
      <LoginForm />
    </main>
  );
}
