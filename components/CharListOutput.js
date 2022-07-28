
import { useEffect, useRef, useState } from "react"

const CharListOutput = ({charList, setCharList, nextCharacter, setNextCharacter}) => {
    // const [activeChar, setActiveChar] = useState()
    // console.log(nextCharacter)

    const testRef = useRef(null) 

    useEffect(() => {
        // console.log('next char upated')
        if(nextCharacter != 0) {
            testRef.current.scrollIntoView({behavior: "smooth", block: "center"});
        }
    },[nextCharacter])

    // const testRef = useRef()

    // const scrollToActive = () => {
    //     testRef.scroll
    // }

    if(!charList) {
        <p>loading</p>
    } else {
        const list1 = 
            charList.map((char, index) => {
                if(nextCharacter == index){
                    return <li ref={testRef} className="text-lg px-4 bg-primary-red rounded-xl font-bold tracking-wider text-white" value={index} key={char.id}> {char.name }</li>
                } else{
                    return <li className="text-lg px-4 bg-light-gray" value={index} key={char.id}>{char.name} and {index}</li>
                }
            })
        
        return(
            <div className="">
                <h2 className="text-2xl text-center font-semibold text-primary-red mb-3 underline underline-offset-4 decoration-secondary-gray md:text-left ">Character List</h2>
                <ul className="">
                    { list1 }
                </ul>
            </div>
        )

    }

   
}

export default CharListOutput;