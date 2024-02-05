import { useState, useEffect } from "react"
import axios from "axios"
import { FaVolumeUp } from "react-icons/fa";

let count = 0;
export function PatientList() {
    const [patientsdata, setPatientsdata] = useState([]);
    const [speechSynthesis, setSpeechSynthesis] = useState();

    useEffect(() => {

        async function getData() {
            try {
                const response = await axios.get('http://localhost:3000/getdata');
                setPatientsdata(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getData();

        const synth = window.speechSynthesis;
        if (synth) {
            setSpeechSynthesis(synth);
        }
    }, [patientsdata]);

    const speak = (text) => {
        if (speechSynthesis) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        }
    };


    return (
        <div className="grid grid-cols-1 gap-8">
          {patientsdata
            .filter((patients) => !patients.completed) // Show only when patients.completed is false
            .map((patients, index) => (
              <div key={index} className="w-full">
                <div className="rounded-md overflow-hidden shadow-md bg-white p-4">
                  <h1 className="text-lg font-semibold mb-2">
                    {patients.name}
                    <button className="ml-2 text-blue-500" onClick={() => speak(patients.name)}>
                      <FaVolumeUp />
                    </button>
                  </h1>
                  <div className="flex justify-center items-center mb-2">
                    <span className="text-gray-600">Age:</span>
                    <span className="text-gray-800 font-semibold ml-2">{patients.age}</span>
                  </div>
                  <div className="flex justify-center items-center mb-2">
                    <span className="text-gray-600">Tests:</span>
                    <span className="text-gray-800 font-bold ml-2">{patients.tests}</span>
                  </div>
                  <p className={`${patients.completed ? 'text-green-500' : index === 0 ? 'text-blue-500' : 'text-red-600'} font-semibold`}>
                    {patients.completed ? "Tests completed" : index === 0 ? "In Progress" : "Waiting No. " + index}
                  </p>
                </div>
              </div>
            ))}
        </div>
      );


}
