import React from "react";
import DetailMap from "./DetailMap";
import Link from "next/link";

export default function GuideMaps() {
  return (
    <div className="pt-10">
      <div className="text-center text-2xl font-bold bg-white hover:animate-contract-expand">
        <p className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Standard
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 justify-items-center pt-10 pb-10">
        <Link href={"/Amusement_Park"}>
          <div className="justify-items-center hover:scale-125 hover:bg-emerald-50 rounded-[20px]">
            <img
              src="https://static.wikitide.net/astralpartywiki/thumb/6/6f/Screenshot_Amusement_Park.png/70px-Screenshot_Amusement_Park.png"
              alt=""
              className="w-[100px]"
            />
            <button className="border-4 border-double py-2 px-2 rounded-[20px]">
              Amusement Park
            </button>
          </div>
        </Link>
        <Link href={"/Sakura_Townlet"}>
          <div className="justify-items-center hover:scale-125 hover:bg-emerald-50 rounded-[20px]">
            <img
              src="https://static.wikitide.net/astralpartywiki/thumb/2/21/Screenshot_Sakura_Townlet.png/70px-Screenshot_Sakura_Townlet.png"
              alt=""
              className="w-[100px]"
            />
            <button className="border-4 border-double py-2 px-2 rounded-[20px]">
              Sakura Townlet
            </button>
          </div>
        </Link>
        <Link href={"/Crossroads"}>
          <div className="justify-items-center hover:scale-125 hover:bg-emerald-50 rounded-[20px]">
            <img
              src="https://static.wikitide.net/astralpartywiki/thumb/3/36/Screenshot_Crossroads.png/70px-Screenshot_Crossroads.png"
              alt=""
              className="w-[100px]"
            />
            <button className="border-4 border-double py-2 px-2 rounded-[20px]">
              Crossroads
            </button>
          </div>
        </Link>
        <Link href={"/Phantom_City"}>
          <div className="justify-items-center hover:scale-125 hover:bg-emerald-50 rounded-[20px]">
            <img
              src="https://static.wikitide.net/astralpartywiki/thumb/3/31/Screenshot_Phantom_City.png/70px-Screenshot_Phantom_City.png"
              alt=""
              className="w-[100px]"
            />
            <button className="border-4 border-double py-2 px-2 rounded-[20px]">
              Phantom City
            </button>
          </div>
        </Link>
        <Link href={"/Forest_Adventure"}>
          <div className="justify-items-center hover:scale-125 hover:bg-emerald-50 rounded-[20px]">
            <img
              src="https://static.wikitide.net/astralpartywiki/thumb/c/cb/Screenshot_Forest_Adventure.png/90px-Screenshot_Forest_Adventure.png"
              alt=""
              className="w-[100px]"
            />
            <button className="border-4 border-double py-2 px-2 rounded-[20px]">
              Forest Adventure
            </button>
          </div>
        </Link>
        <Link href={"/Gift_Plaza"}>
          <div className="justify-items-center hover:scale-125 hover:bg-emerald-50 rounded-[20px]">
            <img
              src="https://static.wikitide.net/astralpartywiki/thumb/3/39/Screenshot_Gift_Plaza.png/90px-Screenshot_Gift_Plaza.png"
              alt=""
              className="w-[100px]"
            />
            <button className="border-4 border-double py-2 px-2 rounded-[20px]">
              Gift Plaza
            </button>
          </div>
        </Link>
      </div>
      <div className="text-center text-2xl font-bold bg-white hover:animate-contract-expand">
        <p className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Co-Op Mode
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center pt-10 pb-10">
        <Link href={"/Dreama"}>
          <div className="justify-items-center hover:scale-125 hover:bg-emerald-50 rounded-[20px]">
            <img
              src="https://static.wikitide.net/astralpartywiki/thumb/9/9b/Screenshot_Dreama.png/49px-Screenshot_Dreama.png"
              alt=""
              className="w-[70px]"
            />
            <button className="border-4 border-double py-2 px-2 rounded-[20px]">
              Dreama
            </button>
          </div>
        </Link>
        <Link href={"/Soul_Celebration"}>
          <div className="justify-items-center hover:scale-125 hover:bg-emerald-50 rounded-[20px]">
            <img
              src="https://static.wikitide.net/astralpartywiki/thumb/8/80/Screenshot_Soul_Celebration.png/82px-Screenshot_Soul_Celebration.png"
              alt=""
              className="w-[100px]"
            />
            <button className="border-4 border-double py-2 px-2 rounded-[20px]">
              Soul Celebration
            </button>
          </div>
        </Link>
        <Link href={"/Water_Town"}>
          <div className="justify-items-center hover:scale-125 hover:bg-emerald-50 rounded-[20px]">
            <img
              src="https://static.wikitide.net/astralpartywiki/thumb/f/f3/Screenshot_Water_Town.png/82px-Screenshot_Water_Town.png"
              alt=""
              className="w-[100px]"
            />
            <button className="border-4 border-double py-2 px-2 rounded-[20px]">
              Water Town
            </button>
          </div>
        </Link>
        <Link href={"/Magic_Academy"}>
          <div className="justify-items-center hover:scale-125 hover:bg-emerald-50 rounded-[20px]">
            <img
              src="https://static.wikitide.net/astralpartywiki/thumb/1/17/Screenshot_Academy_Magic_1stSide.png/82px-Screenshot_Academy_Magic_1stSide.png"
              alt=""
              className="w-[100px]"
            />
            <button className="border-4 border-double py-2 px-2 rounded-[20px]">
              Magic Academy
            </button>
          </div>
        </Link>
      </div>
      <div className="text-center text-2xl font-bold bg-white hover:animate-contract-expand">
        <p className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Detail Panels
        </p>
      </div>
      <div className="pt-10 pb-10">
        <DetailMap></DetailMap>
      </div>
    </div>
  );
}
