import React from "react";


{/*think of the following as the constructor for the properties of the object*/ }
interface PracticeWidgetProps {
    title: string;
    description: string;
    currentFocus: string;
    dailyStreak: number;
    tag?: string; //the ? shows that this property is optional
}

export default function PracticeWidget({ title, currentFocus, dailyStreak, tag = 'Task' }: PracticeWidgetProps) {
    return (
        <div className="p-8 border-2 border-black bg-yellow-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">{/*this is the yellow container*/}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black uppercase italic tracking-tighter">{title}</h3>
                <div className="h-3 w-3 rounded-full bg-green-500 border border-black animate-pulse"></div>{/*blinking green light in the top right of the container*/}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">{/*this is the grid container*/}
                <div className="space-y-1">
                    <p className="text-xs font-bold uppercase text-gray-500">Current Focus</p>
                    <p className="text-lg font-bold">{currentFocus}</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs font-bold uppercase text-gray-500">Daily Streak</p>
                    <p className="text-lg font-bold">{dailyStreak}</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs font-bold uppercase text-gray-500">Mastery Level</p>
                    <div className="w-full bg-gray-200 h-4 border border-black mt-1">
                        <div className="bg-blue-500 h-full w-[50%] border-r border-black"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}