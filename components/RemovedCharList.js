


const RemovedCharList = ({selectedCharacterList, settings, charList, removedChars}) => {
    // console.log(removedChars)

    if(settings) {
        return(
        <div className=" max-w-sm mx-auto md:ml-80 lg:mx-auto lg:fixed lg:top-[140px] lg:left-[73%]  lg:w-64 xl:left-[78%] ">
            <div className="disabled-height bg-light-gray border-2 border-secondary-gray rounded-lg">
                <p className="text-lg text-secondary-red font-semibold py-2 px-3 md:text-center">Characters To Be Disabled:</p>
                <ul className="text-center mx-auto ">
                    {
                        charList.map((char) => {
                            if(selectedCharacterList.includes(char.id)) {
                                return(
                                    <li className="px-12" key={char.id}>{char.name}</li>
                                )
                            }
                    })
                    }
                </ul>
            </div>

            <div className="disabled-height mt-6 mb-4 bg-light-gray border-2 border-secondary-gray rounded-lg">
                <p className="text-lg text-secondary-red font-semibold py-2 px-3 md:text-center">Disabled Characters:</p>
                <ul className="text-center mx-auto">

                    {
                        removedChars.map((char, index) =>{
                            return(
                                <li className="px-12" key={index}>{ char }</li>
                            )
                        })
                    }
                    

    
                </ul>
            </div>

            
        </div>
        
    )
    }

    // return(
    //     <div className=" max-w-sm mx-auto md:ml-80 lg:mx-auto lg:fixed lg:top-[140px] lg:left-[75%]  lg:w-64 xl:left-[80%] ">
    //         <div className="disabled-height bg-light-gray border-2 border-secondary-gray rounded-lg">
    //             <p className="text-lg text-secondary-red font-semibold py-2 px-3 md:text-center">Characters To Be Disabled:</p>
    //             <ul className="text-center mx-auto ">
    //                 {
    //                     charList.map((char) => {
    //                         if(selectedCharacterList.includes(char.id)) {
    //                             return(
    //                                 <li className="px-12" key={char.id}>{char.name}</li>
    //                             )
    //                         }
    //                 })
    //                 }
    //             </ul>
    //         </div>

    //         <div className="disabled-height mt-6 mb-4 bg-light-gray border-2 border-secondary-gray rounded-lg">
    //             <p className="text-lg text-secondary-red font-semibold py-2 px-3 md:text-center">Disabled Characters:</p>
    //             <ul className="text-center mx-auto">

    //                 {
    //                     removedChars.map((char, index) =>{
    //                         return(
    //                             <li className="px-12" key={index}>{ char }</li>
    //                         )
    //                     })
    //                 }
                    

    
    //             </ul>
    //         </div>

            
    //     </div>
        
    // )
}

export default RemovedCharList