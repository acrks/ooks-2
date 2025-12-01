import { getMeetingTheme } from "./utils";

export default function MeetingTheme() {
    const meetingTheme = getMeetingTheme();
    return (
        <div className="flex flex-row gap-2 font-bold text-xl">
            <h4 className="">Theme:</h4>
            <p>{meetingTheme}</p>
        </div>
    );
};