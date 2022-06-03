import { useState } from "react";

const getPercentage = (steps) => steps*100;
const defaultButton = ({onClick, title}) => {
    return <button className="text-white p-3 border border-white w-40 rounded hover:bg-white hover:text-gray-900 transition-all" onClick={onClick}>{title}</button>
}

const OnePageSlide = ({ pages, prevBtn, nextBtn }) => {
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
            <div className="absolute flex justify-center items-center bottom-16 left-96">
                {
                    prevBtn ? prevBtn : defaultButton({onClick: handlePrevPage, title: "Prev Page"})
                }
            </div>
            <div className="absolute flex justify-center items-center bottom-16 right-96">
                {
                    nextBtn ? nextBtn : defaultButton({onClick: handleNextPage, title: "Next Page"})
                }
            </div>
        </div>
    )
}
export default OnePageSlide;
