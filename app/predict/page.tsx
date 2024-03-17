"use client"
import React from 'react'
import { useState } from 'react'
import { Location } from '../../../constents';
import { prediction } from '../../../api/apis';
import Link from 'next/link';

const Predict = () => {

    // type Details = {
    //     location: string;
    //     area: string;
    //     bhk: string;
    //     baths: string;
    //     parking: string;
    //     type: string;
    // };

    // const initialDetails: Details = {
    //     location: "",
    //     area: "",
    //     bhk: "",
    //     baths: "",
    //     parking: "",
    //     type: "",

    // };

    const [selected, setSelected] = useState<string | null>(null);

    const [type, setType] = useState<string | null>(null);

    return (




        <div className='flex bg-white justify-center '>
            <div className='border p-7 w-full md:w-3/5 shadow'>
                <div className="space-y-12 mt-20">
                    <div className="border-b-2 border-black pb-12">
                        <h2 className="pb-15 text-4xl font-semibold leading-9 text-center text-gray-900">Enter Your Property Details</h2>



                        <div className='content'>
                            {/*-------------------------------------------------------------- Location -------------------------------------------------------------  */}

                            <div className="grid gap-6 mb-6 md:grid-cols-2 pt-8">
                                <form >
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                    >
                                        Location
                                    </label>
                                    <select
                                        id="bhk"
                                        className="bg-white border border-gray-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        {
                                            Location.map((count: string, i: number) => (
                                                <option key={i}>{count}</option>
                                            ))
                                        }
                                    </select>
                                </form>
                            </div>

                            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}










                            {/*---------------------------------------------- Area ---------------------------------------------*/}

                            <form>
                                <div className="grid gap-6 mb-6 md:grid-cols-2 pt-8">
                                    <div>
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                        >
                                            Area
                                        </label>
                                        <input
                                            type="text"
                                            id="Area"
                                            className="bg-white border border-gray-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter the Area in sq feet"
                                        />
                                    </div>
                                </div>
                            </form>


                            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

                            {/* ------------------------------------------------------------BHK------------------------------------------ */}

                            <div className="grid gap-6 mb-6 md:grid-cols-2 pt-8">
                                <form >
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                    >
                                        Select Bhk
                                    </label>
                                    <select
                                        id="bhk"
                                        className="bg-white border border-gray-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>Select Bhk</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </form>
                            </div>


                            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}




                            {/* ------------------------------------------------------------BHK------------------------------------------ */}

                            <div className="grid gap-6 mb-6 md:grid-cols-2 pt-8">
                                <form >
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                    >
                                        Bathroom
                                    </label>
                                    <select
                                        id="bhk"
                                        className="bg-white border border-gray-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>Select Bhk</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </form>
                            </div>


                            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}



                            {/* -----------------------------------------------Parking----------------------------------------------------------- */}
                            <label
                                className="block pt-8 mb-2 text-sm font-medium text-gray-900 dark:text-black"
                            >
                                Parking
                            </label>
                            <div className="grid gap-6 mb-6 md:grid-cols-2 ">

                                <div className="flex border border-gray-300 rounded-md">
                                    <button
                                        className={`flex-1 py-2 px-4 rounded-l-md ${selected === 'yes' ? 'bg-blue-500' : 'bg-gray-300'}`}
                                        style={{ borderRightWidth: selected === 'no' ? 0 : 1 }}
                                        onClick={() => setSelected('yes')}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        className={`flex-1 py-2 px-4 rounded-r-md ${selected === 'no' ? 'bg-blue-500' : 'bg-gray-300'}`}
                                        style={{ borderLeftWidth: selected === 'yes' ? 0 : 1 }}
                                        onClick={() => setSelected('no')}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>

                            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}



                            {/* -----------------------------------------------Property Type----------------------------------------------------------- */}
                            <label
                                className="block pt-8 mb-2 text-sm font-medium text-gray-900 dark:text-black"
                            >
                                Type
                            </label>
                            <div className="grid gap-6 mb-6 md:grid-cols-2 ">

                                <div className="flex border border-gray-300 rounded-md">
                                    <button
                                        className={`flex-1 py-2 px-4 rounded-l-md ${type === 'yes' ? 'bg-blue-500' : 'bg-gray-300'}`}
                                        style={{ borderRightWidth: type === 'no' ? 0 : 1 }}
                                        onClick={() => setType('yes')}
                                    >
                                        Flat
                                    </button>
                                    <button
                                        className={`flex-1 py-2 px-4 rounded-r-md ${type === 'no' ? 'bg-blue-500' : 'bg-gray-300'}`}
                                        style={{ borderLeftWidth: type === 'yes' ? 0 : 1 }}
                                        onClick={() => setType('no')}
                                    >
                                        Individual House
                                    </button>
                                </div>
                            </div>

                            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}


                            <div className='justify-center pt-16'>
                                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                                    <Link href="/submit">Submit</Link>
                                </button>
                            </div>



                        </div>









                    </div>
                </div>
            </div>
        </div>
    )
}

export default Predict;