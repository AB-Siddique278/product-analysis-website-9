import { Tooltip } from 'bootstrap';
import React from 'react';


import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Dashbord = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <div>

            <div>


                <div className='container'>

                    <div className='row my-5'>

                        
                            <div className='col-md-6'>
                                    <h3 className='mb-5 text-center'>InvestMent VS Month</h3>

                                <LineChart width={400} height={400} data={data}>
                                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                                    <CartesianGrid stroke="#ccc" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                </LineChart>

                            </div>


                            <div className='col-md-6'>

                            <h3 className='mb-5 text-center'>Sell VS Month</h3>

                                <LineChart width={400} height={400} data={data}>
                                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                </LineChart>


                            </div>
                        




                    </div>
                </div>














            </div>


        </div>
    );
};

export default Dashbord;

//this is practice for multipule charts

