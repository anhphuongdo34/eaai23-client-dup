import { React } from 'react';
import { NavBar } from '../components';
import phrases from '../constants/phrases';


const Survey = () => {

    return (
        <div>
            <NavBar active={phrases.MENU_SURVEY}/>
            <div className="mt-20 flex justify-center">
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSevjoPtl5g_GSNONoPYuI4PLnARbDAbiDpbPuGjQdonrV7TnA/viewform?embedded=true" 
                width="640" 
                height="1200" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0"
            >
                Loading…
            </iframe>
            </div>
        </div>
    )
};

export default Survey;