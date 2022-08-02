import React from "react";

const RangeSlider = (props) => {
    const [sliderVal, setSliderVal] = React.useState(0);

    const handleSliderChange = (event) => {
        setSliderVal(event.target.value)
        props.handleRatingChange(props.emotion, sliderVal)
    }

    return (
        <div className="">
            <input 
                type="range" 
                min="-1" 
                max="1" 
                step="0.01" 
                value={sliderVal} 
                id="myRange" 
                onChange={handleSliderChange} 
                onClick={handleSliderChange}
            />
        </div>
    )
}

export default RangeSlider