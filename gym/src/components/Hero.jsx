import FadeIn from "./FadeIn"

export default function Hero() {
    return (
        <FadeIn children={
            <div className="min-h-150 w-full flex items-center bg-no-repeat bg-right pb-15"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000' opacity='0.01'%3E%3Cpolygon fill='white' points='0,1000 1000,0 1000,1000'/%3E%3C/svg%3E")` }}>
            <div className="container mx-auto px-1 flex flex-col items-center justify-center">
                
                <h1 className="text-4xl md:text-8xl sm:text-6xl font-black text-yellow-300 text-center mb-5">
                    Treine seu corpo,<br />
                    seja saudável!
                </h1>
                <p className="text-white">Espaço Fitness, desde 2019</p>
            </div>
        </div>
        }/>
        
    )
}