import { React } from 'react';
import { NavBar } from '../components';
import team from '../constants/teams'
import phrases from '../constants/phrases';
import steve from '../images/steve.png';
import brian from '../images/brian.jpeg';
import phanh from '../images/phanh.jpg';
import bu from '../images/bu.jpg';
import alan from '../images/alan.png';
import tram from '../images/tram.png';

const About = (props) => {
    return (
        <div>
            <NavBar active={phrases.MENU_ABOUT}/>
            <section className="bg-white">
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
                    <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        {phrases.ABOUT_TITLE}
                    </h2>

                    <p className="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
                        {phrases.ABOUT_SUBTITLE}
                    </p>
                    </div>

                    <div
                    className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16"
                    >
                    <div>
                        <img
                        src={steve}
                        alt="Steve"
                        className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
                        />

                        <blockquote
                        className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl"
                        >
                        <p className="text-lg font-bold text-gray-700">{team.STEVE.NAME}</p>
                        <p className="mt-1 text-xs font-medium text-gray-500">
                            {team.STEVE.TITLE}
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                            {team.STEVE.DESCRIPTION}
                        </p>

                        </blockquote>
                    </div>

                    <div>
                        <img
                        src={brian}
                        alt="Brian"
                        className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
                        />

                        <blockquote
                        className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl"
                        >
                        <p className="text-lg font-bold text-gray-700">{team.BRIAN.NAME}</p>
                        <p className="mt-1 text-xs font-medium text-gray-500">
                            {team.BRIAN.TITLE}
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                            {team.BRIAN.DESCRIPTION}
                        </p>

                        
                        </blockquote>
                    </div>

                    <div>
                        <img
                        src={bu}
                        alt="Hieu (Bu)"
                        className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
                        />

                        <blockquote
                        className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl"
                        >
                        <p className="text-lg font-bold text-gray-700">{team.BU.NAME}</p>
                        <p className="mt-1 text-xs font-medium text-gray-500">
                            {team.BU.TITLE}
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                            {team.BU.DESCRIPTION}
                        </p>

                        
                        </blockquote>
                    </div>

                    <div>
                        <img
                        src={phanh}
                        alt="Anh"
                        className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
                        />

                        <blockquote
                        className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl"
                        >
                        <p className="text-lg font-bold text-gray-700">{team.ANH.NAME}</p>
                        <p className="mt-1 text-xs font-medium text-gray-500">
                            {team.ANH.TITLE}
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                            {team.ANH.DESCRIPTION}
                        </p>

                        
                        </blockquote>
                    </div>

                    <div>
                        <img
                        src={alan}
                        alt="Alan"
                        className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
                        />

                        <blockquote
                        className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl"
                        >
                        <p className="text-lg font-bold text-gray-700">{team.ALAN.NAME}</p>
                        <p className="mt-1 text-xs font-medium text-gray-500">
                            {team.ALAN.TITLE}
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                            {team.ALAN.DESCRIPTION}
                        </p>

                        
                        </blockquote>
                    </div>

                    <div>
                        <img
                        src={tram}
                        alt="Tram"
                        className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
                        />

                        <blockquote
                        className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl"
                        >
                        <p className="text-lg font-bold text-gray-700">{team.TRAM.NAME}</p>
                        <p className="mt-1 text-xs font-medium text-gray-500">
                            {team.TRAM.NAME}
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                            {team.TRAM.DESCRIPTION}
                        </p>

                        
                        </blockquote>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    )
};

export default About;