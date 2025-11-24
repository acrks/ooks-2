import { getDay } from "./meeting-organizer-utils";
import MeetingTheme from "./theme";

type MeetingOrganizerProps = object

function MeetingOrganizer(props: MeetingOrganizerProps) {
    const day = getDay();
    return (
        <div>
            <h1>Meeting Organizer</h1>
            <p>{day}</p>
            <MeetingTheme />
        </div>
    );
};

export default MeetingOrganizer;