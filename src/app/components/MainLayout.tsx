"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MainLayout = () => {
  const router = useRouter();

  const [username, setUsername] = useState<string | null>(null);

  // ดึงชื่อผู้ใช้จาก cookie
  useEffect(() => {
    const cookies = document.cookie.split(";").reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {} as Record<string, string>);

    const user = cookies["user_name"];
    if (user) {
      setUsername(user);
    }
  }, []);

  const navItems = [
    { label: "Characters", path: "/" },
    { label: "Cards", path: "/cards" },
    { label: "Maps", path: "/map" },
  ];

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout");
    if (res.ok) {
      setUsername(null);
      router.push("/login");
    }
  };

  return (
    <div className="bg-[#555555]">
      <div className="text-white p-4 flex flex-wrap justify-center gap-4 items-center">
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

        {/* แสดงปุ่มตามสถานะ login */}
        {!username ? (
          <button
            className="hover:text-pink-500 text-white text-xl text-center cursor-pointer rounded px-4 py-2"
            onClick={() => router.push("/login")}
            aria-label="Login"
          >
            <b>Login</b>
          </button>
        ) : (
          <>
            <span className="text-white text-xl self-center">
              <b>{username}</b>
            </span>

            <button
              onClick={handleLogout}
              className="hover:text-red-500 text-white text-xl cursor-pointer rounded px-4 py-2 border border-white hover:border-red-500 transition-colors"
            >
              <b>Logout</b>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
