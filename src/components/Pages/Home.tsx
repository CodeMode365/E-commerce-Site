
import { Hero } from "../Hero"
import About from "../About"
import Category from "../Category/index"
import ItemShowCase from "../ItemShowCase"
import Markets from "../Markets"

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Category />
            {/* <ItemShowCase title={"New Arrivals"} />
            <ItemShowCase title={"Popular Items"} /> */}
            <Markets />
        </>
    )
}

export default Home