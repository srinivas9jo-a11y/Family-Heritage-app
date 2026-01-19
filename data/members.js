export const familyData = [
  {
    id: "1",
    name: "Grandfather Name",
    photo: "/photos/grandpa.jpg",
    dob: "1945-05-15",
    birthPlace: "Varanasi",
    nakshatra: "Rohini",
    ayanam: "Dakshinayana",
    aadhaar: "XXXX-XXXX-1234",
    birthCertificate: "/docs/birth_cert_1.pdf",
    dod: "2010-10-20",
    deathCertificate: "/docs/death_cert_1.pdf",
    gallery: ["/photos/g1.jpg", "/photos/g2.jpg"],
    parentId: null, // Root of the tree
  },
  {
    id: "2",
    name: "Father Name",
    photo: "/photos/father.jpg",
    dob: "1975-08-10",
    birthPlace: "Delhi",
    nakshatra: "Ashwini",
    ayanam: "Uttarayan",
    aadhaar: "XXXX-XXXX-5678",
    parentId: "1", // Connects to Grandfather
  }
];