export type Post = {
    id: number;
    date: number;
    title: string;
    content: string;
    thumbnail: { large: string; small: string };
    author: { avatar: string; name: string; role: string };
    clicks: 0;
};
