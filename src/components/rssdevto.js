// https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdev.to%2Ffeed%2Fsergiopixcomp

import React, { useState, useEffect } from 'react';
import Postsformat from '../components/postsformat.js';

export default () =>{

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const data=sessionStorage.getItem('posts');
        if(data){
            setPosts(JSON.parse(data));
        }

        let myPosts;

        async function fetchPosts(){
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40rudyrochag");
            myPosts = await response.json();
            sessionStorage.setItem('posts', JSON.stringify(myPosts.items) );

            setPosts(myPosts.items);
        }
            fetchPosts();

    },[]);

    return(
        <section className="bg-gray-800">
        <div className="max-w-4xl mx-auto pt-8 pb-6">
            <header className="text-center"> 
            <h2 className="text-2xl font-bold text-gray-200">Publicaciones en Dev.To</h2>
            <p className=" text-gray-600 text-xs">Los articulos se obteniene consumiendo el feed RSS de Dev.To</p>

            </header>

            <ul className="repos-col">
                {
                    posts.map((posts)=>{
                        return < Postsformat posts={posts} key={ posts.id} />
                    })
                }
            </ul>
            <div className="mt-4 mb-8 text-center">
            <a href="https://dev.to/sergiopixcomp" target="_blank" rel="noopener noreferrer" className="btn">Ver mi blog</a>
            </div>
        </div>
        </section>
        );
}