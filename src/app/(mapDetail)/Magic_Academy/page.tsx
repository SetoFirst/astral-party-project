"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  ListMagic_AcademyOutside,
  ListMagic_AcademyLibrary,
} from "@/app/store/ListPlatform";

export default function Magic_Academy() {
  const router = useRouter();
  const BackClick = () => router.push("/map");

  // State สำหรับเก็บ tab ปัจจุบัน
  const [activeTab, setActiveTab] = useState<"up" | "down">("up");

  // เลือกแพลตฟอร์มตาม tab
  const platforms =
    activeTab === "up" ? ListMagic_AcademyOutside : ListMagic_AcademyLibrary;

  // เลือกรูปภาพตาม tab
  const imageSrc =
    activeTab === "up"
      ? "https://static.wikitide.net/astralpartywiki/thumb/9/9d/Layout_Magic_Academy.png/500px-Layout_Magic_Academy.png"
      : "https://static.wikitide.net/astralpartywiki/thumb/c/c0/Layout_Magic_Academy_2.png/500px-Layout_Magic_Academy_2.png";

  return (
    <div className="bg-gradient-to-tr from-[#be185d]/50 via-[#f472b6]/50 to-[#fbcfe8]/50 mx-4 mt-4 min-h-screen flex flex-col items-center">
      {/* Header with Back Button */}
      <div className="w-full flex justify-end pr-10 pt-10">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-4xl cursor-pointer"
          onClick={BackClick}
          aria-label="Go back to home page"
        >
          Back
        </button>
      </div>

      {/* Content Container */}
      <div className="text-center bg-gray-700 w-full max-w-4xl p-8 rounded-lg shadow-lg">
        {/* Title */}
        <div className="pb-10">
          <p className="text-4xl text-white">Magic Academy</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setActiveTab("up")}
            className={`px-4 py-2 cursor-pointer rounded-md ${
              activeTab === "up"
                ? "bg-blue-600 text-white"
                : "bg-gray-500 text-gray-200"
            }`}
          >
            Bridge up
          </button>
          <button
            onClick={() => setActiveTab("down")}
            className={`px-4 py-2 cursor-pointer rounded-md ${
              activeTab === "down"
                ? "bg-blue-600 text-white"
                : "bg-gray-500 text-gray-200"
            }`}
          >
            Bridge down
          </button>
        </div>

        {/* Image and Table Wrapper */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image */}
          <img
            src={imageSrc}
            alt="Magic Academy Layout"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />

          {/* Table */}
          <table className="shadow-2xl border-2 border-white overflow-hidden text-center text-white text-xl w-full md:w-auto">
            <thead>
              <tr>
                <th colSpan={2} className="p-2">
                  Platform
                </th>
                <th className="p-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((platform) => (
                <tr
                  key={platform.id}
                  className="bg-gradient-to-r from-[#0e7490] via-[#3b82f6] to-[#4f46e5]"
                >
                  <td className="p-2">
                    <img
                      src={platform.image}
                      alt={`${platform.platformName} Platform`}
                      className="inline-block h-8 w-8 object-contain"
                    />
                  </td>
                  <td className="p-2">{platform.platformName}</td>
                  <td className="p-2">{platform.quantity}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-orange-100 text-black font-bold">
                <td colSpan={2} className="p-2">
                  Total
                </td>
                <td className="p-2">
                  {platforms.reduce(
                    (total, platform) => total + platform.quantity,
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
