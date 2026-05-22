import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Quote from "./components/Quote";
import Coaches from "./components/Coaches";
import Contacts from "./components/Contacts";
import DashedTrail from "./components/DashedTrail";

export default function Page() {
  return (
    <main className="page">
      <DashedTrail />
      <Nav />
      <Hero />
      <Activities />
      <Quote />
      <Coaches />
      <Contacts />
    </main>
  );
}
