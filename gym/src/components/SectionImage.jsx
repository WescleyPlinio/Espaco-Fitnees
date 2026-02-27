import FadeIn from "./FadeIn"

export default function SectionImage({ imageUrl, children }) {
    return (
        <section className={`relative h-screen w-full bg-[url(/imgs/${imageUrl})] bg-no-repeat bg-cover bg-top bg-fixed`}>
            <div className="absolute inset-0 bg-black/70"></div>
            {children}
        </section>
    )
}
