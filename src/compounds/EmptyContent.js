import { React } from 'react';
import loadingIcon from '../images/loading.svg';
import errorIcon from '../images/error.svg';
import futureIcon from '../images/futureFeature.svg';
import phrases from '../constants/phrases';

const EmptyContent = (props) => {
    const getIcon = () => {
        switch (props.contentType) {
            case phrases.LOADING:
                return loadingIcon
            case phrases.ERROR:
                return errorIcon
            case phrases.FUTURE:
                return futureIcon
            default:
                return null
        }
    };

    return (
        <section className="text-white bg-gray-900">
            <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
                <img
                    alt="Empty content page icon"
                    src={getIcon()}
                    className="w-fit h-80"
                />
                <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                    {phrases[props.title]}
                </h1>

                <h5 className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                    {phrases[props.subtitle]}
                </h5>

                <p className="p-10">
                    {phrases[props.body]}
                </p>

                </div>
            </div>
        </section>
    )
};



export default EmptyContent;