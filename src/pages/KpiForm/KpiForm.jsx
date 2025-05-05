import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KpiForm.css';

function KpiForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    priority: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="kpi-form-container">
        <div className="form-wrapper">
          <div className="form-header">
            <h1 className="text-2xl font-bold mb-4 text-center">Create New KPI</h1>
            <p className="text-center">Track your key performance indicators effectively</p>
          </div>
          
          <form className="kpi-form bg-white p-8 rounded-lg shadow-lg w-96" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter KPI name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mt-4">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter KPI description"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mt-4">Priority</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <button type="submit" className="submit-btn mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Create KPI
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default KpiForm;