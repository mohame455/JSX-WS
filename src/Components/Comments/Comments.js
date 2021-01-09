import React from 'react';
const Comments = () => {
    const commentList = [
        {
            name: 'Emna',
            body: "This is probably the clearest I've ever watched anyone explain async/await and promises before. Well done!"
        },
        {
            name: 'Mohamed',
            body: "This morning I was looking for Promises, and your notification poped up. This must be some sign :D"
        },
        {
            name: 'Ahmed',
            body: "Seeing Sweet Anita in your recommendations definitely caught me off guard lmao"
        },
        {
            name: 'Houssem',
            body: "Me: Ah, I too am a man of culture"
        },
        {
            name: 'Ghassen',
            body: "This is probably the clearest I've ever watched anyone explain async/await and promises before. Well done!"
        },
        {
            name: 'Khalil',
            body: "This is probably the clearest I've ever watched anyone explain async/await and promises before. Well done!"
        },
    ]
    return (<div className="col-md-7">
        {commentList.map((el, key) => <div key={key}>
            <h6>{el.name}</h6>
            <p>{el.body}</p>
        </div>)}
    </div>);
}

export default Comments;