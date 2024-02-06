import { NewNav } from '../components/NewNav';

export function AboutUs() {
    return (
        <div>
            <NewNav />

            <div className="max-w-2xl mx-auto px-4 py-8 pt-14">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-800 mb-6">
                    Welcome to WiseHealth Navigator, your trusted partner in efficient queue management solutions for government hospitals and public service institutions.
                </p>
                <p className="text-lg text-gray-800 mb-6">
                    At WiseHealth Navigator, we understand the challenges faced by healthcare facilities and public service centers in managing long queues and ensuring smooth customer flow. Our mission is to revolutionize queue management by providing technology solutions that enhance customer experience and streamline operations.
                </p>
                <h2 className="text-3xl font-bold mb-2 pt-10">Our Vision</h2>
                <p className="text-lg text-gray-800 mb-6">
                    Our vision is to create a seamless queue management experience that eliminates wait times, reduces frustration, and improves operational efficiency for government hospitals and public service institutions.
                </p>
            </div>
        </div>
    );
}
