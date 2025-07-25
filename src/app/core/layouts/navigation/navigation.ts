export interface NavigationData {
    title: string;
    urlBtn: string;
    icon: string;
}

export const navigation: NavigationData[] = [
    {
        title: "Headphones",
        urlBtn: "/headphones",
        icon: "shared/desktop/image-category-thumbnail-headphones.png"
    },
    {
        title: "Speakers",
        urlBtn: "/speakers",
        icon: "shared/desktop/image-category-thumbnail-speakers.png"
    },
    {
        title: "Earphones",
        urlBtn: "/earphones",
        icon: "shared/desktop/image-category-thumbnail-earphones.png"
    },
]
