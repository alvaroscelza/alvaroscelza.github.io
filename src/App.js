import Menu from "./components/Menu/Menu";
import {Route, Routes} from "react-router-dom";
import Page from "./components/Layouts/Page";
import HomePage from "./components/Pages/HomePage";
import KnowledgePage from "./components/Pages/KnowledgePage";
import ContactPage from "./components/Pages/ContactPage";
import ProjectsPage from "./components/Pages/ProjectsPage/ProjectsPage";

function App() {
    return (
        <>
            <Menu/>
            <Page>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/knowledge' element={<KnowledgePage/>}/>
                    <Route path='/projects' element={<ProjectsPage/>}/>
                    <Route path='/contact' element={<ContactPage/>}/>
                </Routes>
            </Page>
        </>
    );
}

export default App;
