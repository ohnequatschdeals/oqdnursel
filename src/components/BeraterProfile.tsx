"use client";
import { QRCodeCanvas } from "qrcode.react";

type BeraterProfileProps = {
  name: string;
  role: string;
  image: string;
  description: string;
  links: { title: string; url: string }[];
  qrUrl?: string;
};

export default function BeraterProfile({
  name,
  role,
  image,
  description,
  links,
  qrUrl,
}: BeraterProfileProps) {
  return (
    <div className="max-w-sm mx-auto bg-[#1a1a2e] rounded-2xl p-6 shadow-lg text-center">
      {/* Avatar */}
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto object-cover rounded-xl"
      />
      {/* Info */}
      <h3 className="mt-4 text-xl font-bold gradient-text">{name}</h3>
      <p className="text-gray-400 text-sm">{role}</p>
      <p className="mt-4 text-gray-300 text-sm">{description}</p>

      {/* Affiliate Links */}
      <div className="mt-6 space-y-3">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-2 rounded-xl font-semibold bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90 transition"
          >
            {link.title}
          </a>
        ))}
      </div>

      {/* QR Code */}
      {qrUrl && (
        <div className="mt-6 flex justify-center">
          <QRCodeCanvas value={qrUrl} size={96} bgColor="#1a1a2e" fgColor="#ffffff" />
        </div>
      )}
    </div>
  );
}
