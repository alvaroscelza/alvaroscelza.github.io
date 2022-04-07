import Menu from "./components/Menu/Menu";
import {Route, Routes} from "react-router-dom";
import Page from "./components/Layouts/Page";
import HomePage from "./components/Pages/HomePage";
import KnowledgePage from "./components/Pages/KnowledgePage";
import EnglishPage from "./components/Pages/EnglishPage";
import ContactPage from "./components/Pages/Contact";

function App() {
    return (
        <>
            <Menu/>
            <Page>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/lets-speak-english' element={<EnglishPage/>}/>
                    <Route path='/knowledge' element={<KnowledgePage/>}/>
                    <Route path='/contact' element={<ContactPage/>}/>
                </Routes>
            </Page>
        </>
    );
}

export default App;
