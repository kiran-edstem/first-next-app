import scaleImage from "public/scale.jpg"
import Hero from "@/components/hero";

export default function ScalePage() {
    return (
        <Hero
            image={scaleImage}
            imgAlt="scale image"
            title={"Scale your app to infinity"}
        />
    );
}