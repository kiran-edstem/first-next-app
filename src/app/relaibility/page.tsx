import relaibilityImg from "public/reliability.jpg"
import Hero from "@/components/hero";

export default function RelaibilityPage() {
    return (
        <Hero
            image={relaibilityImg}
            imgAlt="relaibility image"
            title={"Super high relaibility hosting"}
        />
    );
}
