import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './style.scss'
function Cards() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4040").then((response) => {
            setPost(response.data);
        });
    }, []);

    return (
        <>  <div className='card-container'>
            <div className='card-text'>
                <h3>Our Teachers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
            </div>
            <div className='cards'>
                {console.log(post)}
                {post.map((element) => {
                    return (



                        <div class="card">
                            <img src={element.imgUrl} />
                            <div class="container">
                                <h4><b>{element.name}</b></h4>
                                <p>{element.title}</p>    
                            </div>
                            <h4>{element.description}</h4>
                        </div>






                    )


                })}
            </div>

        </div>

        </>
    )



}

export default Cards



