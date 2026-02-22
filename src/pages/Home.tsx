import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Home() {
    const navigate = useNavigate();
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setFile(e.target.files[0]);
            navigate("/viewer", { state: { file: e.target.files[0] } });
        }
    };

    return (
        <div className="mt-12 text-center px-6">
            <h2 className="text-4xl font-extrabold mb-4 dark:text-white">
                Hello, Reader
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
                Ready to explore your documents?
            </p>

            <label className="relative cursor-pointer group w-full flex justify-center mb-6">
                <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                />

                <div className="w-full max-w-[500px] rounded-full flex flex-col items-center justify-center text-white shadow-lg bg-secondary dark:bg-primary py-5 hover:bg-[#1280bc] dark:hover:bg-[#136dda] transition duration-500">
                    <i className="ri-add-line text-5xl mb-1"></i>
                    <span className="font-semibold text-lg mb-1">Upload PDF</span>
                </div>
            </label>
            <p className="text-gray-500 dark:text-gray-400"> or drag and drop your PDF here</p>
        </div>
    );
}

export default Home;