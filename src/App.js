import Menu from "./components/Menu/Menu";
import {Route, Routes} from "react-router-dom";
import Page from "./components/Layouts/Page";
import Home from "./components/Pages/Home";

function App() {
    return (
        <>
            <Menu/>
            <Page>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </Page>
        </>
    );
}

export default App;
