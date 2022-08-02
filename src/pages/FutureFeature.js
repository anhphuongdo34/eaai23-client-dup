import { React } from 'react';
import { EmptyContent } from '../compounds';
import { NavBar } from "../components";
import phrases from "../constants/phrases";


const FutureFeature = (props) => {
    return (
        <div>
            <NavBar active={phrases.MENU_LOGIN}/>
            <EmptyContent 
                contentType={phrases.FUTURE}
                title={`${phrases.FUTURE}_TITLE`}
                subtitle={`${phrases.FUTURE}_SUBTITLE`}
                body={`${phrases.FUTURE}_BODY`}
            />
        </div>
    )
};

export default FutureFeature;