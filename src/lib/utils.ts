import type { ClicksRecord } from "./definitions";

const storageKey = "analytics.clicks";

export const formatDate = (milliseconds: number) => {
    const date = new Date(milliseconds * 1000);
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
};

export const disableScroll = () => {
    document.body.style.overflow = "hidden";
};

export const enableScroll = () => {
    document.body.style.overflow = "auto";
};

export const getAnalyticsFromStorage = () => {
    try {
        const storedAnalytics = localStorage.getItem(storageKey);
        if (!storedAnalytics) {
            return {};
        }
        return JSON.parse(storedAnalytics) as ClicksRecord;
    } catch (error) {
        return {};
    }
};

export const storeAnalytics = (analyticsData: ClicksRecord) => {
    localStorage.setItem(storageKey, JSON.stringify(analyticsData));
};