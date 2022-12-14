import { useState, useEffect } from "react"
import { scrollThere } from "./CharListOutput"


const InputForm = ({charList, setNextCharacter,roll, setRoll, maxRoll, previousCharacter,setPreviousCharacter}) => {
    // const [roll, setRoll] = useState(null);
    // const [previousCharacter, setPreviousCharacter] = useState(0)
    const [defaultValue, setDefaultValue] = useState()
    // const [nextCharacter, setNextCharacter] = useState(null);   

    useEffect(() => {
        setDefaultValue(charList[0])
    },[charList])
    
    const handleRoll = (min, max) => {       
        min = 1;
        max = maxRoll;
        const tempRoll = Math.floor(Math.random() * (max - min + 1) + min);
        setRoll(Number(tempRoll))        
    }

    const handleCharacterSelect = (e) => {
        let temp = e.target.value
        setPreviousCharacter(Number(temp))
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();       
        let nextCharacterIndex = previousCharacter + roll; 
        if(previousCharacter + roll > charList.length-1) {
            setNextCharacter(charList.length-1)
            sessionStorage.setItem("Next-Character", charList.length-1)
        } else{
            setNextCharacter(nextCharacterIndex)
            sessionStorage.setItem("Next-Character", nextCharacterIndex)
        }
        // scrollThere()
    }

    {if(!charList) {
        return(
            <p>loading</p>
        )
    } else{
        return(
            <form className="bg-primary-red w-[240px] flex flex-col m-4 rounded-2xl">
                <h2 className="text-lg text-gray-50 font-bold text-center pt-3 pb-2">Smash Dice Game</h2>
                <label className="text-gray-50 font-semibold px-2 mt-4 mb-2">Previous Character:</label>
                <select className=" mx-4 rounded-xl px-5 py-1 outline-none" type="select" defaultValue={defaultValue} name="previousCharacter" onChange={ handleCharacterSelect } placeholder="  Last Character">

                    {
                        charList.map((char, index) => {
                            if(char == defaultValue) {
                                return (
                                    <option value={index} key={char.id} selected> { char.name }</option>
                                )
                            } else {
                                return (
                                    <option value={index} key={char.id}> { char.name }</option>
                                )
                            }
                        })
                    }
                </select>
                <button className=" py-1 text-lg mt-6 ml-4 rounded-lg bg-slate-50 w-[90px] font-semibold hover:button-hover-effects" type="button" onClick={handleRoll}>Roll</button>
                <p className="text-gray-50 font-semibold px-2 mt-4 mb-2">Roll: { roll }</p>
                <button onClick={handleSubmit} className=" mt-6 mb-4 py-2 text-lg font-bold tracking-wide rounded-xl mx-auto w-[100px] bg-white  hover:button-hover-effects">Submit</button>
                
                
            </form>
        )
    }}
}

export default InputForm