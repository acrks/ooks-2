'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoAlert } from "react-icons/io5";
import { MdCelebration } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
import { announcementTraits } from "./const";

type AnnouncementTypes = Record<string, announcementTraits>

const announcementTypes: AnnouncementTypes = {
    "general" : {
        "button": <HiSpeakerphone />,
        "inset": "bg-blue-50",
        "bg": "blue-900",
        "placeholderText": "Enter the general announcement here...",
        "emoji": "🔊"
    },
    "celebration" : {
        "button": <MdCelebration />,
        "inset": "bg-yellow-50",
        "bg": "yellow-500",
        "placeholderText": "Enter the celebration announcement here...",
        "emoji": "🎉"
    },
    "emergency" : {
        "button": <IoAlert />,
        "inset": "bg-red-50",
        "bg": "red-500",
        "placeholderText": "Enter the emergency announcement here...",
        "emoji": "🚨"
    }
}

export function Announcements() {
    const [generalAnnouncementsOpen, setGeneralAnnouncementsOpen] = useState(false);
    const [announcements, setAnnouncements] = useState<string[]>([])
    const [announcement, setAnnouncement] = useState("")
    const [announcementType, setAnnouncementType] = useState("general")
    const [announcementEmoji, setAnnouncementEmoji] = useState(announcementTypes["general"].emoji)
    const [announcementTypeText, setAnnouncementTypeText] = useState(announcementTypes["general"].placeholderText)
    const [textAreaInset, setTextAreaInset] = useState(announcementTypes["general"].inset)

    function switchAnnouncementType(type:string) {
        setAnnouncementType(type)
        setAnnouncementEmoji(announcementTypes[type].emoji)
        setTextAreaInset(announcementTypes[type].inset)
        setAnnouncementTypeText(announcementTypes[type].placeholderText)
    }

    function logAnnouncement() {
        const copy = `${announcementEmoji} ${announcement}` 
        setAnnouncements([...announcements, copy])
        setAnnouncement("")
    }

    console.log('bg-' + announcementTypes["general"].bg)

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
            <div className="flex flex-col gap-4">
            <textarea value={announcement} onChange={e => setAnnouncement(e.target.value)} 
            className={`w-full h-12 border-2 border-solid border-gray-300 ${textAreaInset} rounded-md p-2 resize-none`} placeholder={announcementTypeText} />
                <div className="flex flex-row gap-4">
                <Button disabled={announcement.trim() === ""} onClick={logAnnouncement} className="self-start cursor-pointer">Log Announcement</Button>
                {Object.keys(announcementTypes).map((aType, index) => (
                    <Button key={index}onClick={() => switchAnnouncementType(aType)} className={`cursor-pointer self-start bg-${announcementTypes[aType].bg} ${announcementType === aType ? 'ring-2 ring-offset-2 ring-' + announcementTypes[aType].bg : ''}`}>
                    {announcementTypes[aType].button}
                    </Button>
                ))}
                </div>
            </div>
            )}
        </div>
    )
}