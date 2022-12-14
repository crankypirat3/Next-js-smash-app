
import { useEffect, useRef, useState } from "react"

const CharListOutput = ({charList, nextCharacter}) => {
   
    const testRef = useRef(null) 

    useEffect(() => {
        if(nextCharacter != 0) {
            testRef.current.scrollIntoView({behavior: "smooth", block: "center"});
            console.log
        }
    },[nextCharacter])


    // const scrollToActive = () => {
    //     testRef.scroll
    // }

    if(!charList) {
        <p>loading</p>
    } else {
        const list1 = 
            charList.map((char, index) => {
                if(nextCharacter == index){
                    return <li ref={testRef} className="flex text-lg px-4 bg-primary-red rounded-xl font-bold tracking-wider text-white" value={index++} key={char.id}> {char.name }  <span className="ml-auto">{index}</span></li>
                } else{
                    return <li className=" flex text-lg px-4 bg-light-gray" value={index++} key={char.id}>{char.name} <span className="ml-auto">{index}</span></li>
                }
            })
        
        return(
            <div className="">
                <h2 className="text-2xl text-center font-semibold sticky text-primary-red bg-light-gray px-2 py-3 underline underline-offset-4 decoration-secondary-gray md:text-left on">Character List</h2>
                <ul className="max-h-[85vh] overflow-y-scroll no-scrollbar">
                    { list1 }
                </ul>
            </div>
        )

    }

   
}

export default CharListOutput;