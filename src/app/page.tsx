import homeImage from "../../public/home.jpg";
import Hero from "@/components/Hero";

export default function Home() {
  return (
      <Hero
        imgData={homeImage}
        imgAlt="car factory"
        title="Professional Cloud Hosting"
      />
  )
}
