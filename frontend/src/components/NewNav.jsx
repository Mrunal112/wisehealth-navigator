import { Link } from 'react-router-dom';

export function NewNav() {
    return <div className="bg-[#25ced1] p-4 flex justify-between items-center rounded-full">
        <div>
            <Link to="/" className="text-[#f4f4f4] text-xl font-bold">WiseHealth Navigator</Link>
        </div>
        <div className="flex items-center space-x-4">
            <Link to="/login" className="text-[#f4f4f4]">Admin Login</Link>
            <br />
            <Link to="/aboutus" className="text-[#f4f4f4]">About Us</Link>
        </div>
    </div>
}