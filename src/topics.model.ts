import { createRef } from "react";

export type TOPIC_TYPE = 'uncertainty' | 'weather' | 'agriculture' | 'extremes' | 'other';

export const TOPICS = {
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