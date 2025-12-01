'use client'

import { getMeetingTheme } from "./utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function NextToPresent() {

    const meetingParticipants: { [key: number]: string } = {
        1: 'Alex',
        2: 'Tyler',
        3: 'Albert',
        4: 'Srini',
        5: 'Jay',
        6: 'Walter',
        7: 'Oliver',
        8: 'Ramzi',
        9: 'Dennis',
        10: 'Michael',
        11: 'Julie',
        12: 'QA',
        13: 'Product',
        14: 'Travis'
    }

    const subTeams = {
        'Design': ['Chris', 'Hanley'],
        'QA': ['Fernando', 'Yuga', 'Kiefer', 'Ben'],
        'Product': ['Al', 'Chinny']
    }

    const [presentingIndex, setPresentingIndex] = useState(-1);
    const [presentedIndexes, setPresentedIndexes] = useState<number[]>([]);
    const [yetToPresentIndexes, setYetToPresentIndexes] = useState<number[]>(Object.keys(meetingParticipants).map(Number));
    
    const spinTheWheel = () => {
        const oldIndex = presentingIndex;
        if (oldIndex >= 0) {
            if (!presentedIndexes.includes(oldIndex)) {
                setPresentedIndexes(presentedIndexes.concat(oldIndex));
            }  
        }
            const newIndex = yetToPresentIndexes[Math.floor(Math.random() * yetToPresentIndexes.length)];
            setPresentingIndex(newIndex);
            setYetToPresentIndexes(prevIndexes => prevIndexes.filter(index => index !== newIndex));
        }

    return (
        <>
        <div className="flex justify-center">
            {/* Yet to Present Column */}
            <div className="flex flex-col w-1/3 items-center border-2 border-solid border-blue-700">
            <h4>Yet To Present</h4>
            <div className="border-2 border-solid border-orange-400">

            <ul>
                {yetToPresentIndexes.map((index) => (
                    <li key={index}>{meetingParticipants[index]}</li>
                ))}
            </ul>
                </div>
            </div>
            <div className="flex flex-col w-1/3 border-2 border-solid border-green-700 items-center">
            {
                presentedIndexes.length == Object.keys(meetingParticipants).length ?
                <h2>All Done!</h2>
                : <>
                <h4>At Bat: </h4>
                
                <h4>{presentingIndex >= 0 ? meetingParticipants[presentingIndex] : 'Click to start'}</h4>
                <Button onClick={spinTheWheel} className="cursor-pointer">Spin the Wheel</Button>
                </>
            }
        
            </div>
            {/* Presenting */}
        {/* Presented Column */}
        <div className="flex flex-col items-center w-1/3 border-2 border-solid border-purple-700">
            <h4>Presented</h4>
                {presentedIndexes.map((index) => (
                    <li key={index}>{meetingParticipants[index]}</li>
                ))}
        </div>

        </div>
        </>
    );
};