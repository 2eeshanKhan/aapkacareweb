import { useState } from "react";
import { ChevronRight } from "lucide-react";

const FAQproctology = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      title: "Types of surgery for piles in Pune ",
      content: `Internal Hemorrhoids: These are located inside the rectum and are generally painless, but they can cause bleeding during bowel movements. 
      External Hemorrhoids: These form under the skin around the anus and can be painful and itchy. Sometimes, a blood clot can form within an external hemorrhoid, causing severe pain. `
    },
    {
      title: "Recommendations after piles surgery ",
      content: `Patients may be released from the hospital a day or two after having surgery for piles or hemorrhoids, which is typically performed in a day surgery center. One to two weeks after piles surgery, you can resume your normal activities, but it's advised that you avoid strenuous activities and avoid heavy lifting at that time. To prevent pain or bleeding while passing stools until the area around the anal sphincter heals, you may be advised to take stool softeners. Here are some recovery tips: 

      • Keep your stools soft so they pass easily since this will help you avoid piles the best. 
      • Consume fibre-rich meals. Eat more whole grains, fruits, and veggies. By doing this, the stool will soften and thicken, avoiding straining that could lead to piles. To avoid issues with gas, progressively incorporate more fibre into your diet. 
      • Drink lots of water. To keep stools soft, drink six to eight glasses of water daily in addition to other liquids and avoid alcohol. 
      • Go for fibre supplements. The average person's diet falls short of the 20 to 30 grams of fibre per day that are advised. Studies have demonstrated that over-the-counter fibre supplements like psyllium (Metamucil) or methylcellulose (Citrucel) reduce piles symptoms all around and reduce bleeding. 
      • Take it easy. The lower rectum's veins are under more strain when you are trying to pass a stool while squeezing and holding your breath. 
      • Exercise. Staying active can help prevent constipation and ease the pressure on veins that might develop from prolonged standing or sitting. Exercise can also aid in weight loss, which may aid in the treatment of your piles.
      • Limit your sitting time. Too much time spent sitting, especially on the toilet, might put more strain on the anal veins. 
      • Get the right medication. Your doctor might recommend over-the-counter lotions, ointments, and suppositories if the pain from your piles is only modest. Witch hazel, hydrocortisone, and lidocaine are some of the components in these medications that temporarily ease pain and irritation. Avoid using over-the-counter steroid cream for longer than a week unless your doctor specifically instructs you to do so. 
      
      
      What possible complications can you expect following piles surgery? 
      Patients heal well from the piles operation, and the surgery is rather common. However, a few uncommon issues might be as follows: 
      
      
      • Infection at the location of surgery. 
      • Discomfortable stool-passing 
      • Affected organs, nerves, or nearby vessels may sustain damage. 
      • Faecal incontinence as a result of sphincter muscle weakness. 
      • Bleeding without control. 
      • Recurrence`,
    },
    {
      title: "Expert Doctors ",
      content: `Complication of untreated piles
      
      • Piles can lead to anemia, which is a condition in which your body lacks enough healthy red blood cells to transport oxygen to your cells. Internal hemorrhoids may become strangulated (blood supply to the area gets cut), which can be extremely painful. 
      • A clot may occasionally develop in the hemorrhoid (thrombosed hemorrhoid). It is not harmful, although it can be very uncomfortable and sometimes needs to be lanced and drained. `,
    },
    {
      title: "Piles treatment procedures ",
      content: `Your doctor might suggest one of the various minimally invasive piles procedures available if you have persistent bleeding or uncomfortable hemorrhoids. These procedures can normally be carried out with an anaesthetic in your hospital emergency room or another outpatient facility. 
      
      Rubber band ligation: To stop the circulation of internal hemorrhoids, the doctor wraps one or two thin rubber bands around the base of the growth. Within a week, hemorrhoid dries out and peels off. An annoying side effect of hemorrhoid banding is bleeding, which may start two to four days after the piles treatment but is rarely severe. Sometimes, more severe issues can appear. 
      
      Injection (sclerotherapy): Your doctor shrinks the hemorrhoid tissue by injecting a chemical solution into it. Although the injection is not painful, it might not be as effective as rubber band ligation. 
      
      Coagulation (infrared, laser): The use of heat, infrared light, or lasers is a coagulation technique. They induce internal hemorrhoids that are tiny and bleeding to stiffen and shrink.`,
    },
    {
      title: "Categorisation of the piles ",
      content: `The grade of the piles is the criteria for providing a particular surgery. The price rises if the condition is exceedingly severe and cannot be treated with minimally invasive piles surgery. Following is an explanation of the various severity grades of piles to help you better understand how much the cost depends on this factor: 
      
      Grade I: In grade I the symptoms or causes include only bleeding, and no prolapse. 
      
      Grade II: Grade II causes include prolapse but spontaneous reduction. 
      
      Grade III: Prolapsed but has to be pushed inside. 
      
      Grade IV: In grade IV it remains prolapsed.`,
    }
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

export default FAQproctology;
