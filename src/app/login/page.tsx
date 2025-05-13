"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Login Error:", errorText);
        alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
        return;
      }

      const result = await res.json();

      if (result.success) {
        window.location.href = result.redirectUrl;
      } else {
        alert(result.message || "ไม่สามารถเข้าสู่ระบบได้");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6 transition-all duration-300 hover:shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          เข้าสู่ระบบ
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              อีเมล
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              รหัสผ่าน
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition cursor-pointer"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">
            ยังไม่มีบัญชี?
            <Link
              href="/register"
              className="text-blue-500 hover:text-blue-700 ml-1 font-medium"
            >
              สมัครสมาชิก
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              ลืมรหัสผ่าน?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
