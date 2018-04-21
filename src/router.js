import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import main pages that are not store or blog
import LandingPage from "./components/Home/LandingPage";


//stylux imports
import StyluxHome from "./components/Stylux/StyluxHome/StyluxHome";
import StyluxDocumentation from "./components/Stylux/StyluxDocumentation/StyluxDocumentation";

import StyluxBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocksViews";
import StyluxBinBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/BinBlockView";
import StyluxButtonBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/ButtonBlocksView";
import StyluxCardBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/CardBlocksView";
import StyluxCarouselBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/CarouselsTickerBlocksView";
import StyluxFormBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/FormBlocksView";
import StyluxHeadingBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/HeadingBlocksView";
import StyluxImageBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/ImageBlocksView";
import StyluxListBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/ListBlockView";
import StyluxNavbarBlocksview from "./components/Stylux/StyluxDisplays/StyluxBlocks/NavBarBlocksView";
import StyluxParagraphBlocksView from "./components/Stylux/StyluxDisplays/StyluxBlocks/ParagraphBlocksView";
import StyluxTableBlockView from "./components/Stylux/StyluxDisplays/StyluxBlocks/TableBlockViews";

//start router
export default (
    <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route exact path="/react-stylux" component={StyluxHome} />
        <Route path="/react-stylux/documentation" component={StyluxDocumentation} />

        <Route exact path="/react-stylux/blocks" component={StyluxBlocksView} />
        <Route path="/react-stylux/blocks/togglersviews" component={StyluxBinBlocksView}></Route>
        <Route path="/react-stylux/blocks/buttonviews" component={StyluxButtonBlocksView}></Route>
        <Route path="/react-stylux/blocks/cardviews" component={StyluxCardBlocksView}></Route>
        <Route path="/react-stylux/blocks/carouselviews" component={StyluxCarouselBlocksView}></Route>
        <Route path="/react-stylux/blocks/formviews" component={StyluxFormBlocksView}></Route>
        <Route path="/react-stylux/blocks/headingviews" component={StyluxHeadingBlocksView}></Route>
        <Route path="/react-stylux/blocks/imageviews" component={StyluxImageBlocksView}></Route>
        <Route path="/react-stylux/blocks/listviews" component={StyluxListBlocksView}></Route>
        <Route path="/react-stylux/blocks/navbarviews" component={StyluxNavbarBlocksview}></Route>
        <Route path="/react-stylux/blocks/paragraphviews" component={StyluxParagraphBlocksView}></Route>
        <Route path="/react-stylux/blocks/tableviews" component={StyluxTableBlockView}></Route>
    </Switch>
)