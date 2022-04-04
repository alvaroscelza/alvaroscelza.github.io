import Menu from "./components/Menu/Menu";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Pages/Home";

function App() {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </>
    );
}

export default App;
