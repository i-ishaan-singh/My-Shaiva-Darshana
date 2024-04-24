import { Routes, Route} from "react-router-dom";
import { HomePage } from './HomePage/HomePage';
import { BooksPage } from "./LiteratureBooks/Books";
import { SFTantraList } from "./SixtyFourTantras/SFTantras";
import { GuruPage } from "./GuruPage/GuruPage";
import { GuruParampara } from "./GuruParampara/GuruParampara";

const MainRouter = function(){

    return (<Routes>
                <Route 
                    index 
                    path="/My-Shaiva-Darshana/"
                    element={<HomePage />}
                /> 
                <Route 
                    path="/My-Shaiva-Darshana/literature/books" 
                    element={<BooksPage />}
                /> 
                <Route 
                    path="/My-Shaiva-Darshana/literature-list" 
                    element={<SFTantraList />}
                /> 
                <Route 
                    path="/My-Shaiva-Darshana/personalities" 
                    element={<GuruPage />}
                /> 
                <Route 
                    path="/My-Shaiva-Darshana/guru-parampara" 
                    element={<GuruParampara />}
                /> 
            </Routes>);

}

export {MainRouter}