export default function DetailedServiceCard({ title, desc }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between">
      <h3 className="text-xl font-semibold text-accent mb-4">{title}</h3>
      <div className="text-gray-700 text-sm leading-relaxed">{desc}</div>
    </div>
  );
}

