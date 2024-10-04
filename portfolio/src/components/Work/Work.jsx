import '../Work/work.css'
import React, { useState } from 'react'
// import project1 from '../../public/Image/project1.png'
// import project2 from '../../public/Image/project2.png'


const Work = () => {
  const [clicked, setClicked] = useState(false)
  const IsClicked = ()=>{
    setClicked(!clicked)
  }
  return (
    <div className='work'>
        <h1>This is my Working Page</h1>
        <h3>Some of the noteworthy projects I have built:</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab, iusto, ipsum ipsam eaque similique iure voluptatibus odio numquam id reiciendis accusantium dolores quaerat ratione atque, a alias. Officia facere omnis nostrum fugiat labore, harum accusantium dolorem debitis excepturi. Aut labore excepturi error asperiores, quod fugiat sint delectus necessitatibus reiciendis recusandae voluptatibus est exercitationem eaque rerum saepe rem minus possimus! Suscipit culpa neque cupiditate consequatur accusamus autem, aliquid dolores ab minima! Fugit assumenda saepe, dolorum mollitia facere labore quae incidunt magnam odio sit quas culpa voluptatibus, laudantium id amet atque. Eaque culpa doloribus modi reprehenderit quasi illum fugit accusamus illo. Facilis modi neque culpa dolores, dolore aliquam labore ducimus et corrupti natus! Labore, error quae quasi commodi aspernatur facere quibusdam delectus reiciendis ducimus sint! Dolores molestias voluptates vero est id dolorum libero commodi optio possimus reprehenderit eaque ad explicabo repudiandae aut voluptatem sequi, earum sint! Molestias laborum deleniti nobis debitis architecto quod, cum ipsam aspernatur mollitia, atque ex hic suscipit laboriosam saepe earum vitae necessitatibus, velit odio libero nemo a aperiam! Mollitia quos quasi deleniti! Veritatis qui aut assumenda dolore a rem incidunt voluptatum? Sint laudantium esse quasi asperiores in veritatis ab recusandae voluptatum ea vel praesentium sapiente vero, atque voluptas perferendis fugit iste animi, quibusdam molestias consequuntur similique, beatae corporis nam. Esse nobis praesentium magni a tempora nulla, quos qui, quibusdam eligendi culpa rem! Corporis dignissimos placeat enim ex voluptatem quis ab aperiam. Temporibus quia ea adipisci velit pariatur quisquam recusandae voluptate dolor. Voluptates repellat et quaerat aspernatur cumque nam voluptate commodi dolor, omnis veniam adipisci harum quos! Nesciunt sed, incidunt accusamus aperiam ab recusandae facere velit nisi earum alias est officia veritatis similique sapiente odio nihil asperiores, placeat fugiat, nam quisquam! Alias veritatis quis quos placeat atque dolorem saepe aliquam animi consequuntur magni neque, nesciunt quam similique ipsam? Exercitationem architecto voluptatum quidem ex eius fuga quod perspiciatis nam nesciunt? Eaque consectetur quis eum enim dolorem doloribus provident quo magnam sunt impedit! Maiores distinctio veritatis rerum nisi repellat perferendis id atque mollitia, illo beatae laborum architecto officia repellendus, et harum ipsa? Nesciunt error magnam dolorem rerum libero quaerat sint ad aspernatur neque nemo voluptate, distinctio debitis praesentium vero mollitia unde quisquam! Aliquid, atque! Magni omnis quidem adipisci culpa enim maiores aliquam reiciendis excepturi aut cupiditate accusamus id molestias fuga qui deserunt animi nulla, dicta quaerat. Ipsa labore earum repudiandae adipisci beatae alias, molestias impedit dolorum ipsum, ullam obcaecati explicabo expedita inventore accusantium laborum ut necessitatibus debitis aperiam totam, fuga atque id saepe! Voluptatem quas voluptatum fugiat fugit facere, in illo hic nostrum cumque iste nesciunt rem maxime ex pariatur totam beatae tenetur quisquam quibusdam ipsum sapiente eum perspiciatis! Sit labore illo earum maxime atque veritatis vero nostrum quaerat eos obcaecati ea deserunt, numquam iste vel minima, dolores ratione doloribus excepturi doloremque. Mollitia, doloribus eius corrupti dolor assumenda suscipit consectetur esse voluptate nisi corporis consequatur, laborum facilis illo molestias quam reiciendis? Accusantium delectus exercitationem saepe? Qui ipsam pariatur odio laudantium dolorem maxime ut tempore quasi, quibusdam rerum, vel, reprehenderit voluptatum?</p>
        <div>
          <button onClick={IsClicked}>click</button>
          {clicked ? <h2>Working Page</h2> : null}
        </div>
    </div>
  )
}

export default Work;