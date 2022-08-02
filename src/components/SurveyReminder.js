import { React } from 'react';
import phrases from '../constants/phrases';


const SurveyReminder = () => {
    return (
        <div className="fixed inset-x-0 bottom-0 px-4 pb-3">
            <div className="relative px-4 py-3 text-white bg-teal-600 rounded-lg pr-14">
                <p className="text-sm font-medium text-left sm:text-center">
                    {phrases.SURVEY_PROMPT}
                    <a 
                        className="underline" 
                        href="https://forms.gle/pLegiwR99FcFEfUh6"
                        target="_blank"
                    >
                        {phrases.SURVEY_ACTION} &rarr; 
                    </a>
                </p>

                {/* <button
                aria-label="Close"
                className="absolute p-1 transition -translate-y-1/2 rounded-lg top-1/2 right-4 bg-black/10 hover:bg-black/20"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                        />
                    </svg>
                </button> */}
            </div>
        </div>
    )
}

export default SurveyReminder;