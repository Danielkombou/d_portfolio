import smile from '../../../public/Image/smile.jpg'
import { useState } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import '../About/about.css'

function AboutMe (props) {

    const [seeMore, setSeeMore] = useState(false)

    function OpenMenu() {
        setSeeMore(true)
        return(
            <div className='card'>
            <p className='incard'>
                I began my journey as a web developer in 2023, and since then I've continued to grow and evolve as a web developer, taking on new challenges and learning the latest technologies along the way. Now, in my early eighteenth, 4 months after starting my web development journey, I'm building FAQs pages, Interactive white Cards using HTML, CSS and JavaScript.
            </p><br />
            <p className='incard'>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p><br />
            <p className='incard'>When I'm not in full-on developer mode, you can find me hovering around on YouTube or on inside FaceBook, witnessing the journey of early startups or enjoying some time. You can follow me on <u>FaceBook</u> where GI share tech-related bites and build in public, or you can follow me on <u>GitHub</u>.</p><br />
            <p className='incard'>Finally, some quick bites about me.</p><br />
            <p className='incard'>• C grade in Computer Science</p>

            </div>
        )
    }

    function CloseMenu() {
        setSeeMore(!seeMore)
    }

    return(
        <>
        <div>
        <div className='container'>
            <div className='curiuos-img'>
            <img src={smile} />
            </div>
            <div className='curiuos-note'>
                <h2>Curiuos about me? here you have it:</h2>
                <p className='incard'>I'm passionate, <u>self-proclaimed</u> who specializes in full stark develoment (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable highly performant code matters to me. For more Info click the button</p>
            </div>
        </div>
        <button className='view' onClick={OpenMenu}>See More</button>
        {seeMore && <OpenMenu/>}
        {seeMore && <Backdrop onCancel={CloseMenu}/>}
        </div>
        </>
    )
}
    
    export default AboutMe;