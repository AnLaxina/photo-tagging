import Header from "../components/Header";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex flex-col gap-2 justify-between min-h-dvh dark:bg-gray-800">
      <Header>Error!</Header>
      <main className="flex flex-col items-center gap-2 grow dark:text-white">
        <img src="/src/assets/sad-gingerbrave.jpg" alt="Sad GingerBrave" />
        <p>Can't find the page you're looking for!</p>
        <Link to="/" className="underline underline-offset-4 text-sm">Return Home</Link>
      </main>
    </div>
  );
}
