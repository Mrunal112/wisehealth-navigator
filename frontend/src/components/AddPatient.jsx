import { useState } from 'react';
import axios from 'axios';
import { NewNav } from './NewNav';
import './new.css'

export function AddPatient() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [tests, setTests] = useState('');
    const [patientName, setPatientName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/addpatient', {
                name: name,
                age: age,
                tests: tests
            });

            console.log(response.data.msg);
            alert("Patient added successfully");
        } catch (error) {
            // console.error('Error adding patient:', error);
            alert("Invalid Input");
        }
    };

    const handleUpdateInfo = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put('http://localhost:3000/updateinfo', {
                name: patientName
            });

            console.log(response.data.msg);
            if (response.data.msg === 'Patient updated successfully') {
                alert("Patient info updated successfully");
            }else{
                alert("Failed to update patient info");
            }
        } catch (error) {
            console.error('Error updating patient info:', error);
            alert("Failed to update patient info");
        }
    };

    return (
        <div>
            <NewNav />
            <div className="max-w-4xl mx-auto pt-8">
                {/* Card for updating patient info */}
                <div className="bg-gray-100 rounded-lg shadow-lg p-8 mb-8">
                    <h1 className="text-2xl font-bold leading-tight text-gray-900">
                        Update Patient Info
                    </h1>
                    <form onSubmit={handleUpdateInfo} className="space-y-6">
                        <div>
                            <label htmlFor="patientName" className="block mb-2 text-sm font-medium text-gray-900">Patient's Name</label>
                            <input type="text" name="patientName" id="patientName" value={patientName} onChange={(e) => setPatientName(e.target.value)} className="input-field" placeholder="Enter patient's name" required />
                        </div>
                        <button onClick={handleUpdateInfo} className="btn-primary">Mark Test as Complete</button>
                    </form>
                </div>

                {/* Card for adding a new patient */}
                <div className="bg-gray-100 rounded-lg shadow-lg p-8">
                    <h1 className="text-2xl font-bold leading-tight text-gray-900">
                        Add Patient
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="input-field" placeholder="Enter patient name" required />
                        </div>
                        <div>
                            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Age</label>
                            <input type="text" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} className="input-field" placeholder="Enter patient age" required />
                        </div>
                        <div>
                            <label htmlFor="tests" className="block mb-2 text-sm font-medium text-gray-900">Tests</label>
                            <input type="text" name="tests" id="tests" value={tests} onChange={(e) => setTests(e.target.value)} className="input-field" placeholder="Enter tests to be conducted" required />
                        </div>
                        <button onClick={handleSubmit} className="btn-primary">Add Patient</button>
                    </form>
                </div>
            </div>
        </div>
    );
}