import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";



const Home = () => {
    return (
        <div>

            <Helmet>
                <title>
                    Byte of Flavours | Home
                </title>
            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
    
          
        </div>
    );
};

export default Home;