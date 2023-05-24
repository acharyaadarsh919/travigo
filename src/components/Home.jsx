import React from 'react';
import vg from "../assets/2.webp";
import { AiFillYoutube, AiFillGoogleCircle, AiFillAmazonCircle , AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>Travigo</h1>
                <p>Solutions to all your Problems</p>
            </main>
        </div>

        <div className="home2">
            <img src={ vg } alt="Graphics" />
            <div>
                <p>
                    We are your one and only solution to the tech problems you face every day.We are leading tech companay whose aim is to increase the problem solving ability in children.
                </p>
            </div>
        </div>

        <div className="home3" id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam voluptas, commodi quia a, natus non deleniti, distinctio dolor incidunt nisi ad ipsum rem reprehenderit autem error! Tempore, earum facilis.   
                magnam autem animi iste impedit earum ipsam iure nihil voluptates voluptate eius praesentium repellendus provident explicabo. Aspernatur obcaecati ut praesentium.
                Magni pariatur facere et hic fugiat, voluptate asperiores nemo nobis molestias ad 
                Quia cumque iusto deleniti officia at. Doloribus quaerat voluptatum enim assumenda fugit consequatur sit numquam fugiat molestiae deserunt. Consequuntur quos voluptas voluptates excepturi facilis iusto eum ex animi. Ex, explicabo.</p>
            </div>
        </div>

        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{animationDelay : "0.3s",}}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>
                    <div style={{animationDelay : "0.5s",}}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>
                    <div style={{animationDelay : "0.7s",}}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>
                    <div style={{animationDelay : "1s",}}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Home