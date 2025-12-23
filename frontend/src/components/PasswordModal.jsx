import React, { useState } from "react";

export default function PasswordModal({ show = false, onClose = () => {} }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (password === "secret") {
      setError("");
      onClose();
    } else {
      setError("Incorrect password");
    }
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded shadow max-w-sm w-full">
        <h3 className="text-lg font-semibold mb-2">Enter Password</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="w-full border p-2 rounded mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {error && <div className="text-sm text-red-600 mb-2">{error}</div>}
          <div className="flex gap-2 justify-end">
            <button type="button" className="px-3 py-1" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
