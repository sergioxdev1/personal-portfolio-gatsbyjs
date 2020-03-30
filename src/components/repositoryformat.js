import React from "react";

export default (props) => (
    <li className="flex items-center p-2">
        <div className="flex-1 bg-gray-200 p-2 shadow overflow-x-hidden">
            <h4 className="text-teal-600 font-semibold text-lg truncate">{ props.repo.name }</h4>
            <p className="text-sm text-gray-700 overflow-y-hidden mb-4" style={{height:"1.5em"}}>{ props.repo.description }</p>
            <div className="flex-1 text-right mr-2 text-teal-600">
            <a className="text-sm font-bold bg-gray-400 px-4 py-1 rounded-full" href={props.repo.html_url} target="_blank" rel="noopener noreferrer"> Ver </a>
            </div>
        </div>
    </li>
);