type AngebotCardProps = {
  title: string;
  description: string;
  price: string;
  link: string;
};

export default function AngebotCard({ title, description, price, link }: AngebotCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-[#1a1a2e] shadow-lg hover:shadow-xl transition border border-gray-800">
      <h3 className="text-xl font-bold gradient-text">{title}</h3>
      <p className="mt-2 text-gray-300 text-sm">{description}</p>
      <div className="mt-4 text-2xl font-bold text-pink-400">{price}</div>
      <a
        href={link}
        className="inline-block mt-6 px-5 py-2 rounded-xl font-semibold bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90 transition"
      >
        Deal sichern
      </a>
    </div>
  );
}
