/**
 * Title: Write a program using JavaScript on Card
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 01, December 2023
 */

import Country from "@/utils/types";
import Image from "next/image";
import React from "react";

const Card = ({
  country,
  searchTerm,
}: {
  country: Country;
  searchTerm: string;
}): JSX.Element => {
  const highlightMatch = (text: string, term: string) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, "gi");
    return text
      .split(regex)
      .map((part, index) =>
        regex.test(part) ? <mark key={index}>{part}</mark> : part
      );
  };

  return (
    <div className="border rounded p-4 flex flex-col gap-y-4 h-fit">
      <Image
        src={country.flags.png}
        alt={country.flags.png}
        width={50}
        height={50}
        className="rounded-sm border object-cover"
      />
      <article className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-0">
          <h1 className="font-bold uppercase">
            {highlightMatch(country?.name?.common, searchTerm)}
          </h1>

          <h2 className="text-sm">
            {highlightMatch(country?.name?.official, searchTerm)}
          </h2>
        </div>
        <div className="flex flex-row flex-wrap gap-x-1 gap-y-1.5 text-xs">
          <span className="px-2 py-0.5 border rounded">
            {country?.population}
          </span>
          <span className="px-2 py-0.5 border rounded">
            {highlightMatch(country?.status, searchTerm)}
          </span>
          <span className="px-2 py-0.5 border rounded">
            {highlightMatch(country?.flag, searchTerm)}
          </span>
          <span className="px-2 py-0.5 border rounded">{country?.area}</span>
          <span className="px-2 py-0.5 border rounded">
            {highlightMatch(country?.region, searchTerm)}
          </span>
          <span className="px-2 py-0.5 border rounded">
            {highlightMatch(country?.startOfWeek, searchTerm)}
          </span>
        </div>
      </article>
    </div>
  );
};

export default Card;
