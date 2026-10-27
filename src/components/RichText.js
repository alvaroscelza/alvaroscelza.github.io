import {Fragment} from "react";
import ExternalLink from "./UI/ExternalLink";

/**
 * Renders the rich-text runs stored in src/data. A string is plain text,
 * {strong} is bold, and {link, text} is the same external link the pages use.
 */
const RichText = ({runs}) => {
    const parts = Array.isArray(runs) ? runs : [runs];
    return parts.map((part, index) => {
        if (typeof part === "string") {
            return <Fragment key={index}>{part}</Fragment>;
        }
        if (part.strong) {
            return <strong key={index}>{part.strong}</strong>;
        }
        if (part.link) {
            return <ExternalLink key={index} link={part.link} text={part.text}/>;
        }
        return null;
    });
};

export default RichText;
