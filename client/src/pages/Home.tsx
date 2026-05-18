import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 justify-between min-h-dvh dark:bg-gray-800">
      <Header>Where's Cookie?</Header>
      <main className="flex flex-col items-center grow dark:text-white">
        <h2 className="font-medium text-xl md:text-2xl mb-6">Select a map</h2>
        <ul className="grow gap-6 flex flex-col w-full max-w-2xs md:max-w-dvw lg:flex-row lg:justify-center lg:items-center md:p-6">
            <li><HomeCard imagePath="/src/assets/backgrounds/hollyberry.jpg" imageAlt="The Hollyberry Kingdom">Hollyberry Kingdom</HomeCard></li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
