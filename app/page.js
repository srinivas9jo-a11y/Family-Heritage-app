import { familyData } from '../data/members';

export default function Home() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Our Family Heritage</h1>
      
      {/* Simple Tree Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {familyData.map((member) => (
          <div key={member.id} className="bg-white p-6 rounded-xl shadow-lg w-64 border-t-4 border-blue-500">
            <img src={member.photo} className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-gray-200" />
            <h2 className="text-xl font-semibold text-center mt-4">{member.name}</h2>
            
            <div className="mt-4 text-sm space-y-2">
              <p><strong>DOB:</strong> {member.dob}</p>
              <p><strong>Nakshatra:</strong> {member.nakshatra}</p>
              <p><strong>Aadhaar:</strong> {member.aadhaar}</p>
            </div>

            <button className="mt-4 w-full bg-blue-50 text-blue-600 font-medium py-2 rounded hover:bg-blue-100 transition">
              View All Documents
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}