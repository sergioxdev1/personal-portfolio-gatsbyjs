// import reposlist from '../data/repoexamplefreddy.js';
import React, { useEffect, useState} from "react"
import Repoformat from '../components/repositoryformat.js';



export default () => {

    const [repos,setRepos] = useState([]);
    const [reposCount,setReposCount] = useState([]);

    useEffect( ()=>{

        const data = sessionStorage.getItem("repos");
        let myRepos;

        if(data){ // Si hay datos guardados en sessionStorage no vuelvas a pedirlos por el webService
            myRepos = JSON.parse(data);
            
            setReposCount(myRepos.length);
            
            myRepos = myRepos.slice(1,7); // Muestrame solo 6 elementos del arreglo (del 1 al 6)
            
            return setRepos(myRepos);
        }

        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/freddier/repos");
            myRepos = await response.json();
            
            setReposCount(myRepos.length);

            sessionStorage.setItem("repos", JSON.stringify(myRepos) );
        
            setRepos(myRepos);
        }
            fetchRepos();
    },[]);

    return(
        <div className="max-w-4xl mx-auto pt-4">
            <header className="text-center"> 
            <h2 className="text-2xl font-bold">Portafolio Open Source</h2>
            <p className=" text-gray-500 text-xs">Los repositorio se obteniene consumiendo la API de GITHUB</p>
            </header>

            <ul className="repos-col">
                {
                    repos.map((repo)=>{
                        return < Repoformat repo={repo} key={repo.id} />
                    })
                }
            </ul>
            <div className="mt-4 mb-8 text-center">
            <a href="https://github.com/SergioPixcomp" target="_blank" rel="noopener noreferrer" className="btn">Ver los otros {reposCount} proyectos</a>
            </div>
        </div>
        );
}