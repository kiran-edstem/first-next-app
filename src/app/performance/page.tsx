
import performanceImg from "public/performance.jpg"
import Hero from "@/components/hero";

export default function ScalePage() {
    return (
        <Hero
            image={performanceImg}
            imgAlt="performance image"
            title={"Relaible Hosting Platform"}
        />
    );
}