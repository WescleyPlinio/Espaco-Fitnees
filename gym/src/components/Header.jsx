import FadeIn from "./FadeIn"

export default function Header() {
    return (
        <header className="bg-gray-800 px-2 py-1">
            <FadeIn children={
                <ul className="container lg:w-[calc(100vw*0.8)] mx-auto flex flex-wrap justify-between">
                    <li className="text-gray-400 text-center font-light">
                        <p className="text-nowrap">Bom Jesus - Rua da academia, centro, 123</p>
                    </li>

                    <li className="text-gray-400 text-center font-light">
                        <p className="text-nowrap">(84) 98765-4321</p>
                    </li>

                    <li className="text-gray-400 text-center font-light">
                        <p className="text-nowrap">espacofitness@gmail.com</p>
                    </li>
                </ul>
            } />
        </header>
    )
}