import { React } from "react"
import phrases from "../constants/phrases";
import tooltip from "../images/tooltip.svg";
import emotion from "../images/emotion.svg";

const EmotionResult = (props) => (
    <div
    className="block p-4 rounded-lg shadow-sm shadow-indigo-100 mt-8"
    >
        <img
            alt="captured user's facial expression"
            src={props.user_image}
            className="object-cover max-w-sm min-w-full rounded-md"
        />

        <div className="mt-2">
            <dl>
            <div>
                <dt className="sr-only">
                Image subtitle
                </dt>

                <dd className="text-sm text-gray-500">
                {phrases.RESULT_IMG}
                </dd>
            </div>

            <div className="flex justify-start">
                <dt className="sr-only">
                Prediction Results
                </dt>

                <dd className="font-medium mr-4">
                {phrases.RESULT_TITLE}
                </dd>

                <button onClick={props.openGraph} >
                    <img
                        alt="tooltip"
                        src={tooltip}
                        className="w-4 h-4"
                    />
                </button>
            </div>
            </dl>

            <dl className="flex items-center mt-6 space-x-8 text-xs">
                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                    <svg
                    className="w-4 h-4 text-indigo-700"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>

                    <div className="sm:ml-3 mt-1.5 sm:mt-0">
                    <dt className="text-gray-500">
                        {phrases.RESULT_VALENCE}
                    </dt>

                    <dd className="font-medium">
                    {props.predicted_valence.toFixed(4)}
                    </dd>
                    </div>
                </div>

                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                    <svg
                    className="w-4 h-4 text-indigo-700"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>

                    <div className="sm:ml-3 mt-1.5 sm:mt-0">
                    <dt className="text-gray-500">
                        {phrases.RESULT_AROUSAL}
                    </dt>

                    <dd className="font-medium">
                    {props.predicted_arousal.toFixed(4)}
                    </dd>
                    </div>
                </div>

                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                    <img 
                        src={emotion}
                        className="w-4 h-4"
                    />

                    <div className="sm:ml-3 mt-1.5 sm:mt-0">
                    <dt className="text-gray-500">
                        {phrases.RESULT_EMOTION}
                    </dt>

                    <dd className="font-medium">
                    {props.predicted_emotion}
                    </dd>
                    </div>
                </div>
            </dl>
        </div>
    </div>
);


export default EmotionResult;