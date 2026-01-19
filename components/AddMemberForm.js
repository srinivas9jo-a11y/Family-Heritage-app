// components/AddMemberForm.js
export default function AddMemberForm() {
  return (
    <form className="p-6 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
      <h2 className="col-span-full text-xl font-bold border-b pb-2">Personal Details</h2>
      
      <input type="text" placeholder="Full Name" className="border p-2 rounded" required />
      <input type="text" placeholder="Aadhaar Card Number" className="border p-2 rounded" />
      
      <div className="flex flex-col">
        <label className="text-sm text-gray-500">D.O.B. Certificate</label>
        <input type="file" className="text-sm" />
      </div>

      <h2 className="col-span-full text-xl font-bold border-b pb-2 mt-4">Lineage & Relationships</h2>
      <select className="border p-2 rounded"><option>Select Father</option></select>
      <select className="border p-2 rounded"><option>Select Mother</option></select>
      <input type="text" placeholder="Spouse Name" className="border p-2 rounded" />

      <h2 className="col-span-full text-xl font-bold border-b pb-2 mt-4">Birth/Death Details</h2>
      <input type="date" placeholder="Date of Birth" className="border p-2 rounded" />
      <input type="time" placeholder="Time of Birth" className="border p-2 rounded" />
      <input type="text" placeholder="Place of Birth" className="border p-2 rounded" />
      <input type="text" placeholder="Nakshatra" className="border p-2 rounded" />
      <input type="text" placeholder="Ayanam" className="border p-2 rounded" />
      <input type="date" placeholder="Date of Death (if applicable)" className="border p-2 rounded" />

      <button className="col-span-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
        Save to Heritage Tree
      </button>
    </form>
  );
}