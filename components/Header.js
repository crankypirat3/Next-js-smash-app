import Image from 'next/image';

const Header = ({settings, setSettings}) => {

    const toggleSettings = () => {
        setSettings(!settings);
    }


    return(
        <div className="flex justify-around items-center bg-light-gray border-b border-light-red font-bold tracking-wider  text-dark-blue ">
            <Image 
            src="/Super_Smash_Bros._Ultimate_logo1.svg"
            height={100}
            width={100}
            alt="logo"
            className='cursor-pointer'
            />
            <div>
                <button className="py-8 w-20 mx-2 underline-offset-4 decoration-2 decoration-primary-red hover:underline hover:text-primary-red" onClick={toggleSettings}>Settings</button>
                {/* <button className="py-8 w-20 hover:bg-slate-300">Rules</button> */}
            </div>
        </div>
    )
   
}

export default Header