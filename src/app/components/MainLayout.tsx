"use client";
import { useRouter } from "next/navigation";
import React from "react";

const MainLayout = () => {
  const router = useRouter();

  const navItems = [
    { label: "Characters", path: "/" },
    { label: "Cards", path: "/cards" },
    { label: "Maps", path: "/map" },
  ];

  return (
    <div className="bg-[#555555]">
      <div className="text-white p-4 flex flex-wrap justify-center gap-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="hover:text-pink-500 text-white text-xl text-center cursor-pointer rounded px-4 py-2"
            onClick={() => router.push(item.path)}
            aria-label={`Navigate to ${item.label} page`}
          >
            <b>{item.label}</b>
          </button>
        ))}
        {/* <div>
          <input
            className="bg-white text-black px-4 py-2 rounded"
            type="text"
            placeholder="Search"
          />
        </div> */}
      </div>
    </div>
  );
};

export default MainLayout;
