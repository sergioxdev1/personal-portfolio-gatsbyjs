import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
    const data = useStaticQuery(graphql`{
            codigofacilitoJson{
                data{
                    courses{
                        title
                        progress
                        url
                    }}}
        }`);
    
        console.log(data);
    return (
        <section className="bg-gray-200">
            <div className="mt-12 p-4">
                <div className="max-w-4xl mx-auto text-center my-auto">
                
                <h2 className="text-2xl font-bold mt-4">Cursos Online</h2>
                <p className=" text-gray-500 text-xs">Los cursos se obtienen de un XML consumido con GraphQL</p>
                <div className="flex mt-4">
                    {
                        data.codigofacilitoJson.data.courses.map(courses =>(
                        <div className="shadow p-4 bg-white mr-2 rounded">
                        <h4 className="font-bold">
                            <a href={courses.url} target="_blank" rel="noopener noreferrer">{courses.title}</a></h4>
                            <div className="text-center text-sm">
                                <span className="inline-block bg-indigo-200 text-gray-800 p-2 mt-2 radius"> Progreso: 
                                    {parseInt(courses.progress)} % </span>
                            </div>
                        </div>
                        ))
                    }
                </div>
                </div>
            </div>

        </section>
    );
}