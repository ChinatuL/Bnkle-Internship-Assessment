import React from "react";
import {
    render,
    screen,
    waitFor,
    fireEvent,
    cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi, afterEach } from "vitest";
import Cards from "../src/components/Cards";
import { AppProvider } from "../src/context/AppProvider";

const mockPosts = [
    {
        id: 1,
        title: "Test Post 1",
        content: "This is the first test post.",
        author: {
            name: "Author 1",
            role: "Role 1",
        },
        date: "1606311631",
        thumbnail: {
            large: "https://via.placeholder.com/600",
            small: "https://via.placeholder.com/300",
        },
    },
    {
        id: 2,
        title: "Test Post 2",
        content: "This is the second test post.",
        author: {
            name: "Author 2",
            role: "Role 2",
        },
        date: "1606311632",
        thumbnail: {
            large: "https://via.placeholder.com/600",
            small: "https://via.placeholder.com/300",
        },
    },
];

const mockContext = {
    posts: mockPosts,
    isLoading: false,
    error: false,
    isModalOpen: false,
    post: null,
    openModal: vi.fn(),
    closeModal: vi.fn(),
};

vi.mock("../src/context/appContext", async (importOriginal) => {
    const original = await importOriginal();
    return {
        ...original,
        useAppContext: () => mockContext,
    };
});

describe("Posts component", () => {
    afterEach(() => {
        cleanup();
    });

    it("renders posts correctly", () => {
        render(
            <AppProvider>
                <Cards />
            </AppProvider>
        );

        mockPosts.forEach((post) => {
            expect(screen.getByText(post.title)).toBeInTheDocument();
            expect(screen.getByText(post.content)).toBeInTheDocument();
            expect(screen.getByText(post.author.name)).toBeInTheDocument();
        });
    });

    // check if the openModal function is called when a post is clicked
    it("opens modal when post is clicked", async () => {
        render(
            <AppProvider>
                <Cards />
            </AppProvider>
        );

        const post = screen.getByText(mockPosts[0].title);
        fireEvent.click(post);

        await waitFor(() => {
            expect(mockContext.openModal).toHaveBeenCalledTimes(1);
        });
    });
});
