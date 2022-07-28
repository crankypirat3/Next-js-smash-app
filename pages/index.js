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


  const [removedChars, setRemovedChars] = useState([])

  const dbRef = ref(db)

  useEffect(() => {
    get(dbRef, 'characters').then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val().characters);
        setCharList(snapshot.val().characters)
      } else {
        console.log("No data available");
      }})
  },[])
  // console.log(charList)

  {
    if(charList == null){
      return( <Loading />)
    } else {
      return (
        <div className='bg-stone-50'>
          <Header settings={settings} setSettings={setSettings} />
          <div className='flex flex-col items-center md:fixed md:mt-3 2xl:left-[150px]'>
            <InputForm charList={charList} nextCharacter={nextCharacter} setNextCharacter={setNextCharacter} maxRoll={maxRoll} />
            <SettingsForm  charList={charList} setCharList={setCharList} settings={settings} setSettings={setSettings} selectedCharacterList={selectedCharacterList} setSelectedCharacterList={setSelectedCharacterList} removedChars={removedChars} setRemovedChars={setRemovedChars} maxRoll={maxRoll} setMaxRoll={setMaxRoll} />
          </div>

          <div className=' border-2 p-3 rounded-2xl mx-auto my-4 md:pb-6 md:ml-72 max-w-md lg:mx-auto xl:max-w-2xl'>        
            <CharListOutput charList={charList} setCharList={setCharList} nextCharacter={nextCharacter} setNextCharacter={setNextCharacter} />
          </div>
          <div className='mx-auto'>
            <RemovedCharList charList={charList} settings={settings} selectedCharacterList={selectedCharacterList} setSelectedCharacterList={setSelectedCharacterList} removedChars={removedChars} />
          </div>
        </div>
      )
    }
  }
  // return (
    // <div className='bg-stone-50'>
    //   <Header settings={settings} setSettings={setSettings} />
    //   <div className='flex flex-col items-center md:fixed md:mt-3 2xl:left-[150px]'>
    //     <InputForm charList={charList} nextCharacter={nextCharacter} setNextCharacter={setNextCharacter} />
    //     <SettingsForm  charList={charList} setCharList={setCharList} settings={settings} setSettings={setSettings} selectedCharacterList={selectedCharacterList} setSelectedCharacterList={setSelectedCharacterList} removedChars={removedChars} setRemovedChars={setRemovedChars} />
    //   </div>

    //   <div className=' border-2 p-3 rounded-2xl mx-auto my-4 md:ml-72 max-w-md lg:mx-auto xl:max-w-2xl'>        
    //     <CharListOutput charList={charList} setCharList={setCharList} nextCharacter={nextCharacter} setNextCharacter={setNextCharacter} />
    //   </div>
    //   <div className='mx-auto'>
    //     <RemovedCharList charList={charList} selectedCharacterList={selectedCharacterList} setSelectedCharacterList={setSelectedCharacterList} removedChars={removedChars} />
    //   </div>
    // </div>
    
  // )
}
