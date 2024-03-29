import { createRef } from "react";

export type TOPIC_TYPE = 'info' | 'portfolio' | 'uncertainty' | 'weather' | 'agriculture' | 'wind' | 'extremes' | 'other';

export const TOPICS = {
    info: createRef<HTMLElement>(),
    portfolio: createRef<HTMLElement>(),
    uncertainty: createRef<HTMLElement>(),
    weather: createRef<HTMLElement>(),
    agriculture: createRef<HTMLElement>(),
    wind: createRef<HTMLElement>(),
    extremes: createRef<HTMLElement>(),
    other: createRef<HTMLElement>()
};

export interface TopicStep {
    imgSrc?: string;
    content: any;
}