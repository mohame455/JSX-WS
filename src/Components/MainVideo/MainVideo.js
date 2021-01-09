import React from 'react';
const MainVideo = () => {
    return (<div className='col-md-7'>
        <div className='row ml-1'>
            <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/vQWlgd7hV4A"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <div className='row mt-2 ml-1'>
                <h3>Learn HTML5 and CSS3 For Beginners - Crash Course</h3>
            </div>
        </div>

    </div>);
}

export default MainVideo;