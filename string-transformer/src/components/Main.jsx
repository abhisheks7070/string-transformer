import React, { useState } from 'react'

const Main = () => {

    const [text, setText] = useState(0)

    const lowerCase = ()=>{
        let arr  = text.split(" ")
        arr.arr.forEach(element => {
            arr[0] = arr[0].toLowecase()
        });
    }



    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <input className='border-black border-2 w-10' type="text" placeholder='Enter the text' onChange={(e) => { setValue(e.target.value) }} />
            </div>
            <div>
                <div>Lower Case</div>
                <input className='border-black border-2 w-10' type="text" placeholder='Enter the text' onChange={(e) => { setValue(e.target.value) }} />

            </div>
        </div>
    )
}

export default Main
