import React from "react";
import MimiCard from "../(detail)/Mimi/Mimi-Card";
import ParunanCard from "../(detail)/Parunan/Parunan-Card";
import FannyCard from "../(detail)/Fanny/Fanny-Card";
import AlanaCard from "../(detail)/Alana/Alana-Card";
import KomachiCard from "../(detail)/Komachi/Komachi-Card";
import PadmanCard from "../(detail)/Padman/Padman-Card";
import PaparaCard from "../(detail)/Papara/Papara-Card";
import RenCard from "../(detail)/Ren/Ren-Card";
import Z3000Card from "../(detail)/Z3000/Z3000-Card";
import PandamanCard from "../(detail)/Pandaman/Pandaman-Card";
import LuluCard from "../(detail)/Lulu/Lulu-Card";
import FenCard from "../(detail)/Fen/Fen-Card";
import HaiQingCard from "../(detail)/HaiQing/HaiQing-Card";
import MisakiCard from "../(detail)/Misaki/Misaki-Card";
import NardisCard from "../(detail)/Nardis/Nardis-Card";
import JasmineCard from "../(detail)/Jasmine/Jasmine-Card";
import LukaCard from "../(detail)/Luka/Luka-Card";
import NancyLuCard from "../(detail)/NancyLu/NancyLu-Card";
import MegasCard from "../(detail)/Megas/Megas-Card";
import MengzhaoCard from "../(detail)/Mengzhao/Mengzhao-Card";
import ALCard from "../(detail)/A.L/A.L-Card";
import KAngelCard from "../(detail)/KAngel/KAngel-Card";
import AmeCard from "../(detail)/Ame/Ame-Card";

const CharacterCards = () => {
  return (
    <div className="p-10">
      <div className="flex flex-wrap justify-center gap-[40px]">
        <MimiCard />
        <ParunanCard />
        <FannyCard />
        <AlanaCard />
        <KomachiCard />
        <PadmanCard />
        <PaparaCard />
        <RenCard />
        <Z3000Card />
        <PandamanCard />
        <LuluCard />
        <FenCard />
        <HaiQingCard />
        <MisakiCard />
        <NardisCard />
        <JasmineCard />
        <LukaCard />
        <NancyLuCard />
        <MegasCard />
        <MengzhaoCard />
        <ALCard />
        <KAngelCard />
        <AmeCard />
      </div>
    </div>
  );
};

export default CharacterCards;
