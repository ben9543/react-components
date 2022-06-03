// Need to install tailwind css
import { useState } from "react";
const OnePageSlide = () => {
    //const []
    return (
        <div className="h-screen w-auto bg-gray-900 flex justify-center items-center">
            <div className="w-auto flex flex-nowrap overflow-hidden">
                
                {/* Pages start */}
                <div className="w-screen flex-none flex justify-center items-center">
                    <div className="rounded bg-gray-100 h-96 w-72 flex justify-center items-center">
                        <p>page one</p>
                    </div>
                </div>
                <div className="w-screen flex-none flex justify-center items-center">
                    <div className="rounded bg-gray-100 h-96 w-72 flex justify-center items-center">
                        <p>page two</p>
                    </div>
                </div>
                {/* Pages end */}

            </div>
            <div className="absolute h-20 w-20 flex justify-center items-center bottom-16 left-96">
                <button className="text-white">Prev page</button>
            </div>
            <div className="absolute h-20 w-20 flex justify-center items-center bottom-16 right-96">
                <button className="text-white">Next page</button>
            </div>
        </div>
    )
}
export default OnePageSlide;
