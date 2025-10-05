import Card from "../components/ServiceCard";
import corporateImg from "../assets/corporate.png";
import gatedSocietyImg from "../assets/gatedSociety.png";
import mallImg from "../assets/mall.png";
import industrialImg from "../assets/industrial.png";
import vipEscortImg from "../assets/vipEscort.png";

// Attach images for each industry
const industries = [
  { title: "Corporate Offices & IT Parks", img: corporateImg },
  { title: "Gated Communities & Residential Complexes", img: gatedSocietyImg },
  { title: "Retail & Shopping Malls", img: mallImg },
  { title: "Construction & Industrial Sites", img: industrialImg },
  { title: "Event & Hospitality Security", img: vipEscortImg },
];

export default function Industries() {
  return (
    <div className="container mx-auto py-12 space-y-6">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        Industries We Serve
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, idx) => (
          <Card
            key={idx}
            title={ind.title}
            img={ind.img}       // pass the image here
            desc={null}         // no description for industries
            className="bg-gray-100"
          />
        ))}
      </div>
    </div>
  );
}
