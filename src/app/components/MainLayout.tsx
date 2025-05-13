"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MainLayout = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  // ดึงข้อมูลผู้ใช้จาก API
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/me");
      if (res.ok) {
        const data = await res.json();
        setEmail(data.email); // ดึง email จาก database
      } else {
        setEmail(null);
        router.push("/login"); // ถ้าไม่พบ session, redirect ไป login
      }
    };

    fetchUser();
  }, [router]);

  const navItems = [
    { label: "Characters", path: "/" },
    { label: "Cards", path: "/cards" },
    { label: "Maps", path: "/map" },
  ];

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Logout failed:", errorData);
        alert("ออกจากระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
        return;
      }

      setEmail(null);

      // Force reload to clear any cached state
      router.push("/login");
      router.refresh(); // optional
    } catch (error) {
      console.error("Error during logout:", error);
      alert("เกิดข้อผิดพลาดในการออกจากระบบ");
    }
  };

  return (
    <div className="bg-[#555555] w-full">
      <div className="text-white p-4 flex justify-between items-center max-w-screen-xl mx-auto w-full">
        {/* Empty space for alignment */}
        <div></div>

        {/* Center: Navigation Items */}
        <div className="flex gap-4 items-center">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="hover:text-pink-500 text-white text-xl cursor-pointer rounded px-4 py-2"
              onClick={() => router.push(item.path)}
              aria-label={`Navigate to ${item.label} page`}
            >
              <b>{item.label}</b>
            </button>
          ))}
        </div>

        {/* Right: Email & Logout */}
        <div className="flex flex-col items-center text-sm md:text-base">
          {email && (
            <span className="text-white font-medium mb-1 text-xl">{email}</span>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300 cursor-pointer text-xl"
          >
            <b>Logout</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
