// app/doctor/[id]/metadata.js
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/module/firebaseConfig";

export async function generateMetadata({ params }) {
  const doctorId = params.id;

  const q = query(collection(db, "AllDoctors"), where("uId", "==", doctorId));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return {
      title: "Doctor Not Found | Aapka Care",
      description: "The doctor you're looking for could not be found.",
    };
  }

  const doc = snapshot.docs[0].data();

  return {
    title: `${doc.name} | ${doc.speciality} - Aapka Care`,
    description: doc.about || `Consult with ${doc.name}, a trusted ${doc.speciality}.`,
    openGraph: {
      title: `${doc.name} | ${doc.speciality}`,
      description: doc.about || `Find more about ${doc.name}`,
      url: `https://aapkacarewebsite.vercel.app/doctor/${doctorId}`,
      siteName: "Aapka Care",
      images: [
        {
          url: doc.imgUrl || "/images/noimg.webp",
          width: 800,
          height: 600,
          alt: doc.name,
        },
      ],
      type: "website",
    },
  };
}
