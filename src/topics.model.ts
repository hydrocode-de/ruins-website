import { createRef } from "react";

export type TOPIC_TYPE = 'intro' | 'uncertainty' | 'weather' | 'agriculture' | 'extremes' | 'other';

export const TOPICS = {
    intro: createRef<HTMLElement>(),
    uncertainty: createRef<HTMLElement>(),
    weather: createRef<HTMLElement>(),
    agriculture: createRef<HTMLElement>(),
    extremes: createRef<HTMLElement>(),
    other: createRef<HTMLElement>()
};

export interface TopicStep {
    imgSrc?: string;
    content: any;
}