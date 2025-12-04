'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaHandPaper } from "react-icons/fa";
import { IoAlert } from "react-icons/io5";
import { MdCelebration } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
import { announcementTraits } from "./const";

type AnnouncementTypes = Record<string, announcementTraits>

const announcementTypes: AnnouncementTypes = {
    "celebration" : {
        "button": <MdCelebration />,
        "inset": "bg-yellow-50",
        "bg": "bg-yellow-500",
        "placeholderText": "Enter the celebration announcement here...",
        "emoji": "🎉"
    },
    "emergency" : {
        "button": <IoAlert />,
        "inset": "bg-red-50",
        "bg": "bg-red-500",
        "placeholderText": "Enter the emergency announcement here...",
        "emoji": "🚨"
    },
        "general" : {
        "button": <HiSpeakerphone />,
        "inset": "bg-blue-50",
        "bg": "bg-blue-500",
        "placeholderText": "Enter the general announcement here...",
        "emoji": "🔊"
    }
}

export function Announcements() {
    const [generalAnnouncementsOpen, setGeneralAnnouncementsOpen] = useState(false);
    const [announcements, setAnnouncements] = useState<string[]>([])
    const [announcement, setAnnouncement] = useState("")
    const [announcementEmoji, setAnnouncementEmoji] = useState(announcementTypes["general"].emoji)
    const [announcementTypeText, setAnnouncementTypeText] = useState(announcementTypes["general"].placeholderText)
    const [textAreaBG, setTextAreaBG] = useState(announcementTypes["general"].inset)

    function switchAnnouncementType(type:string) {
        setAnnouncementEmoji(announcementTypes[type].emoji)
        setTextAreaBG(announcementTypes[type].inset)
        setAnnouncementTypeText(announcementTypes[type].placeholderText)
    }

    function logAnnouncement() {
        const copy = `${announcementEmoji} ${announcement}` 
        setAnnouncements([...announcements, copy])
        setAnnouncement("")
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
            Announcements
            <Button onClick={() => setGeneralAnnouncementsOpen(!generalAnnouncementsOpen)} className="cursor-pointer self-start">
                {generalAnnouncementsOpen ? <FaMinus /> : <FaPlus />}
            </Button>
            </div>
            <div>
                {announcements.length > 0 && (
            <div className="p-2">{announcements.map((ann, index) => (<p key={index}>{ann}</p>))}</div>
                )}
            </div>
            {generalAnnouncementsOpen && (
            <div className="flex flex-col gap-2">
            <textarea value={announcement} onChange={e => setAnnouncement(e.target.value)} 
            className={`w-full h-12 border-2 border-solid border-gray-300 ${textAreaBG} rounded-md p-2 resize-none`} placeholder={announcementTypeText} />
                <div className="flex flex-row gap-2">
                <Button disabled={announcement.trim() === ""} onClick={logAnnouncement} className="self-start cursor-pointer">Log Announcement</Button>
                {Object.keys(announcementTypes).map((aType, index) => (
                    <div key={index}>
                        <Button onClick={() => switchAnnouncementType(aType)} className={`cursor-pointer self-start ${announcementTypes[aType].bg} hover:bg`}>
                        {announcementTypes[aType].button}
                        </Button>
                    </div>
                ))}
                </div>
            </div>
            )}  
        </div>
    )
}