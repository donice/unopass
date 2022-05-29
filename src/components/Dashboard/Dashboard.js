import './Dashboard.css'
import Navbar from './Navbar';
import SideNav from './Side-nav';
import Items from './Items';

const Dashboard = () => {
    return (
        <section className='Dashboard' >
            <Navbar />
            <main>
                <SideNav />
                <Items />
            </main>            
        </section>
    )
}

export default Dashboard;