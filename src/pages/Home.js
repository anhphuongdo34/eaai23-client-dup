import { React, useState } from "react";
// import { AUTHORIZE_URL } from '../api/config'
import { NavBar } from '../components'
import { ConsentForm } from "../compounds";
import phrases from "../constants/phrases";


const Home = () => {
    const [showConsent, setShowConsent] = useState(false);
    
    const openConsent = (e) => {
        e.preventDefault();
        setShowConsent(true);
    }

    const closeConsent = () => {
        setShowConsent(false);
    }

    return (
        <div>
            <NavBar active={phrases.MENU_HOME}/>
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 mt-20">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-2xl font-bold text-center sm:text-3xl">{phrases.APP_TITLE}</h1>

                    <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
                        {phrases.APP_DESCRIPTION}
                    </p>

                    <form className="text-center p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
                        <p className="text-lg font-medium mb-10">{phrases.APP_START}</p>

                        <div>
                            <div className="relative mt-1">
                            <button
                                className="w-full p-4 text-sm border-gray-200 font-medium text-white bg-gray-800 rounded-lg shadow-sm disabled"
                                disabled
                            >
                                {phrases.CONNECT_SPOTIFY}
                                {/* <a href={AUTHORIZE_URL}></a> */}
                            </button>
                            </div>
                        </div>

                        <div>
                            <div className="relative mt-1">
                                <button
                                    className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm font-medium text-white bg-teal-600"
                                >
                                    <a href="/guestAuthorize">{phrases.CONTINUE_GUEST}</a>
                                </button>
                            </div>
                        </div>
                        <div>
                            <button
                                className="text-sm text-gray-500 underline"
                                onClick={openConsent}
                            >
                                {phrases.CONSENT_PROMPT}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ConsentForm
                showConsent={showConsent}
                closeConsent={closeConsent}
            />
        </div>
    );
}



export default Home