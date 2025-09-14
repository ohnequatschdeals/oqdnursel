type BeraterAvatarProps = {
  name: string;
  role: string;
  image: string;
};

export default function BeraterAvatar({ name, role, image }: BeraterAvatarProps) {
  return (
    <div className="flex flex-col items-center text-center transition transform hover:scale-105">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full border-2 border-pink-500 object-cover shadow-lg hover:shadow-pink-500/50 transition"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 hover:opacity-30 transition"></div>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-400">{role}</p>
    </div>
  );
}
