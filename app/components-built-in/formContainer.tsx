"use client";

import { ReactNode } from "react";

interface FormContainerProps {
    title: string;
    children: ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ title, children }) => {
    return (
        <div className="w-full h-full flex flex-col bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold mb-6 text-center text-primary-background">{title}</h1>
            <div className="flex-grow overflow-y-auto">
                {children}
            </div>
        </div>
    );
};

export default FormContainer;
