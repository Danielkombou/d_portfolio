import { useState } from 'react';
import avatar from '../../../public/Image/icon-avatar.png'

function Testimonials() {

    return(
        <>
        <div className='testimonials'>
            <h1>Nice things people have said about me:</h1>
            <div className="testimony">
                <div className="appreciations">
                    <img src={avatar}/>
                    <p>"Job well done! I am really impressed. He is very very good at what he does: I will recommend Sagar and will rehire you in the future for Frontend Development."</p>
                    <h2>Kombou Daniel</h2>
                    <p>Founder - xyz.com</p>
                </div>
                <div className="appreciations">
                    <img src={avatar}/>
                    <p>"Great guy, highly recommended for any Complex front-end Development job! His skills are top-notch and he will be an amazing addition to any team."</p>
                    <h2>Kombou Daniel</h2>
                    <p>Founder - abc.com</p>
                </div>
                <div className="appreciations">
                    <img src={avatar}/>
                    <p>"Sagar was extremely easy and pleasant to work with and he truely cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues."</p>
                    <h2>Kombou Daniel</h2>
                    <p>Freelancer</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Testimonials;