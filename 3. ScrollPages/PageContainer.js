import React from "react";
import {useState} from 'react';

export default function PageContainer({pages, weight=100}) {

    const sleepingTime = 500;
    const pageCountMax = pages.length;
    const [pageCount, setPageCount] = useState(1);
    const [move, setMove] = useState(0)

    const handleScroll = event => {
        // const inner = document.getElementById("scroll_inner_container").getBoundingClientRect();
        
        // Control upscroll
        if(pageCount > 1 && event.deltaY < weight*(-1)){
            
            setTimeout(()=>{
                setPageCount(pageCount-1);
                setMove(move+100);
            }, sleepingTime);
            
        
        // Control downscroll
        }else if(pageCount >= 1  && pageCount < pageCountMax && event.deltaY > weight){
            
            setTimeout(()=>{
                setPageCount(pageCount+1);
                setMove(move-100);
            }, sleepingTime);
            
        }
        // console.log(inner);
        // console.log(inner.bottom);
        //console.log(event.target.getBoundingClientRect());
    };

    return(
        <>
            <div onWheel={handleScroll} className="h-screen w-screen overflow-hidden relative">
                <div id="scroll_inner_container" style={{
                    transform: `translateY(${move}vh)`
                }} className="h-auto w-screen absolute transition-all duration-500">
                    {
                        pages.map((v) => v)
                    }
                </div>
            </div>
        </>
    )
}