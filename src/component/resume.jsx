import { edu, experience } from "../data/expertData";
import Experience from "../pages/Experience";


  const Resume = () => {
    return (
      <div className="bg-black text-white p-8">
        <h2 className="text-2xl font-bold mb-6 pl-4">Education</h2>
        <div className="">
          {edu.map((edu, index) => (
             <div className="border-l-2 border-gray-600 ">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 "></div>
            <div key={index} className="pl-4 mb-4">
                <div>
                    <h3 className="text-xl font-semibold m-0">{edu.school}</h3>
                    <p className="text-gray-400 mb-1">{edu.year}</p>
                    <p className="mb-1">{edu.field}</p>
                    {edu.gpa && <p>GPA: <span className="font-semibold">{edu.gpa}</span></p>}
                </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Resume;