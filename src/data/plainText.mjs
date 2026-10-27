/** Flatten rich-text runs to the string the page shows. */
export function plainText(runs) {
    if (runs == null) {
        return "";
    }
    if (typeof runs === "string") {
        return runs;
    }
    return runs.map((part) => {
        if (typeof part === "string") {
            return part;
        }
        if (part.strong) {
            return part.strong;
        }
        if (part.text) {
            return part.text;
        }
        return "";
    }).join("");
}
