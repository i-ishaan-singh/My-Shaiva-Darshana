import { Routes, Route} from "react-router-dom";
import { HomePage } from './HomePage/HomePage';
import { BooksPage } from "./LiteratureBooks/Books";
import { SFTantraList } from "./SixtyFourTantras/SFTantras";
import { GuruPage } from "./GuruPage/GuruPage";
import { GuruParampara } from "./GuruParampara/GuruParampara";
import { KeyConcepts } from "./TrikaMandala/KeyConcepts";
import { useQueryParms } from "../Utils/Query/useQueryParams";
import React from "react";
import { useNavigate } from 'react-router-dom'
import { HistoryKashmir } from "./History/History";
import { Lost } from "./Lost/Lost";
import { PersonalitiesList } from "./PersonalitiesList/PersonalitiesList";
import { Concepts } from "./KeyConcepts/Concepts";
import { Pilgrimages } from "./Pilgrimages/Pilgrimages";

const MainRouter = function(){

    const {redirect} = useQueryParms();
    const navigate = useNavigate();

    React.useEffect(function(){
        if(redirect){
            navigate(window.decodeURIComponent(redirect))
        }
    },[redirect, navigate])

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
                <Route 
                    path="/My-Shaiva-Darshana/key-concepts" 
                    element={<KeyConcepts />}
                /> 
                <Route 
                    path="/My-Shaiva-Darshana/pilgrimage" 
                    element={<Pilgrimages />}
                /> 
                <Route 
                    path="/My-Shaiva-Darshana/history" 
                    element={<HistoryKashmir />}
                /> 
                <Route 
                    path="/My-Shaiva-Darshana/personalities-list" 
                    element={<PersonalitiesList />}
                /> 
                <Route 
                    path="/My-Shaiva-Darshana/key-concepts-list" 
                    element={<Concepts />}
                /> 
                <Route 
                    path="/My-Shaiva-Darshana/*" 
                    element={<Lost />}
                /> 
            </Routes>);

}

export {MainRouter}