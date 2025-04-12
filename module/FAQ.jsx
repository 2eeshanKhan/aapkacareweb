"use client"
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      title: "Surgeries We Provide",
      content: `LASIK (Laser-Assisted in Situ Keratomileusis) surgery is a popular and widely performed elective surgical procedure used to correct vision problems, primarily nearsightedness (myopia), farsightedness (hyperopia), and astigmatism. A specialized laser cutting laser is used during LASIK surgery to accurately alter the shape of the cornea.
      Aapkacare Healthwill help you get the treatment with the best surgeons in Pune. For more information regarding the treatment book an appointment with our specialists.
      PRK (Photorefractive Keratectomy): PRK is a type of laser surgery similar to LASIK surgery that is used to correct common vision problems. It is an ideal option for individuals who may not be ideal candidates for LASIK due to thinner corneas, irregular corneal shape, or other corneal issues.
      Femto LASIK:It is also a type of LASIK surgery that employs femtosecond laser technology to create the corneal flap instead of using a mechanical microkeratome blade.`
    },
    {
      title: "Know If LASIK is the Right Procedure For You",
      content: `Know if LASIK surgery is the right procedure for you: 
      Consultation: Schedule an initial consultation with an ophthalmologist who specializes in refractive surgery, including LASIK. You can consult the best ophthalmologists near you with Aapkacare Health. 
      Comprehensive Eye Examination:The eye care professional will conduct a comprehensive eye examination to assess various aspects of your eye health. 
      Some other points are: 
      • Age 
      • Pupil size 
      • Corneal Thickness 
      • Medical History`,
    },
    {
      title: "Steps Prior to the LASIK Procedure",
      content: `• A thorough examination is performed by an eye specialist prior to LASIK surgery to ensure that the eyes are in good condition.
      • There are additional examinations to gauge the cornea’s curvature, the size of the pupils in both light and darkness, the eyes’ refractive error, and the cornea’s thickness.
      • The patient is required to sign a consent form attesting that they are aware of the risks, advantages, and available alternatives associated with the LASIK surgery.`,
    },
    {
      title: "LASIK Procedure",
      content: `Here is an overview of the LASIK procedure 
      1) Consultation: The LASIK process begins with a consultation with an ophthalmologist or eye surgeon. During this appointment, your eye health will be evaluated, and measurements will be taken to determine if you are suitable for LASIK surgery. 
      2) Preoperative preparations: If you are deemed a suitable candidate, you may be asked to stop wearing contact lenses for a specific period before the surgery, as they can affect the measurements of your eyes. 
      3) Surgery day: The LASIK procedure typically follows these steps: 
      • Anesthetic eye drops are applied to numb the eye, so you won't feel pain during the surgery 
      • A small corneal flap is created on the front surface of the eye. This flap can be created using a mechanical microkeratome blade or a femtosecond laser, depending on the specific LASIK technology used by the surgeon. 
      • An excimer laser is used to reshape the underlying corneal tissue based on your prescription to correct your vision. 
      • After the corneal tissue is reshaped, the corneal flap is repositioned, and it adheres naturally without the need for stitches. 
      4) Recovery: After LASIK, you'll likely experience improved vision almost immediately, but it can take a few days to weeks for your vision to fully stabilise. Your surgeon will provide instructions for post-operative care, including using prescribed eye drops to facilitate healing and prevent infection. 
      5) Follow-up appointments: Regular post-operative check-ups are necessary to monitor the healing process and ensure that your vision is improving as expected. 
      LASIK surgery is generally safe and effective for many people, but it's not suitable for everyone. Many factors like the thickness and shape of your cornea, dryness of your eyes and your overall eye health can affect your eligibility for the procedure. It's essential to have a comprehensive consultation with an eye care professional to determine if LASIK is right for you. 
      We at, Aapkacare Health will guide you to your LASIK surgery treatment and will provide you a complete information along with one of the best after-surgery follow-ups. For more information regarding the treatment book an appointment with Aapkacare Health specialists.`,
    },
    {
      title: "Recommendations after LASIK Surgery",
      content: `After LASIK surgery, there are several important post-operative considerations and care instructions to ensure a smooth recovery and the best possible outcome. Here are some key points to keep in mind after 
      LASIK: 
      • Follow Post-Operative Instructions: Your surgeon will provide specific post-operative instructions that you 
      should follow daily. These instructions may include guidelines on using prescribed eye drops, avoiding certain activities, and attending follow-up appointments. 
      • Rest and Relaxation: After the surgery, it's essential to take proper rest to allow your eyes to recover. Some patients may experience mild discomfort, tearing, and light sensitivity immediately after the procedure. These symptoms usually improve within a few hours. 
      • Avoid Rubbing Your Eyes: It's crucial to avoid rubbing or touching your eyes, as this can disrupt the healing process and increase the risk of infections. 
      • Use Prescribed Eye Drops: Your surgeon will provide you with a specific regimen for using eye drops to reduce inflammation, prevent infection, and promote healing. Follow the schedule and dosage instructions carefully. 
      • Limit Strenuous Activities: Avoid strenuous physical activities, including exercise, for a specified period, usually about one to two weeks, depending on your surgeon's recommendations. This helps prevent eye strain and the risk of injury. 
      • Attend Follow-Up Appointments: You will have several post-operative check-up appointments with your 
      surgeon to monitor your healing progress and assess the stability of your vision correction. Attend these appointments as scheduled. Aapka Care health specialists will help you with your follow-up appointments.`,
    },
    {
      title: "The Approach to LASIK Surgery by Aapkacare Health",
      content: `If you are suffering from persistent refractive error-related discomfort in your eyes and having issues related to your vision. Then Aapkacare Health is here to help you. We will appoint you with the best surgeons near you and will make your LASIK surgery a hassle-free one. Your care will be arranged before, during, and after the procedure by our eye surgeons at an affordable price.`,
    },
  ];
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (
    <>
    <div className="w-full max-w-3xl md:mx-14 mx-auto p-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-300 rounded-lg mb-2">
          <button
            className="w-full flex justify-between items-center p-4 text-gray-800 font-medium"
            onClick={() => toggleAccordion(index)}
          >
            {faq.title}
            <ChevronRight
              className={`transform transition-transform ${
                openIndex === index ? "rotate-90" : ""
              }`}
            />
          </button>
          {openIndex === index && faq.content && (
            <div className="p-4 text-gray-600 bg-gray-100 rounded-b-lg">
              {faq.content.split("\n").map((line, i) => (
                <p key={i} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </>
    );
}

export default FAQ;
