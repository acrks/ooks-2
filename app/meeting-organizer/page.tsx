import { getDay } from "./utils";
import MeetingTheme from "./theme";
import NextToPresent from "./next-to-present";

type MeetingOrganizerProps = object

function MeetingOrganizer(props: MeetingOrganizerProps) {
    const day = getDay();
    return (
        <div>
            <h1>Meeting Organizer</h1>
            <p>{day}</p>
            <MeetingTheme />
            <h2>Next to Present</h2>
            <NextToPresent />
        </div>
    );
};

export default MeetingOrganizer;