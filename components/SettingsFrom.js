
import { useEffect, useState } from "react"




const SettingsForm = ({charList, setCharList, settings, selectedCharacterList, setSelectedCharacterList, setRemovedChars, removedChars, setToBeRemovedChars, maxRoll, setMaxRoll}) => {

    
    const [defaultValue, setDefaultValue] = useState()
    
    useEffect(() =>{
        setDefaultValue(charList[0])
    },[charList])
   
    const handleDisableCharacterSelect = (e) => {
        let temp = e.target.value;
        setSelectedCharacterList( selectedCharacterList => [...selectedCharacterList, temp]);
        // console.log(selectedCharacterList)
    }

    const funted = () => {
        charList.map((char) => {
            if(selectedCharacterList.includes(char.id)) {
                setRemovedChars( removedChars => [...removedChars, char.name])
            }
        })
        // console.log("done")
    }

    const handleDisable = (e) => {
        e.preventDefault()
        // setRemovedChars(selectedCharacterList); 
        funted()
        const temp = charList.filter((char) => !selectedCharacterList.includes(char.id));
        

        setCharList(temp);

        

    } 

    // const handleMaxRollChange = (e) => {
    //     console.log(e.target.value)
    // }

    const reverseList = (e) => {
        e.preventDefault()
        let reverseListVariable = charList.reverse();
        setCharList([...reverseListVariable]);          // Read Up on Spread Operator and Reverse Method       
    }

    const shuffleList = (e) => {
        e.preventDefault()
        // console.log("Shuffle")
        setCharList([...shuffleAlgo(charList)]);        
    }

    const shuffleAlgo = (array) => {                    // Read up on Fischer-Yates Randomizer Array
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const handleMaxRollChange = (e) => {
        // console.log(e.target.value)
        setMaxRoll(e.target.value)
        // console.log(maxRoll)
    }
    
        { if (settings) {     
            return(
                <form className="bg-primary-red w-[240px] flex flex-col rounded-2xl">
                    <h2 className="text-lg text-gray-50 font-bold text-center pt-3 pb-2">Settings</h2>
                    <label className="text-gray-50 font-semibold px-2 mt-2 mb-2">Disable Characters: </label>
                    <select className=" mx-4 rounded-xl px-5 py-1 outline-none hover:cursor-pointer" type="select" name="previousCharacter" defaultValue={defaultValue} onChange={ handleDisableCharacterSelect } placeholder="Disable Characters">
                        {
                            charList.map((char, index) => {
                                if(char == defaultValue) {
                                    return (
                                        <option className="cursor-pointer" value={char.id} key={char.id} selected> { char.name }</option>
                                    )
                                } else {
                                    return (
                                        <option className="cursor-pointer hover:text-red-500" value={char.id} key={char.id}> { char.name }</option>
                                    )
                                }
                            })
                        }
                    </select>
                    <button onClick={handleDisable} className=" mt-4 mb-3 py-2 px-3 font-bold tracking-wide rounded-xl ml-3 w-20  bg-white  hover:button-hover-effects">Disable</button>
                    
                    <label className="text-gray-50 font-semibold px-2 mt-2 mb-2">Set Max Roll: </label>
                    <input className="text-center mx-4 rounded-xl px-2 py-1 outline-none max-w-[60px] hover:cursor-pointer" type="number" inputMode="numeric" onChange={handleMaxRollChange} />

                    

                    <h2 className="text-gray-50 font-semibold text-center pt-2 pb-2">List Operations:</h2>
                    <div className="grid grid-cols-2">
                        <button className="block bg-light-gray px-3 py-1 my-4 mx-2 rounded-md font-bold  hover:button-hover-effects" onClick={ reverseList }>Reverse </button>
                        <button className="block bg-light-gray px-3 py-1 my-4 mx-2 rounded-md font-bold  hover:button-hover-effects"onClick={ shuffleList }>Shuffle </button>
                    </div>
                    
                </form>
                    )
                }
            }
} 


export default SettingsForm