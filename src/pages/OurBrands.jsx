import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/ui/SectionHeading";
import BrandShowcase from "../components/sections/BrandShowcase";
import { brands } from "../data/brands";

export default function OurBrands() {
  return <div className="container-shell pt-36 pb-28">
    <Helmet><title>Our Brands — Moonove</title><meta name="description" content="Explore Moonove's three distinct digital brands across entertainment, visual storytelling and learning." /></Helmet>
    <SectionHeading eyebrow="Moonove Identity" title="Our Brands" description="Three distinct digital destinations, connected by one creative ecosystem." />
    <div className="mt-14 grid gap-5">{brands.map((b,i)=><BrandShowcase key={b.slug} brand={b} index={i}/>)}</div>
  </div>;
}
