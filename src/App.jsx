import React , { useEffect, useState } from 'react'
import Header from './assets/components/Header'
import Profile from './assets/components/Profile'
import Main from './assets/components/Main'


const App = () => {

    return(
      <>

      <div className='w-full h-16 sm:h-20 lg:h-28'></div>
      <Header />
      <div 
        className='w-full flex flex-col items-center gap-4 mt-4 px-4
          lg:flex-row lg:justify-center lg:items-start lg:gap-4 lg:mt-4 lg:px-28'>
        <Profile />
        <Main />
      </div>
      </>
    )

}

export default App