import { getDay } from "./utils";
import MeetingTheme from "./theme";
import NextToPresent from "./next-to-present";

type MeetingOrganizerProps = object

function MeetingOrganizer(props: MeetingOrganizerProps) {
    const day = getDay();
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-center text-gray-800">Meeting Organizer</h1>
            <p>{day}</p>
            <MeetingTheme />
            <NextToPresent />
        </div>
    );
};

export default MeetingOrganizer;