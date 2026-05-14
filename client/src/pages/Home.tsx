import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-dvh dark:bg-gray-800">
      <Header>Where's Cookie?</Header>
      <main className="grow">
        <p>Main page</p>
      </main>
      <Footer />
    </div>
  );
}
