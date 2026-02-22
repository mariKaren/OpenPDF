import { type ReactNode, useEffect, useState } from "react";

interface AppLayoutProps {
    children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen bg-[#f7f7f7] dark:bg-[#101a22] transition-colors duration-300 flex flex-col">
            <header className="flex justify-between items-center px-6 py-4 shadow-md">
                <div className="flex items-center gap-2">
                        <div className="w-[42px] h-[42px] bg-secondary dark:bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                            <i className="ri-file-text-fill text-white text-[22px]"></i>
                        </div>
                        <h1 className="text-2xl font-bold dark:text-white">OpenPDF</h1>
                </div>

                <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 dark:text-white transition">
                    {darkMode ? "Light" : "Dark"}
                </button>
            </header>

            <main className="flex-1">
                {children}
            </main>

            <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
                © 2026 OpenPDF • Crafted by Karen Belen Mari
            </footer>
        </div>
    );
}

export default AppLayout;