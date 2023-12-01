/**
 * Title: Write a program using JavaScript on UseGetCountries
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

import axios from "axios";
import { useEffect, useState } from "react";

const useGetCountries = (): object[] => {
  const [countries, setCountries] = useState<object[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<object[]>(
          "https://restcountries.com/v3.1/all"
        );
        setCountries(response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Axios Error:", error.toJSON());
        } else {
          console.error("Generic Error:", error);
        }
      }
    };

    fetchData();
  }, []);

  return countries;
};

export default useGetCountries;
