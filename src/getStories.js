import storiesEn from "./assets/stories/samplestories.en";
import storiesPt from "./assets/stories/samplestories.pt";
import storiesEs from "./assets/stories/samplestories.es";

export function getStoriesByLang(lang) {
    switch (lang) {
        case "pt":
            return storiesPt;
        case "es":
            return storiesEs;
        case "en":
        default:
            return storiesEn;
    }
}
