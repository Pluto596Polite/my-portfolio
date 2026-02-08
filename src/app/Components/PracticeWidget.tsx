import React from "react";


{/*think of the following as the constructor for the properties of the object*/ }
interface PracticeWidgetProps {
    title: string;
    description: string;
    tag?: string; //the ? shows that this property is optional
}

export default function PracticeWidget({ title, description, tag = 'Task' }: PracticeWidgetProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{tag}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}