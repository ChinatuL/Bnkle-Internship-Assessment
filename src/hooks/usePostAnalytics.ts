import { useState, useEffect } from "react";
import type { ClicksRecord } from "@lib/definitions";
import { getAnalyticsFromStorage, storeAnalytics } from "@lib/utils";


export const usePostAnalytics = (): [
    ClicksRecord,
    (data: ClicksRecord) => void
] => {
    const [analytics, setAnalytics] = useState<ClicksRecord>({});

    const updateAnalytics = (data: ClicksRecord) => {
        const analyticsData = { ...analytics, ...data };
        storeAnalytics(analyticsData);
        setAnalytics(analyticsData);
    };

    useEffect(() => {
        const analyticsData = getAnalyticsFromStorage();
        setAnalytics(analyticsData);
    }, []);

    return [analytics, updateAnalytics];
};
