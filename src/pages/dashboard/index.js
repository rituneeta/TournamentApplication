import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Card, Empty, Spin } from 'antd';
import axios from 'axios';
import Teams from 'pages/dashboard/components/team';

const Dashboard = () => {
    const [tournamentData, setTournamentData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('https://mocki.io/v1/b4544a37-0765-405f-baf6-6675845d5a0e');
            setTournamentData(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(error);
        }
    };

    if (loading) return <div className='!bg-white !w-96 my-20 m-auto p-10 !rounded-md'> <Spin className='!flex justify-center' /></div>
    if (!tournamentData?.length) return <div className='!bg-white !w-96 my-20 m-auto !rounded-md'> <Empty description="No Tournament found" /></div>

    return (
        tournamentData.map(({ game, teams }) => (
            <div className='!mx-auto flex justify-center !mt-10 '>
                <Card title={game} className='!bg-grey-100 !border-solid !w-96'>
                    <Teams {...{ teams, setTournamentData }} />
                </Card>
            </div>
        ))

    );
};

export default Dashboard;