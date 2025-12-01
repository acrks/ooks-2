'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Announcements() {
    const [generalAnnouncementsOpen, setGeneralAnnouncementsOpen] = useState(false);
    const [announcements, setAnnouncements] = useState<string[]>([])
    const [announcement, setAnnouncement] = useState("")

    function logAnnouncement() {
        setAnnouncements([...announcements, announcement])
        setAnnouncement("")
    }
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
            General Announcements
            <Button onClick={() => setGeneralAnnouncementsOpen(!generalAnnouncementsOpen)} className="self-start">
                {generalAnnouncementsOpen ? "-" : "+"}
            </Button>
            </div>
            <div>
                {announcements.length > 0 && (
            <div className="p-2">{announcements.map((ann, index) => (<p key={index}>🔊 {ann}</p>))}</div>
                )}
            </div>
            {generalAnnouncementsOpen && (
            <div className="flex flex-col gap-2">
            <textarea value={announcement} onChange={e => setAnnouncement(e.target.value)} className="w-full h-12 border-2 border-solid border-gray-300 rounded-md p-2 resize-none" placeholder="Enter announcements here..." />
            <Button disabled={announcement.trim() === ""} onClick={logAnnouncement} className="self-start">Log Announcement</Button>
            </div>
            )}  
        </div>
    )
}