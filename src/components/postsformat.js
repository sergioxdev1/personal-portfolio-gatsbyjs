import React from "react";

export default (props) => (
    <li className="flex items-center p-2">
        <div className="flex-1 bg-gray-200 p-2 shadow-outline overflow-x-hidden rounded-lg">
            <header className=" h-32 shadow bg-cover bg-center" style={{backgroundImage: `url(${props.posts.thumbnail})`}}></header>
            <h4 className="text-teal-600 font-semibold text-large"> {props.posts.title} </h4>
            <div className="flex-1 text-right mr-2 text-teal-600 mt-4">
            <a className="text-sm font-bold bg-gray-400 px-4 py-1 rounded-full" href={props.posts.link} target="_blank" rel="noopener noreferrer"> Leer </a>
            </div>
        </div>
    </li>
);