"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Forgot Password Error:", errorText);
        alert("เกิดข้อผิดพลาดในการส่งอีเมล");
        return;
      }

      const result = await res.json();
      alert(result.message || "กรุณาตรวจสอบอีเมลของคุณ");
    } catch (error) {
      console.error("Fetch error:", error);
      alert("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6 transition-all duration-300 hover:shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          ลืมรหัสผ่าน
        </h2>
        <p className="text-center text-sm text-gray-600">
          กรุณากรอกอีเมลของคุณ เพื่อรับลิงก์เปลี่ยนรหัสผ่าน
        </p>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold rounded-lg shadow-md hover:from-yellow-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition cursor-pointer"
          >
            ส่งลิงก์รีเซ็ตรหัสผ่าน
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            <Link
              href="/login"
              className="text-yellow-500 hover:text-yellow-700 font-medium"
            >
              ← กลับไปเข้าสู่ระบบ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
