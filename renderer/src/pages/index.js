import Container from "components/elements/container"
import Description from "components/elements/description"
import Footer from "components/elements/footer"
import Main from "components/elements/main"
import MetaHeader from "components/elements/meta-header"
import Title from "components/elements/title"
import Grid from "components/features/grid"

export default function Index() {
    const cardList = [
        {
            title: "Documentation",
            url: "https://nextjs.org",
            contents: "Find in-depth information about Next.js features and API.",
        },
        {
            title: "Learn",
            url: "https://nextjs.org/learn",
            contents: "Learn about Next.js in an interactive course with quizzes!",
        },
        {
            title: "Examples",
            url: "https://github.com/vercel/next.js/tree/canary/examples",
            contents: "Discover and deploy boilerplate example Next.js projects.",
        },
        {
            title: "Deploy",
            url: "https://https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
            contents: "Instantly deploy your Next.js site to a public URL with Vercel.",
        },
    ]

    return (
        <Container>
            <MetaHeader
                title="Create Next App"
                content="Generated by create next app"
                icon="/favicon.ico"
            />

            <Main>
                <Title url="https://nextjs.org" title="Next.js" />
                <Description url="pages/index.js" />
                <Grid cardList={cardList} />
            </Main>

            <Footer url="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" />
        </Container>
    )
}
