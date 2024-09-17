import React, { useState } from 'react'

const Main = () => {

    const [dcase, setDcase] = useState({ "lowerCase": "", "upperCase": "", "camelCase": "", "pascalCase": "", "snakeCase": "", "kebabCase": "", "trim": "" })



    const handleChange = async (e) => {

        setDcase((values) => ({ ...values, ["lowerCase"]: ((e.target.value).split(" ")).map((element) => { return element.toLowerCase() }).join("") }))
        setDcase((values) => ({ ...values, ["upperCase"]: ((e.target.value).split(" ")).map((element) => { return element.toUpperCase() }).join("") }))
        setDcase((values) => ({ ...values, ["snakeCase"]: ((e.target.value).split(" ")).join("_") }))
        setDcase((values) => ({ ...values, ["kebabCase"]: ((e.target.value).split(" ")).join("-") }))
        setDcase((values) => ({
            ...values, ["camelCase"]: ((e.target.value).split(" ")).map((element, i) => {
                if (i == 0) {
                    return element.toLowerCase()
                }
                else {
                    return ((element.split("").map((element, i) => {
                        if (i == 0) {
                            return element.toUpperCase()
                        }
                        else {
                            return element
                        }
                    })).join(""))
                }
            }).join("")
        }))


        setDcase((values) => ({
            ...values, ["pascalCase"]: ((e.target.value).split(" ")).map((element) => {

                return ((element.split("").map((element, i) => {
                    if (i == 0) {
                        console.log(element)
                        return element.toUpperCase()
                    }
                    else {
                        return element
                    }
                })).join(""))
            }).join("")
        }))


        setDcase((values) => ({
            ...values, ["trim"]: ((e.target.value).split(" ")).map((element) => {
                if (element != "") {
                    return element
                }


            }).join("")
        }))

    }

    return (
        <div className='flex flex-col justify-center items-center '>
            <div>
                <input className='w-[70vw] border-2 border-black rounded-lg p-2 mt-4 mb-6 bg-slate-400' type="text" placeholder='Enter the text' onChange={handleChange} />
            </div>
            <div>
                <span className='px-2 py-1 bg-red-500 w-auto mb-2 rounded-md'>Lower Case</span>
                <div className='w-[80vw] border-2 border-black rounded-lg p-2 mt-4 mb-8 h-10'>{dcase.lowerCase}</div>
            </div>
            <div>
                <span className='px-2 py-1 bg-red-500 w-auto mb-2 rounded-md'>Upper Case</span>
                <div className='w-[80vw] border-2 border-black rounded-lg p-2 mt-4 mb-8 h-10'>{dcase.upperCase}</div>
            </div>
            <div>
                <span className='px-2 py-1 bg-red-500 w-auto mb-2 rounded-md'>Camel Case</span>
                <div className='w-[80vw] border-2 border-black rounded-lg p-2 mt-4 mb-8 h-10'>{dcase.camelCase}</div>
            </div>
            <div>
                <span className='px-2 py-1 bg-red-500 w-auto mb-2 rounded-md'>Pascal Case</span>
                <div className='w-[80vw] border-2 border-black rounded-lg p-2 mt-4 mb-8 h-10'>{dcase.pascalCase}</div>
            </div>
            <div>
                <span className='px-2 py-1 bg-red-500 w-auto mb-2 rounded-md'>Snake Case</span>
                <div className='w-[80vw] border-2 border-black rounded-lg p-2 mt-4 mb-8 h-10'>{dcase.snakeCase}</div>
            </div>
            <div>
                <span className='px-2 py-1 bg-red-500 w-auto mb-2 rounded-md'>Kebab Case</span>
                <div className='w-[80vw] border-2 border-black rounded-lg p-2 mt-4 mb-8 h-10'>{dcase.kebabCase}</div>
            </div>
            <div>
                <span className='px-2 py-1 bg-red-500 w-auto mb-2 rounded-md'>Trim</span>
                <div className='w-[80vw] border-2 border-black rounded-lg p-2 mt-4 mb-8 h-10'>{dcase.trim}</div>
            </div>
        </div>
    )
}

export default Main
