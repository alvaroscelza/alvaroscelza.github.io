import Menu from "./components/Menu/Menu";
import {Route, Routes} from "react-router-dom";
import Page from "./components/Layouts/Page";
import HomePage from "./Pages/HomePage";
import KnowledgePage from "./Pages/KnowledgePage";
import ContactPage from "./Pages/ContactPage";
import ExperiencePage from "./Pages/ExperiencePage/ExperiencePage";

function App() {
    return (
        <>
            <Menu/>
            <Page>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/knowledge' element={<KnowledgePage/>}/>
                    <Route path='/experience' element={<ExperiencePage/>}/>
                    <Route path='/contact' element={<ContactPage/>}/>
                </Routes>
            </Page>
        </>
    );
}

export default App;
