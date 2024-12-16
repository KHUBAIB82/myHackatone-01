import Image from "next/image";

import * as React from "react";
import HeaderBar from "./CommerceApp/HeaderBar";
import MainContent from "./CommerceApp/MainContent";
import Footer from "./CommerceApp/Footer";
import CopyrightBar from "./CommerceApp/CopyRightBar";

const HomePage: React.FC = () => (
  <div className="flex overflow-hidden flex-col items-center bg-white">
    <HeaderBar />
    <MainContent />
    <Footer />
    <CopyrightBar />
  </div>
);

export default HomePage;