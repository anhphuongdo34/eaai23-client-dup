import { React } from "react";
import phrases from "../constants/phrases";


const SideMenu = (props) => {
    const styleActive = "block px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg";
    const styleOther = "block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700";

    return props.showMenu && (
        <nav
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (props.showMenu
                ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
            >
            <section
                className={
                " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                (props.showMenu ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <div className="flex justify-between">
                    <header className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400 p-1.5 absolute top-3 left-2.5">
                        {phrases.MENU}
                    </header>
                    <button 
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                        onClick={props.closeMenu}
                    >
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                </div>
                <div className="flex flex-col space-y-1 mt-20">
                    <a
                        href="/"
                        className={props.active === phrases.MENU_HOME ? styleActive : styleOther}
                    >
                        {phrases.MENU_HOME}
                    </a>

                    <a
                        href="/capture"
                        className={props.active === phrases.MENU_CAPTURE ? styleActive : styleOther}
                    >
                        {phrases.MENU_CAPTURE}
                    </a>

                    <a
                        href="/futureFeature"
                        className={props.active === phrases.MENU_PROFILE ? styleActive : styleOther}
                    >
                        {phrases.MENU_PROFILE}
                    </a>

                    <a
                        href="/about"
                        className={props.active === phrases.MENU_ABOUT ? styleActive : styleOther}
                    >
                        {phrases.MENU_ABOUT}
                    </a>

                    <a
                        href="https://forms.gle/pLegiwR99FcFEfUh6"
                        target="_blank"
                        className={props.active === phrases.MENU_SURVEY ? styleActive : styleOther}
                    >
                        {phrases.MENU_SURVEY}
                    </a>

                    <a
                        href="/futureFeature"
                        className={props.active === phrases.MENU_LOGIN ? styleActive : styleOther}
                    >
                        {phrases.MENU_LOGIN}
                    </a>

                </div>
            </section>
        </nav>  
    )
};



export default SideMenu;