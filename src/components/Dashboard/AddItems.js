import './AddItems.css'
import React from 'react'
import Main from './AddItems/Main'
import Sidebar from './AddItems/Sidebar'
import { useEffect, useState } from 'react'

export default function AddItems () {
    return (
        <section className='AddItems'>
            <Sidebar />
            <Main /> 
        </section>
    )
}

