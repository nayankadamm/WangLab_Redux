"use client";
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSetHistMutation, useGetHistQuery } from '../redux/HistApi';

const MyComponent = () => {
  const [setHistMutation, { isLoading, isError, error }] = useSetHistMutation();
  const [form, setForm] = useState({
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    multipleEquipments: [], // Ensure this matches what the backend expects
    otherEquipment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const multipleHandleChange = (e) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setForm({ ...form, multipleEquipments: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting form data:", form); // Log form data
      await setHistMutation({ ...form, equipment: form.multipleEquipments.join(', ') }).unwrap(); // Ensure the equipment is sent correctly
      setForm({
        name: "",
        date: "",
        startTime: "",
        endTime: "",
        multipleEquipments: [],
        otherEquipment: "",
      });
      alert('Data submitted successfully');
    } catch (err) {
      console.error('Failed to submit the form:', err); // Log the error
      alert('Failed to submit the form');
    }
  };

  return (
    <Container className='bg-black text-white mt-4 pb-2 rounded shadow'>
      <section>
        <h3 className="text-xl font-semibold font-roboto mb-4">
          Reserve Lab Room and Equipment
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-roboto">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-roboto">Pick a Date</label>
            <input
              type="date"
              name="date"
              className="w-full p-2 border rounded"
              min="2024-01-01"
              max="2025-12-31"
              value={form.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-roboto">Start Time</label>
            <input
              type="time"
              name="startTime"
              className="w-full p-2 border rounded"
              value={form.startTime}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-roboto">End Time</label>
            <input
              type="time"
              name="endTime"
              className="w-full p-2 border rounded"
              value={form.endTime}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-roboto">Select Equipment</label>
            <select
              name="multipleEquipments"
              className="w-full p-2 border rounded text-black"
              value={form.multipleEquipments}
              onChange={multipleHandleChange}
              multiple
            >
              <option value="High-Speed Camera">A - High-Speed Camera</option>
              <option value="Glove Box">B - Glove Box</option>
              <option value="Chamber">C - Chamber</option>
              <option value="1st Power Supply">D - 1st Power Supply</option>
              <option value="2nd Power Supply">E - 2nd Power Supply</option>
              <option value="Compressing Machine">F - Compressing Machine</option>
              <option value="Others">G - Others</option>
            </select>
          </div>
          <div>
            <label className="block font-roboto">Specify Other Equipment</label>
            <input
              type="text"
              name="otherEquipment"
              className="w-full p-2 border rounded"
              placeholder="Specify equipment"
              value={form.otherEquipment}
              onChange={handleChange}
            />
          </div>
          <div className='flex justify-center'>
          <button
            type="submit"
            className="p-2 bg-white text-black rounded font-roboto w-32 flex justify-center "
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
          </div>
          
          {isError && <p className="text-red-500">Error: {error.message}</p>}
        </form>
      </section>
    </Container>
  );
};

export default MyComponent;
