import React from 'react';
const SuggestionVideo = () => {
    const suggestionList = [
        {
            title: 'Learn Flexbox In 20 Minutes | Learn HTML & CSS | Flexbox Tutorial',
            src: 'https://www.youtube.com/embed/FTlczfR82mQ'
        },
        {
            title: 'React Tutorial For Beginners',
            src: 'https://www.youtube.com/embed/dGcsHMXbSOA'
        },
        {
            title: 'Top 10 CSS Tricks You Didn t Know!',
            src: 'https://www.youtube.com/embed/CxC925yUxSI'
        },
        {
            title: "Top 10 Javascript Tricks You Didn't Know!",
            src: 'https://www.youtube.com/embed/mNJ06S60B9k'
        },
        {
            title: 'Async Javascript Tutorial For Beginners (Callbacks, Promises, Async Await).',
            src: 'https://www.youtube.com/embed/_8gHHBlbziw'
        },
    ]
    return (<div className="col-md-5">
        {suggestionList.map((el, key) => <div key={key} className='row mt-1'>
            <div className="col-md-7">
                <iframe
                    src={el.src}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div className='col-md-5'>
                <h6>{el.title}</h6>
            </div>
        </div>)}

    </div>);
}

export default SuggestionVideo;