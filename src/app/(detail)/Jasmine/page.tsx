"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { discription } from "@/app/components/PostCard";

export const runtime = "edge";

interface MyComponentProps {
  emojicon: string | undefined;
  icon: string;
  value: number | undefined;
}

const IMAGES = {
  Main: `${discription[15].imageCharacter}`,
  attackIcon:
    "https://static.wikitide.net/astralpartywiki/thumb/0/00/Attack.png/22px-Attack.png",
  defenseIcon:
    "https://static.wikitide.net/astralpartywiki/thumb/6/66/Defense.png/18px-Defense.png",
  hpIcon:
    "https://static.wikitide.net/astralpartywiki/thumb/3/39/Hp.png/25px-Hp.png",
  timeIcon:
    "https://static.wikitide.net/astralpartywiki/thumb/9/9c/Cooldown.png/24px-Cooldown.png",
};

const Expression = discription[15].expressions;

const Stat = ({ icon, value }: MyComponentProps) => (
  <div className="grid content-center grid-cols-2">
    <img className="pt-1" src={icon} alt="" />
    <p className="text-white pl-1 text-xl font-bold">{value}</p>
  </div>
);

const ExStat = ({ emojicon }: MyComponentProps) => (
  <img className="bg-green-300" src={emojicon} alt="" />
);

const PageCard = () => {
  const router = useRouter();
  const BackClick = () => router.push("/");

  return (
    <div className="bg-gradient-to-tr from-[#be185d]/50 via-[#f472b6]/50 to-[#fbcfe8]/50 mx-4 mt-4">
      <div className="flex flex-wrap justify-end pr-10 pt-10">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-4xl cursor-pointer"
          onClick={BackClick}
          aria-label="Go back to home page"
        >
          Back
        </button>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center pl-10 pt-10">
        <img
          className="bg-gray-500 rounded-[80px] border-5 md:w-[40%] md:h-[40%] md:flex-1 flex-none"
          src={IMAGES.Main}
          alt={discription[15].character}
          onError={(e) => {
            if (e.target instanceof HTMLImageElement) {
              e.target.src = "/fallback-image.png"; // Set fallback image
            }
          }}
        />
        <div className="p-10">
          <div className="flex justify-around h-[40px] bg-gray-500">
            <Stat
              icon={IMAGES.attackIcon}
              value={discription[15].statCharacter?.attackValue}
              emojicon={undefined}
            />
            <Stat
              icon={IMAGES.defenseIcon}
              value={discription[15].statCharacter?.defenseValue}
              emojicon={undefined}
            />
            <Stat
              icon={IMAGES.hpIcon}
              value={discription[15].statCharacter?.hpValue}
              emojicon={undefined}
            />
          </div>
          <span className="text-4xl font-bold">Profile</span>
          <br />
          <br />
          <hr />
          <br />
          <span className="text-xl">
            <b>Name:</b> {discription[15].profile?.Name} <br />
            <b>Birthday:</b> {discription[15].profile?.Birthday} <br />
            <b>Favorite Food:</b> {discription[15].profile?.FavoriteFood} <br />
            {discription[15].profile?.discriptions}
          </span>
          <br />
          <br />
          <span className="text-4xl">
            <div className="flex">
              <b>Active Skill</b>
              <Stat
                icon={IMAGES.timeIcon}
                value={discription[15].statCharacter?.timeValue}
                emojicon={undefined}
              />
            </div>
          </span>
          <br />
          <hr />
          <br />
          <span className="text-xl">{discription[15].activeSkill}</span>
          <br />
          <br />
          <span className="text-4xl">
            <b>Passive Skil</b>{" "}
          </span>
          <br />
          <br />
          <hr />
          <br />
          <span className="text-xl">{discription[15].passiveSkill}</span>
        </div>
      </div>
      <div className="text-4xl pl-20 pr-10 md:pl-10">
        <b>Expressions</b>
        <br />
        <br />
        <hr />
        <br />
        <div className="flex flex-wrap gap-[20px] pb-10">
          <ExStat emojicon={Expression?.emoji_1} icon={""} value={undefined} />
          <ExStat emojicon={Expression?.emoji_2} icon={""} value={undefined} />
          <ExStat emojicon={Expression?.emoji_3} icon={""} value={undefined} />
          <ExStat emojicon={Expression?.emoji_4} icon={""} value={undefined} />
          <ExStat emojicon={Expression?.emoji_5} icon={""} value={undefined} />
          <ExStat emojicon={Expression?.emoji_6} icon={""} value={undefined} />
          <ExStat emojicon={Expression?.emoji_7} icon={""} value={undefined} />
          <ExStat emojicon={Expression?.emoji_8} icon={""} value={undefined} />
          <ExStat emojicon={Expression?.emoji_9} icon={""} value={undefined} />
          <ExStat emojicon={Expression?.emoji_10} icon={""} value={undefined} />
          <ExStat emojicon={Expression?.emoji_11} icon={""} value={undefined} />
          <ExStat emojicon={Expression?.emoji_12} icon={""} value={undefined} />
        </div>
      </div>
    </div>
  );
};

export default PageCard;
