
import { Hero } from "../../Hero"
import About from "../../About"
import Category from "./Category/index"
import Markets from "./Markets"
import ItemShowCase from "./ItemShowCase"
import Data from "../../Reusable/DummyProducts"

const Home = () => {

    const popularItems = Data.map((C_wise) =>
        C_wise.Items.map((eachItem) => {
            if(eachItem.highlight.includes("popular")) return eachItem
        }
        )
    )
    const newItems = Data.map((C_wise) =>
        C_wise.Items.map((eachItem) => {
            if(eachItem.highlight.includes("new")) return eachItem
        }
        )
    )

    console.log(popularItems)

    return (
        <>
            <Hero />
            <About />
            <Category />
            <ItemShowCase title="Popular Products"  data={popularItems.flat()}/>
            <ItemShowCase title="New Arrival" data={newItems.flat()} />
            <Markets />
        </>
    )
}

export default Home