import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Contact = () => {
    const modalRef = useRef(null);
    const navigate = useNavigate();

    // Open the modal
    const openModal = () => {
        modalRef.current.showModal();
    };

    // Close the modal and navigate to home
    const closeModal = () => {
        modalRef.current.close();
        navigate("/"); // Redirect to home
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                {/* Open Modal Button */}
                <button
                    onClick={openModal}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Contact Us
                </button>

                {/* Contact Modal */}
                <dialog ref={modalRef} className="modal backdrop:bg-black/30">
                    <div className="modal-box dark:bg-slate-900 dark:text-white">
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={closeModal}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold text-center">Contact Us</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-center mt-1">
                            We'd love to hear from you!
                        </p>

                        {/* Contact Form */}
                        <form className="mt-6 space-y-4">
                            {/* Name */}
                            <div>
                                <label className="block text-gray-600 dark:text-gray-300 font-medium">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full mt-1 px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-600 dark:text-gray-300 font-medium">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full mt-1 px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-gray-600 dark:text-gray-300 font-medium">Message</label>
                                <textarea
                                    placeholder="Type your message"
                                    className="w-full mt-1 px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none h-24"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button className="w-full bg-pink-500 text-white font-medium py-2 rounded-lg hover:bg-pink-700 transition duration-300">
                                Submit
                            </button>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    );
};

export default Contact;
