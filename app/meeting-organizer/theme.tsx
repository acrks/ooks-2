import { getMeetingTheme } from "./utils";

export default function MeetingTheme() {
    const meetingTheme = getMeetingTheme();
    return (
        <>
            <h4>Theme</h4>
            <p>{meetingTheme}</p>
        </>
    );
};