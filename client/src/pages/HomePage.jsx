import { useLoaderData } from "react-router-dom";
import LogoExternatic from "../components/LogoExternatic";
import HomeButtons from "../components/Homebuttons";

export default function HomePage() {
  const offers = useLoaderData();
  // toto
  return (
    <>
      <LogoExternatic />
      <h1>Externatic</h1>
      <p>Attrapez votre avenir</p>
      <p>{offers[0].job_title}</p>
      <HomeButtons />
    </>
  );
}
