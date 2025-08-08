// src/components/ApplyModal.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function ApplyModal({ jobTitle, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: jobTitle || "",
  });
  const [files, setFiles] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      data.append(key, value)
    );
    Object.entries(files).forEach(([key, file]) => data.append(key, file));

    try {
      const res = await fetch("http://localhost:5000/apply-job", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (res.ok) {
        setStatus("Application submitted successfully ✅");
        setFormData({ name: "", email: "", phone: "", jobTitle: jobTitle || "" });
        setFiles({});
      } else {
        setStatus(result.message || "Failed to submit ❌");
      }
    } catch (err) {
      setStatus("Error connecting to server ❌");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">Apply for {jobTitle}</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          {/* File uploads */}
          <label className="block font-medium mt-2">Clear Passport Copy (Front)</label>
          <input type="file" name="passportFront" onChange={handleFileChange} required />

          <label className="block font-medium">Clear Passport Copy (Back)</label>
          <input type="file" name="passportBack" onChange={handleFileChange} required />

          <label className="block font-medium">Studio Passport Size Photo</label>
          <input type="file" name="photo" onChange={handleFileChange} required />

          <label className="block font-medium">Education Certificate</label>
          <input type="file" name="educationCert" onChange={handleFileChange} required />

          <label className="block font-medium">Experience Certificate</label>
          <input type="file" name="experienceCert" onChange={handleFileChange} required />

          <label className="block font-medium">Aadhar Card</label>
          <input type="file" name="aadharCard" onChange={handleFileChange} required />

          <label className="block font-medium">PAN Card</label>
          <input type="file" name="panCard" onChange={handleFileChange} required />

          <label className="block font-medium">Birth Certificate</label>
          <input type="file" name="birthCert" onChange={handleFileChange} required />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        {status && <p className="mt-3 text-center text-sm">{status}</p>}
      </motion.div>
    </div>
  );
}
