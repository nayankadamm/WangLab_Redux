"use client";
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useState } from 'react';


const MyComponent=()=> {

  const [form, setForm] = useState({
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    multipleEquipments: [],
    otherEquipment: "",
  }
    
  );
  const handleChange =(e)=>{

    setForm({...form, [e.target.name]:e.target.value});
    
  }
  const multipleHandleChange =(e)=>
    {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setForm({...form, multipleEquipments:value});
  }
   
  return (
    <Container>

   
       <section>
        <h3 className="text-xl font-semibold font-roboto mb-4">
          Reserve Lab Room and Equipment
        </h3>
        <form className="space-y-4" >
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
              className="w-full p-2 border rounded"
              value={form.multipleEquipments}
              onChange={multipleHandleChange}
              multiple
            >
              <option value="High-Speed Camera">A - High-Speed Camera</option>
              <option value="Glove Box">B - Glove Box</option>
              <option value="Chamber">C - Chamber</option>
              <option value="1st Power Supply">D - 1st Power Supply</option>
              <option value="2nd Power Supply">E - 2nd Power Supply</option>
              <option value="Compressing Machine">
                F - Compressing Machine
              </option>
              <option value="Others">G - Others</option>
            </select>
          </div>
          {(
            <div>
              <label className="block font-roboto">
                Specify Other Equipment
              </label>
              <input
                type="text"
                name="otherEquipment"
                className="w-full p-2 border rounded"
                placeholder="Specify equipment"
               
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded font-roboto"
          >
            Submit
          </button>
        </form>
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold font-roboto mb-4">
            Reserved Slots
          </h3>
          
        </div>
      </section>
      </Container>
  );
}

export default MyComponent;
