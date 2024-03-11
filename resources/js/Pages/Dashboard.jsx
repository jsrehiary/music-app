import { Head } from "@inertiajs/react";
import "tailwindcss/tailwind.css";
import { IoIosSettings } from "react-icons/io";

import Sidebar from "./Partials/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-grow justify-between p-5 space-x-4">
                <div className="flex space-x-4">
                    <h1>Music</h1>
                    <h1>Explore Premium</h1>
                </div>
                <div className="">
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Search"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                </div>
                <div className="flex space-x-4">
                    <div>
                        <IoIosSettings />
                    </div>
                    <div>
                        <div className="avatar online">
                            <div className="w-8 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
