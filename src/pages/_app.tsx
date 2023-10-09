import Layout from '@/components/Layouts/Layout';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default App;
