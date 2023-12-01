/**
 * Title: Write a program using JavaScript on Page
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

"use client";

import chunk from "lodash/chunk";
import Card from "@/components/Card";
import useGetCountries from "@/hooks/useGetCountries";
import Skeleton from "@/components/Skeleton";
import Country from "@/utils/types";
import Fuse from "fuse.js";
import { useState } from "react";

export default function Home(): JSX.Element {
  const countries = useGetCountries();
  const [searchInput, setSearchInput] = useState<string>("");

  const fuse = new Fuse(countries, {
    keys: ["name.common", "name.official"],
    includeScore: true,
  });

  const filteredCountries = searchInput
    ? fuse.search(searchInput).map((result) => result.item)
    : countries;

  const chunkSize = Math.ceil(filteredCountries.length / 4);

  return (
    <main className="lg:max-w-7xl md:max-w-3xl mx-auto p-4 flex flex-col gap-y-4">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="🔍 Search any country..."
        className="w-full h-full p-2 rounded text-sm"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="flex flex-row gap-x-4 justify-between items-center whitespace-nowrap text-xs">
        <hr className="w-full" />
        Your Result
        <hr className="w-full" />
      </div>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {!filteredCountries || filteredCountries.length === 0 ? (
          <>
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 31, 32, 33, 34, 35, 36, 37, 38, 39,
            ].map((index: number) => (
              <Skeleton key={index} />
            ))}
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 content-start">
              {((chunk(filteredCountries, chunkSize)[0] || []) as object[]).map(
                (country: object, index: number) => (
                  <Card
                    key={index}
                    country={country as Country}
                    searchTerm={searchInput}
                  />
                )
              )}
            </div>
            <div className="grid grid-cols-1 gap-4 content-start">
              {((chunk(filteredCountries, chunkSize)[1] || []) as object[]).map(
                (country: object, index: number) => (
                  <Card
                    key={index}
                    country={country as Country}
                    searchTerm={searchInput}
                  />
                )
              )}
            </div>
            <div className="grid grid-cols-1 gap-4 content-start">
              {((chunk(filteredCountries, chunkSize)[2] || []) as object[]).map(
                (country: object, index: number) => (
                  <Card
                    key={index}
                    country={country as Country}
                    searchTerm={searchInput}
                  />
                )
              )}
            </div>
            <div className="grid grid-cols-1 gap-4 content-start">
              {((chunk(filteredCountries, chunkSize)[3] || []) as object[]).map(
                (country: object, index: number) => (
                  <Card
                    key={index}
                    country={country as Country}
                    searchTerm={searchInput}
                  />
                )
              )}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
