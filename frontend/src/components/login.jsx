import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use this if you want to redirect after successful login
import { NewNav } from './NewNav';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate(); // Initialize history for redirect

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', {
                username: username,
                password: password
            }); 

            if(response.data.msg === 'Login successful') {
                history('/admin/addpatient');
            }else{
                alert("Login failed");
            }    

        } catch (error) {
            // console.error('Login error:', error);
            alert("Login failed");
        }
    };

    return (
        <div>
            <NewNav />
            <div className="bg-[#f4f4f4] p-14 m-7 flex items-center justify-center">
                <div className="w-full max-w-md bg-[#f4f4f4] rounded-lg shadow-lg dark:border dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Admin SignIn
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your username" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            <button onClick={handleLogin} className="border border-black w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400 p-2">
                                New to platform? You may not have Admin Priviliges yet.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
