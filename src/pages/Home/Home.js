import BannerBottom from "../../views/BannerBottom/BannerBottom";
import Header from "../../views/Header/Header";
import SectionComposition from "../../views/SectionComposition/SectionComposition";
import Blog from "../../views/Blog/Blog";

const Home = () => {
    return(
    <>
        <Header />
        <SectionComposition />
        <BannerBottom />
        <Blog />
    </>
    )
};

export default Home;
