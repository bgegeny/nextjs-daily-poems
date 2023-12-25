import scaleImage from "../../../public/scale.jpg";
import Hero from "@/components/Hero";

export default function ScalePage() {
  return (
      <Hero
        imgData={scaleImage}
        imgAlt="steel factory"
        title="Scale your business with us"
      />
  )
}
