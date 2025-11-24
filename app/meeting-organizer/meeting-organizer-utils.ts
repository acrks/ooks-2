
const currentDate: Date = new Date();

export function getMeetingTheme() {
    switch (currentDate.toLocaleDateString("en-US", { weekday: "long" })) {
        case("Monday"):
            return "What do you plan to work on this week?"
        case("Wednesday"):
            return "How has the week gone thus far and any change in your plans for the rest of the week?"
        case("Friday"):
            return "How did the week go? Did it go as planned?"
    }
}

export function getDay() {
    return currentDate.toLocaleDateString("en-US");
}