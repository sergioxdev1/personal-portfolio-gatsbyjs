import React from "react"
import logo from '../imgs/header-logo.svg';

export default () => (
<header className="bg-gray-200">
    <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center">
        <div className="flex-1">
            <h1 className="font-bold text-gray-900 text-4xl">PWA Portfolio</h1>
            <p className="text-xl">GatsbyJS + TailwindCSS + GraphQL</p>
        </div>
        <img src={logo} alt="joven sentado en un escritorio junto a una pc" style={{width: "40%"}} ></img>
    </div>
</header>
);