"use client";
import React, { useState, useEffect } from "react";
import { ListCard } from "../store/ListCard";
import "@/app/store/route";
import { getTypeBgClass } from "@/app/components/ColerType";
// import { POST } from "@/app/store/route";

export default function GuideTable() {
  type Card = {
    image: string;
    name: string;
    type: string;
    description: string;
  };

  const [data, setData] = useState<Card[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [filterType, setFilterType] = useState("");
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    type: "",
    description: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("dataStorage");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      // หาค่า id สูงสุดจาก localStorage และ ListCard
      const maxSavedId = Math.max(
        ...parsedData.map((item: { id: number }) => item.id),
        0
      );
      const maxListId = Math.max(...ListCard.map((item) => item.id), 0);

      // ถ้า ListCard มี id ใหม่ที่ localStorage ยังไม่มี
      if (maxListId > maxSavedId) {
        // กรองเอาเฉพาะ items ที่ยังไม่มีใน localStorage
        const newItems = ListCard.filter((item) => item.id > maxSavedId);

        // รวมข้อมูลและเซฟใหม่
        const updatedData = [...parsedData, ...newItems];
        setData(updatedData);
        localStorage.setItem("dataStorage", JSON.stringify(updatedData));
      } else {
        // ใช้ข้อมูลจาก localStorage
        setData(parsedData);
      }
    } else {
      // ถ้ายังไม่มีข้อมูลเลยใน localStorage
      setData(ListCard);
      localStorage.setItem("dataStorage", JSON.stringify(ListCard));
    }
  }, []);

  // บันทึกข้อมูลลง localStorage ทุกครั้งที่ data เปลี่ยน
  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("dataStorage", JSON.stringify(data));
    }
  }, [data]);

  // Open modal for adding new item
  const handleAdd = () => {
    setEditingIndex(null);
    setFormData({ image: "", name: "", type: "", description: "" });
    setIsModalOpen(true);
  };

  // Open modal for editing an item
  const handleEdit = (index: number) => {
    const itemToEdit = data[index];
    setFormData(itemToEdit);
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  // Delete an item
  const handleDelete = (index: number) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  // Handle input change in form
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save new or edited item
  const handleSave = () => {
    if (!formData.name || !formData.type || !formData.description) {
      alert("Please fill in all information completely.");
      return;
    }

    if (editingIndex === null) {
      setData([...data, formData]);
    } else {
      const updatedData = [...data];
      updatedData[editingIndex] = formData;
      setData(updatedData);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="w-full md:w-9/12 flex justify-end px-4">
        <input
          type="text"
          placeholder="Filter by type..."
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 border rounded w-full sm:w-1/2 md:w-1/3 bg-white"
        />
      </div>
      {/* Add Button */}
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition text-xl cursor-pointer"
      >
        <b>Add New Item</b>
      </button>
      <table className="shadow-2xl border-2 w-full sm:w-11/12 md:w-9/12 overflow-hidden">
        <thead className="bg-black text-white">
          <tr>
            <th className="py-3 px-6 text-center">Image</th>
            <th className="py-3 px-6 text-center">Name</th>
            <th className="py-3 px-6 text-center">Type</th>
            <th className="py-3 px-6 text-center">Description</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center divide-y divide-blue-800">
          {data
            .filter((item) =>
              item.type.toLowerCase().includes(filterType.toLowerCase())
            )
            .map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-colors duration-150"
              >
                <td className="py-3 px-6 flex justify-center">
                  <img
                    src={row.image}
                    alt={`${row.name} Icon`}
                    className="object-contain max-w-full max-h-40 w-auto h-auto"
                  />
                </td>
                <td className="py-3 px-6">{row.name}</td>
                <td
                  className={`py-3 px-6 ${getTypeBgClass(row.type)} rounded-md`}
                >
                  {row.type}
                </td>
                <td className="py-3 px-6 whitespace-pre-line">
                  {row.description}
                </td>
                <td className="py-3 px-6 space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* กล่องกรอกข้อมูล */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-xl font-bold mb-4">
              {editingIndex === null ? "Add" : "Edit"}
            </h2>
            <input
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              name="type"
              placeholder="Type"
              value={formData.type}
              onChange={handleChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
              rows={3}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
