import Design from "@/../public/images/branding/camp/design.png"
import Programming from "@/../public/images/branding/camp/programming.png"
import Marketing from "@/../public/images/branding/camp/marketing.png"
import Content from "@/../public/images/branding/camp/content.png"

const camps = [
    {
        name: "Web Design",
        image: Design,
        path: "/design",
        color: "bg-rose-500",
        text: "text-rose-500",
        border: "border-rose-500",
        bgcolor: "bg-rose-500/20",
    },
    {
        name: "Web Programming",
        image: Programming,
        path: "/programming",
        color: "bg-orange-500",
        text: "text-orange-500",
        border: "border-orange-500",
        bgcolor: "bg-orange-500/20",
    },
    {
        name: "Web Marketing",
        image: Marketing,
        path: "/marketing",
        color: "bg-amber-500",
        text: "text-amber-500",
        bgcolor: "bg-amber-500/20",
        border: "border-amber-500",
    },
    {
        name: "Web Content",
        image: Content,
        path: "/content",
        color: "bg-yellow-500",
        text: "text-yellow-500",
        bgcolor: "bg-yellow-500/20",
        border: "border-yellow-500",
    }
]

export { camps }