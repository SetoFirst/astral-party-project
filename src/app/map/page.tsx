import React from "react";
import MainLayout from "../components/MainLayout";
import GuideMaps from "../components/GuideMaps";

export const runtime = "edge";

export default function CardPage() {
  return (
    <div className="bg-gradient-to-tr from-[#be185d]/50 via-[#f472b6]/50 to-[#fbcfe8]/50 mx-4 mt-4">
      <MainLayout></MainLayout>
      <div className="flex flex-wrap justify-center pt-5">
        <div className="text-center pt-10 text-[30px] bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text text-2xl">
          <b>Welcome to the</b>
        </div>
        <img
          src="https://static.miraheze.org/astralpartywiki/3/35/WikiLogo.png"
          alt="Astral"
        />
      </div>
      <GuideMaps></GuideMaps>
    </div>
  );
}
