import { Banner } from "../components/banner";
import Feature from "../components/feature";

/**
 * Sets and displays home page
 * called in App
 * @returns home page
 */
export const HomePage = () : JSX.Element => {
    return <main>
        <Banner />
        <Feature />
    </main>
}