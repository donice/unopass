import './Items.css'

export default function Items () {
    const userName = 'Donice'

    

    return (
        <section className='Dashboard--items'>
            <div className='Dashboard--items-tabs'>
                <p></p>
                <h1>Welcome back, {userName} </h1>
                <section className='Dashboard--items-tabs info'>
                   <p>Hello</p>
                </section>
            </div>
            <div className='Dashboard--items-expand'>
                <h1>.</h1>
            </div>
        </section>
    )
}