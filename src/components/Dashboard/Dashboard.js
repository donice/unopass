import './Dashboard.css'
import Navbar from './Navbar';
import SideNav from './Side-nav';
import Items from './Items';

const Dashboard = () => {
    return (
        <section className='Dashboard' >
            <Navbar />
            <SideNav />
            <Items />
        </section>
    )
}

export default Dashboard;