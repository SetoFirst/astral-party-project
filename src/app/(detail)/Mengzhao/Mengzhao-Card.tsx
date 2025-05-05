import Link from "next/link";
import React from "react";
import { discription } from "@/app/components/PostCard";

export default function MengzhaoCard() {
  const IMAGES = {
    attackIcon:
      "https://static.wikitide.net/astralpartywiki/thumb/0/00/Attack.png/22px-Attack.png",
    defenseIcon:
      "https://static.wikitide.net/astralpartywiki/thumb/6/66/Defense.png/18px-Defense.png",
    hpIcon:
      "https://static.wikitide.net/astralpartywiki/thumb/3/39/Hp.png/25px-Hp.png",
  };

  const AltIcon = {
    attack_e: "ATK",
    defense_e: "DEF",
    hp_e: "HP",
  };

  interface MyComponentProps {
    icon: string;
    value: number | undefined;
    e: string;
  }

  const Stat = ({ icon, value, e }: MyComponentProps) => (
    <div className="grid content-center grid-cols-2">
      <img className="pt-1" src={icon} alt={e} />
      <p className="text-white pl-1 text-xl">
        <b>{value}</b>
      </p>
    </div>
  );
  return (
    <div>
      <Link href={`/${discription[19].routeApp}`}>
        <div className="bg-[#565656] border-5 border-black rounded-[20px] transition-all hover:scale-up-center relative hover:ring-4 hover:ring-offset-2 ">
          <img
            src={discription[19].imageCharacterPost}
            alt={discription[19].character}
          />
          <div className="bg-black p-[2px]">
            <h1 className="flex justify-center text-xl text-white">
              <b>{discription[19].character}</b>
            </h1>
            <h4 className="flex justify-center text-white">
              {discription[19].classCharacter}
            </h4>
          </div>
          <div className="flex justify-around h-[40px]">
            <Stat
              icon={IMAGES.attackIcon}
              value={discription[19].statCharacter?.attackValue}
              e={AltIcon.attack_e}
            />
            <Stat
              icon={IMAGES.defenseIcon}
              value={discription[19].statCharacter?.defenseValue}
              e={AltIcon.defense_e}
            />
            <Stat
              icon={IMAGES.hpIcon}
              value={discription[19].statCharacter?.hpValue}
              e={AltIcon.hp_e}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
