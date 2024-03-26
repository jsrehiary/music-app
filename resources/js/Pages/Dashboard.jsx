// import { Head } from "@inertiajs/react";
import "tailwindcss/tailwind.css";

import Sidebar from "./Partials/Sidebar";
import Navbar from "./Partials/Navbar";

const Dashboard = () => {
    return (
        <div className="flex flex-grow">
            <Sidebar />
            <Navbar />
        </div>
    );
};

export default Dashboard;
