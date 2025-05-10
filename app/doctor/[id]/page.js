import { doc, getDoc } from "firebase/firestore";
import { db } from "@/module/firebaseConfig";
import DoctorDetails from "@/components/Doctors/DoctorDetails";

// Utility function to fetch doctor by ID
async function getDoctorById(id) {
  const ref = doc(db, "AllDoctors", id);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

// ✅ Metadata function (runs on the server)
export async function generateMetadata({ params }) {
  const { id } = await params;
  const doctor = await getDoctorById(id);

  if (!doctor) {
    return {
      title: "Doctor Not Found",
      description: "The requested doctor profile does not exist.",
    };
  }
  
  return {
    title: doctor.name,
    description: doctor.about || `Profile of ${doctor.name}`,
    openGraph: {
      title: doctor.name,
      description: doctor.about,
      url: `https://yourdomain.com/doctor/${id}`,
      images: [
        {
          url: doctor.imgUrl || "https://yourdomain.com/images/noimg.webp",
          width: 800,
          height: 600,
          alt: doctor.name,
        },
      ],
    },
  };
}

// ✅ Page component
export default async function DoctorPage({ params }) {
  const { id } = await params;
  return <DoctorDetails id={id} />;
}


