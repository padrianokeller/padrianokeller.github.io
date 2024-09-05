import { IconContext } from 'react-icons'
import { LuConstruction } from 'react-icons/lu'
import { MdOutlineConstruction } from 'react-icons/md'



const UnderConstruction = () => {

    return(
        <div 
            className='w-full h-[150px]
                flex justify-center items-center
            '
        >
            <div
                className='flex flex-col justify-center items-center w-[200px]
                    border-2 rounded-full dark:border-red-400 border-yellow-500

                '
            >
                <IconContext.Provider
                    value={{
                        style: {
                            fontSize: '42px',
                            strokeWidth: '1px'
                        },
                        className: 'mt-6 dark:text-yellow-300 text-red-600'
                    }}
                >
                    <div>
                        <LuConstruction />
                    </div>
                </IconContext.Provider>
                <span 
                    className='text-sm mb-6 font-medium dark:text-pkGray-200 text-gray-500'
                >
                    Under Construction</span>
            </div>
        </div>
    )

}

export default UnderConstruction