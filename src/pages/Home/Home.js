import BannerBottom from "../../views/BannerBottom/BannerBottom";
import Header from "../../views/Header/Header";
import SectionComposition from "../../views/SectionComposition/SectionComposition";
import Blog from "../../views/Blog/Blog";
import Products from "../../views/Products/Products";

const Home = () => {
    return(
    <>
        <Header />
        <SectionComposition />
        <BannerBottom />
        <Products />
        <Blog />
    </>
    )
};

export default Home;
