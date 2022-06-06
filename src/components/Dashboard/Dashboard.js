import './Dashboard.css'
import Navbar from './Navbar';
import SideNav from './Side-nav';
import AddItems from './AddItems';

const Dashboard = () => {
    return (
        <section className='Dashboard' >
            <Navbar />
            <main>
                <SideNav />
                <AddItems />               
            </main>            
        </section>
    )
}

export default Dashboard;