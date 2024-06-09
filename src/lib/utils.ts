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
