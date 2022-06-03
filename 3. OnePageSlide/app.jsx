import { useState } from "react";

const getPercentage = (steps) => steps*100;

const OnePageSlide = ({ pages }) => {
    const pagination = pages.length-1;
    const [percentage, setPercentage] = useState(1);
    const handlePrevPage = () => {
        if (percentage <= 0){
            alert("This is the first page");
            setPercentage(0);
        }else{
            setPercentage(percentage-1);
        }
    }
    const handleNextPage = () => {
        if (getPercentage(percentage) >= getPercentage(pagination)){
            alert("This is the last page");
            setPercentage(pagination);
        }else{
            setPercentage(percentage+1);
        }
    }
    return (
        <div className="h-screen w-auto bg-gray-900 flex justify-center items-center">
            <div className="w-auto overflow-hidden">
                
                {/* Pages start */}
                <div style={{transform: `translateX(-${getPercentage(percentage)}%)`}} className="flex flex-nowrap transition-all" >
                {
                    pages.map((v, k)=>{
                        return (
                            <div key={k} className="w-screen flex-none flex justify-center items-center">
                                {v}
                            </div>
                        );
                    })
                }
                {/* Pages end */}
                </div>
            </div>
            <div className="absolute h-20 w-20 flex justify-center items-center bottom-16 left-96">
                <button onClick={handlePrevPage} className="text-white">Prev page</button>
            </div>
            <div className="absolute h-20 w-20 flex justify-center items-center bottom-16 right-96">
                <button onClick={handleNextPage} className="text-white">Next page</button>
            </div>
        </div>
    )
}
export default OnePageSlide;
