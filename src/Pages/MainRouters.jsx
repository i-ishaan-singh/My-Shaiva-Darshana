import { Routes, Route} from "react-router-dom";
import { HomePage } from './HomePage/HomePage';
import { BooksPage } from "./LiteratureBooks/Books";
import { SFTantraList } from "./SixtyFourTantras/SFTantras";
import { GuruPage } from "./GuruPage/GuruPage";

const MainRouter = function(){

    return (<Routes>
                <Route 
                    index 
                    element={<HomePage />}
                /> 
                <Route 
                    path="/literature/books" 
                    element={<BooksPage />}
                /> 
                <Route 
                    path="/literature-list" 
                    element={<SFTantraList />}
                /> 
                <Route 
                    path="/personalities" 
                    element={<GuruPage />}
                /> 
            </Routes>);

}

export {MainRouter}