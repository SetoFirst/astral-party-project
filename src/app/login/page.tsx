import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">เข้าสู่ระบบ</h2>
        <form action="/api/auth/login" method="POST">
          <input
            type="text"
            name="username"
            placeholder="ชื่อผู้ใช้"
            required
            className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring"
          />
          <input
            type="password"
            name="password"
            placeholder="รหัสผ่าน"
            required
            className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            เข้าสู่ระบบ
          </button>
        </form>
        <p className="mt-4 text-center">
          ยังไม่มีบัญชี?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            สมัครสมาชิก
          </Link>
        </p>
      </div>
    </div>
  );
}
