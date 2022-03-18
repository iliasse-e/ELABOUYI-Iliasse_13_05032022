import React from "react";
import { Banner } from "../components/banner";
import { Feature } from "../components/feature";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { RootStateOrAny, useSelector } from "react-redux";

export const HomePage = () : JSX.Element => {

    return <>
        <Banner />
        <Feature />
    </>
}