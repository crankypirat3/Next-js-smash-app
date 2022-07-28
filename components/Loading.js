
import { SyncLoader } from "react-spinners";

const Loading = () => {
    return(
        <div className="h-screen w-full flex justify-center items-center bg-gray-50">
            <SyncLoader 
                size={20}
                margin={10}
                color={'#D90429'}
                speedMultiplier={.7}
            />
        </div>
    )
}

export default Loading;