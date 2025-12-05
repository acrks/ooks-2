import { ReactElement } from "react"

export interface meetingParticipantsTraits {
    name: "Alex" | "Tyler" | "Albert" | "Srini" | "Jay" | "Walter" | "Oliver" | "Ramzi" | "Dennis" | "Michael" | "Julie" | "QA" | "Product" | "UX" | "Travis",
    wins: {
        ticketId: string,
        notes: string
    }[],
    needsPeerReview: string[],
    blockers: {
        ticketId: string,
        notes: string
    }[]
}

type MeetingParticipantsType = Record<number, meetingParticipantsTraits>

export const meetingParticipants: MeetingParticipantsType = {
    1: { name: 'Alex', wins: [], needsPeerReview: [], blockers: [] },
    2: { name: 'Tyler', wins: [], needsPeerReview: [], blockers: [] },
    3: { name: 'Albert', wins: [], needsPeerReview: [], blockers: [] },
    4: { name: 'Srini', wins: [], needsPeerReview: [], blockers: [] },
    5: { name: 'Jay', wins: [], needsPeerReview: [], blockers: [] },
    6: { name: 'Walter', wins: [], needsPeerReview: [], blockers: [] },
    7: { name: 'Oliver', wins: [], needsPeerReview: [], blockers: [] },
    8: { name: 'Ramzi', wins: [], needsPeerReview: [], blockers: [] },
    9: { name: 'Dennis', wins: [], needsPeerReview: [], blockers: [] },
    10: { name: 'Michael', wins: [], needsPeerReview: [], blockers: [] },
    11: { name: 'Julie', wins: [], needsPeerReview: [], blockers: [] },
    12: { name: 'QA', wins: [], needsPeerReview: [], blockers: [] },
    13: { name: 'Product', wins: [], needsPeerReview: [], blockers: [] },
    14: { name: 'UX', wins: [], needsPeerReview: [], blockers: [] },
    15: { name: 'Travis', wins: [], needsPeerReview: [], blockers: [] }
}

export const subTeams = {
    'UX': ['Chris', 'Hanley', 'Jonathan'],
    'QA': ['Ben','Fernando', 'Yuga', 'Kiefer'],
    'Product': ['Al', 'Chinny']
}

export const themes = {
    "Monday": "What do you plan to work on this week?",
    "Wednesday": "How has the week gone thus far and any change in your plans for the rest of the week?",
    "Friday": "How did the week go? Did it go as planned?",
    "default": "No meeting scheduled today."
}

export interface announcementTraits {
    "button": ReactElement,
    "inset": string,
    "bg": string,
    "placeholderText": string,
    "emoji": string
}