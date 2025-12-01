import { themes } from "./const";

const currentDate: Date = new Date();

export function getMeetingTheme() {
    switch (currentDate.toLocaleDateString("en-US", { weekday: "long" })) {
        case("Monday"):
            return themes["Monday"];
        case("Wednesday"):
            return themes["Wednesday"];
        case("Friday"):
            return themes["Friday"];
        default:
            return themes["default"];
    }
}

export function getDay() {
    return currentDate.toLocaleDateString("en-US");
}