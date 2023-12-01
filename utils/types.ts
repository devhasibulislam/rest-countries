/**
 * Title: Write a program using JavaScript on Types
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

interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
  };
  population: number;
  status: string;
  flag: string;
  area: number;
  region: string;
  startOfWeek: string;
}

export default Country;
