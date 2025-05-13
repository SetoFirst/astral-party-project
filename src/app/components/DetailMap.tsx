"use client";
import React, { useState, useEffect } from "react";

export default function DetailMap() {
  interface Item {
    id: number | null;
    title: string;
    image: string;
    description: string;
    detail: string;
  }
  const [data, setData] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Item>({
    id: null,
    title: "",
    image: "",
    description: "",
    detail: "",
  });

  // โหลดข้อมูลจาก localStorage เมื่อเริ่มต้น
  useEffect(() => {
    const rawData = localStorage.getItem("detailMapData");
    if (rawData) {
      const savedData = JSON.parse(rawData);
      setData(savedData);
    } else {
      // ข้อมูลเริ่มต้น
      const initialData = [
        {
          id: 1,
          title: "Start Point",
          image:
            "https://static.wikitide.net/astralpartywiki/thumb/9/93/Platform_Mimi.png/70px-Platform_Mimi.png",
          description:
            "Heal 2 HP when staying on Start Point. Gain 1 star with enough coins.",
          detail:
            "The Start Point Panel is the panel in which the player starts the game. Landing on this panel will heal the player by 2HP...",
        },
        {
          id: 2,
          title: "Check Point",
          image:
            "https://static.wikitide.net/astralpartywiki/thumb/2/23/CheckPointPlatform.png/70px-CheckPointPlatform.png",
          description:
            "Heal 2 HP when staying on Check Point. Gain 1 star with enough coins.",
          detail:
            "The Check Point Panel is a panel that is present only once in all Maps...",
        },
      ];
      setData(initialData);
      localStorage.setItem("detailMapData", JSON.stringify(initialData));
    }
  }, []);

  // บันทึกข้อมูลลง localStorage เมื่อ data เปลี่ยนแปลง
  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("detailMapData", JSON.stringify(data));
    }
  }, [data]);

  // เปลี่ยนค่า input ในฟอร์ม
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // เปิดฟอร์มเพื่อเพิ่มข้อมูลใหม่
  const openAddForm = () => {
    setIsEditing(false);
    setFormData({
      id: null,
      title: "",
      image: "",
      description: "",
      detail: "",
    });
    setShowForm(true);
  };

  // เพิ่มข้อมูลใหม่
  const handleAdd = () => {
    if (!formData.title || !formData.image)
      return alert("Please fill required fields");

    const newItem = {
      ...formData,
      id: Date.now(),
    };
    const updatedData = [...data, newItem];
    setData(updatedData);
    localStorage.setItem("detailMapData", JSON.stringify(updatedData));
    setShowForm(false);
    setFormData({
      id: null,
      title: "",
      image: "",
      description: "",
      detail: "",
    });
  };

  // เปิดฟอร์มเพื่อแก้ไขข้อมูล
  const handleEdit = (item: Item) => {
    setFormData(item);
    setIsEditing(true);
    setShowForm(true);
  };

  // อัปเดตข้อมูลหลังจากแก้ไข
  const handleUpdate = () => {
    const updatedData = data.map((item) =>
      item.id === formData.id ? { ...formData } : item
    );
    setData(updatedData);
    localStorage.setItem("detailMapData", JSON.stringify(updatedData));
    setShowForm(false);
    setFormData({
      id: null,
      title: "",
      image: "",
      description: "",
      detail: "",
    });
    setIsEditing(false);
  };

  // ลบข้อมูล
  const handleDelete = (id: number) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("detailMapData", JSON.stringify(updatedData));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* ช่องค้นหา */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by Title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-lg text-lg bg-white"
        />
      </div>
      {/* ปุ่ม Add */}
      <div className="text-right mb-4">
        <button
          onClick={openAddForm}
          className="bg-green-500 text-white px-4 py-2 rounded text-xl font-bold cursor-pointer"
        >
          Add New Item
        </button>
      </div>

      {/* ฟอร์มเพิ่มหรือแก้ไขแบบ Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <h3 className="text-xl font-bold mb-4">
              {isEditing ? "Edit Item" : "Add New Item"}
            </h3>

            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="block w-full mb-3 p-2 border rounded"
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="block w-full mb-3 p-2 border rounded"
            />

            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="block w-full mb-3 p-2 border rounded"
            />

            <textarea
              name="detail"
              placeholder="Full detail"
              value={formData.detail}
              onChange={handleChange}
              className="block w-full mb-3 p-2 border rounded"
              rows={3}
            ></textarea>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
              >
                Cancel
              </button>
              {isEditing ? (
                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={handleAdd}
                  className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* แสดงรายการข้อมูล */}
      <div className="space-y-8">
        {data
          .filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-sm hover:bg-gray-100 transition duration-700 ease-in-out"
            >
              <div className="flex flex-col items-center text-center">
                <div className="font-bold text-xl">{item.title}</div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[100px] my-3"
                />
                <button className="bg-white text-xl py-2 px-4 rounded-[20px] border mb-3">
                  {item.description}
                </button>
                <div className="text-sm text-gray-700">{item.detail}</div>

                <div className="mt-4 space-x-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded text-xl font-bold cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id ?? 0)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-xl font-bold cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
