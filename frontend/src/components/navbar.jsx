
import { NewNav } from './NewNav';
import { PatientList } from './patientlist';


export function Navbar() {
    return (
        <div>
            <NewNav />
            <div className="bg-[#f4f4f4] p-4">
                <PatientList />
            </div>

        </div>
    );
}
