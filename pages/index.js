import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import InputForm from '../components/InputForm'
import Header from '../components/Header';

import { db } from '../firebase'
import { get, ref } from 'firebase/database'
import { useEffect, useState } from 'react'
import CharListOutput from '../components/CharListOutput'
import SettingsForm from '../components/SettingsFrom'
import Footer from '../components/Footer';
import RemovedCharList from '../components/RemovedCharList';
import Loading from '../components/Loading';

export default function Home() {

  const [charList, setCharList] = useState(null)
  const [nextCharacter, setNextCharacter] = useState(0);   
  const [settings, setSettings] = useState(true);
  const [selectedCharacterList, setSelectedCharacterList] = useState([]);
  const [maxRoll, setMaxRoll] = useState(30);

  const [roll, setRoll] = useState(null);


  const [sessionData, setSessionData] = useState()


  const [removedChars, setRemovedChars] = useState([])

  const dbRef = ref(db)

  useEffect(() => {
    if (sessionStorage.getItem("list") != null || undefined) {
      // console.log(JSON.parse(sessionStorage["list"]))
      setCharList(JSON.parse(sessionStorage["list"]))
      setNextCharacter(JSON.parse(sessionStorage.getItem("Next-Character")))
      if(sessionStorage.getItem("To-Be-Disabled")) {
        setSelectedCharacterList(JSON.parse(sessionStorage["To-Be-Disabled"]))
      }
      if(sessionStorage.getItem("Disabled-Characters")) {
        setRemovedChars(JSON.parse(sessionStorage["Disabled-Characters"]))
      }
      // setRemovedChars(JSON.parse(sessionStorage["Disabled-Characters"]))
      // console.log(JSON.parse(sessionStorage["list"]))
    } else {
      createNewGame()
    }
  },[])
  // ############## TODOs ###############
  //    - Ensure hightlighted player does not reset after refresh                 --Done 
  //    - Ensure disabled charectors and set to disable box persits refresh       --Done      
  //    - Ensure all session storage values reset when a new game is created      --Done



  //  ############## TODOs (Long Term) ###############
  //    - Add Tracking for a second player
  //    - Create a how to play page or modal  
  //    - Create accounts to track total match results
  //    - Create a way for accounts to save certain lists and settings 
  const createNewGame = () => {
    get(dbRef, 'characters').then((snapshot) => {
      if (snapshot.exists()) {
        setCharList(snapshot.val().characters);
        sessionStorage.setItem("list", JSON.stringify(snapshot.val().characters))
        setNextCharacter(0);
        sessionStorage.setItem("Next-Character", 0)
        setSelectedCharacterList([])
        sessionStorage.setItem("To-Be-Disabled", [])
        setRemovedChars([])
        sessionStorage.setItem("Disabled-Characters", "")
        setRoll(null)
      } else {
        console.log("No data available");
      }})
  }
  {
    if(charList == null){
      return( <Loading /> )
    } else {
      return (
        <div className='bg-gray-50'>
          <Header settings={settings} setSettings={setSettings} />
          {/* md:fixed md:mt-3 2xl:left-[150px] */}
          <div className='flex flex-col items-center md:fixed md:mt-3 2xl:left-[150px]'>
            <InputForm charList={charList} nextCharacter={nextCharacter} setNextCharacter={setNextCharacter} roll={roll} setRoll={setRoll} maxRoll={maxRoll} />
            <SettingsForm  charList={charList} setCharList={setCharList} settings={settings} setSettings={setSettings} selectedCharacterList={selectedCharacterList} setSelectedCharacterList={setSelectedCharacterList} removedChars={removedChars} setRemovedChars={setRemovedChars} maxRoll={maxRoll} setMaxRoll={setMaxRoll} />
            <button className='px-4 py-3 bg-primary-red text-white font-semibold tracking-wide my-3 rounded-xl' onClick={createNewGame}>New Game </button>          
          </div>

          <div className=' border-2 px-4 rounded-2xl mx-auto my-4 md:pb-6 md:ml-72 max-w-md lg:mx-auto xl:max-w-2xl '>        
            <CharListOutput charList={charList} setCharList={setCharList} nextCharacter={nextCharacter} setNextCharacter={setNextCharacter} />
          </div>
          <div className='mx-auto'>
            <RemovedCharList charList={charList} settings={settings} selectedCharacterList={selectedCharacterList} setSelectedCharacterList={setSelectedCharacterList} removedChars={removedChars} />
          </div>
        </div>
      )
    }
  }
}
