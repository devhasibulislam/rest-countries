/**
 * Title: Write a program using JavaScript on Skeleton
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

import React from "react";

const Skeleton = (): JSX.Element => {
  return (
    <div className="border rounded p-4 flex flex-col gap-y-4 h-fit">
      <div className="h-12 w-24 animate-pulse bg-slate-500 rounded" />
      <article className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-2">
          <div className="h-6 w-1/2 animate-pulse bg-slate-500 rounded" />
          <div className="h-5 w-full animate-pulse bg-slate-500 rounded" />
        </div>
        <div className="flex flex-row flex-wrap gap-x-1 gap-y-1.5 text-xs">
          <span className="w-14 h-4 animate-pulse bg-slate-500 rounded" />
          <span className="w-14 h-4 animate-pulse bg-slate-500 rounded" />
          <span className="w-14 h-4 animate-pulse bg-slate-500 rounded" />
          <span className="w-14 h-4 animate-pulse bg-slate-500 rounded" />
          <span className="w-14 h-4 animate-pulse bg-slate-500 rounded" />
          <span className="w-14 h-4 animate-pulse bg-slate-500 rounded" />
        </div>
      </article>
    </div>
  );
};

export default Skeleton;
