import './Items.css'
import React from 'react'

export default function Items () {
    const [userName, setUserName] = React.useState('Mercy Nubi')
    const today = new Date().toLocaleDateString('en-uk', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    const [data, setData] = React.useState({
        icon: '', //icon of the website
        siteUserName: ''
    })


    return (
        <section className='Dashboard--items'>

            {/* Dashboard Item  */}
            <div className='Dashboard--items-tabs'>
                <p> {today} </p>
                <h1>Welcome back, <span>{userName}</span></h1>
                <section className='Dashboard--items-tabs info'>
                    <hr />
                   <p>Hello</p>
                </section>
            </div>

            {/* Dashboard Expand */}
            <div className='Dashboard--items-expand'>
                <h1>.</h1>
            </div>

        </section>
    )
}



    // let today = new Date();
    // const date = String(today.getDate()).padStart(2, '0')
    // const month = today.getMonth()
    // const year = today.getFullYear()

    // today =  date + '.' + month + '.'+ year;---------------------------