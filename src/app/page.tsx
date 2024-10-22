import homePage from "public/home.jpg"
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero
      image={homePage}
      imgAlt="home image"
      title={"Proffesional Cloud Hosting"}
    />
  );
}
