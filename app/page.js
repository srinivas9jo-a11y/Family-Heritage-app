"use client";
import React, { useState, useEffect } from 'react';
import { PlusCircle, User, Calendar, MapPin, Star, Trash2 } from 'lucide-react';

export default function FamilyApp() {
  const [members, setMembers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', dob: '', dod: '', birthPlace: '', nakshatra: '', 
    ayanam: '', aadhaar: '', photo: null
  });

  // Load data from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('familyTreeData');
    if (saved) setMembers(JSON.parse(saved));
  }, []);

  // Save to LocalStorage whenever members change
  useEffect(() => {
    localStorage.setItem('familyTreeData', JSON.stringify(members));
  }, [members]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addMember = (e) => {
    e.preventDefault();
    const newMember = { ...formData, id: Date.now() };
    setMembers([...members, newMember]);
    setFormData({ name: '', dob: '', dod: '', birthPlace: '', nakshatra: '', ayanam: '', aadhaar: '' });
    setShowForm(false);
  };

  const deleteMember = (id) => {
    setMembers(members.filter(m => m.id !== id));
  };

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Family Archive</h1>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <PlusCircle size={20} /> Add Member
          </button>
        </header>

        {/* Dynamic Form */}
        {showForm && (
          <form onSubmit={addMember} className="bg-white p-6 rounded-xl shadow-md mb-10 grid grid-cols-1 md:grid-cols-2 gap-4 border border-blue-100">
            <input name="name" placeholder="Full Name" onChange={handleInputChange} className="border p-2 rounded" required />
            <input name="dob" type="date" placeholder="Date of Birth" onChange={handleInputChange} className="border p-2 rounded" />
            <input name="birthPlace" placeholder="Birth Place" onChange={handleInputChange} className="border p-2 rounded" />
            <input name="nakshatra" placeholder="Nakshatra" onChange={handleInputChange} className="border p-2 rounded" />
            <input name="ayanam" placeholder="Ayanam" onChange={handleInputChange} className="border p-2 rounded" />
            <input name="aadhaar" placeholder="Aadhaar Card Number" onChange={handleInputChange} className="border p-2 rounded" />
            <div className="md:col-span-2 flex gap-2">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg">Save Member</button>
              <button type="button" onClick={() => setShowForm(false)} className="bg-gray-200 px-6 py-2 rounded-lg">Cancel</button>
            </div>
          </form>
        )}

        {/* Tree Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((m) => (
            <div key={m.id} className="bg-white rounded-xl shadow-sm border p-5 relative group">
              <button 
                onClick={() => deleteMember(m.id)}
                className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 transition"
              >
                <Trash2 size={18} />
              </button>
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={40} className="text-blue-500" />
              </div>
              <h2 className="text-xl font-bold text-center text-slate-800">{m.name}</h2>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2"><Calendar size={14}/> {m.dob}</div>
                <div className="flex items-center gap-2"><MapPin size={14}/> {m.birthPlace}</div>
                <div className="flex items-center gap-2"><Star size={14}/> {m.nakshatra} ({m.ayanam})</div>
                <div className="bg-slate-100 p-2 rounded text-[10px] font-mono">ID: {m.aadhaar}</div>
              </div>
            </div>
          ))}
        </div>

        {members.length === 0 && !showForm && (
          <div className="text-center py-20 text-slate-400">
            <p>No family members added yet. Click "Add Member" to start.</p>
          </div>
        )}
      </div>
    </main>
  );
}
