import { useEffect, useState } from "react";

const ScrollProgress = () => {

    const [width,setWidth]=useState(0);

    useEffect(()=>{

        const scroll=()=>{

            const total=document.documentElement.scrollHeight-window.innerHeight;

            const progress=(window.scrollY/total)*100;

            setWidth(progress);

        }

        window.addEventListener("scroll",scroll);

        return()=>window.removeEventListener("scroll",scroll)

    },[])

    return(

<div
style={{width:`${width}%`}}
className="fixed top-0 left-0 h-1 bg-indigo-500 z-9999"
/>

    )

}

export default ScrollProgress;