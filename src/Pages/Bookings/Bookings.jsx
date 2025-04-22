import React, { useEffect, useState } from 'react';
import { getBookMark, removeBookMark } from '../../utilites';
import Book from './Book';
import { Link } from 'react-router';

import { BarChart, Bar, XAxis, YAxis, Cell, ResponsiveContainer, LabelList } from 'recharts';
const Bookings = () => {
    const [displayData, setDisplayData] = useState([])
    useEffect(() => {
        const saveData = getBookMark();
        setDisplayData(saveData)
    }, [])
    const handleDelete = (id) => {
        removeBookMark(id);
        setDisplayData(getBookMark());

    }
    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    const colors = ['#0088FE', '#FFBB28', '#00C49F', '#FF8042'];
    const CustomLabel = (props) => {
        const { x, y, width, value, index } = props;
        const fillColor = colors[index % colors.length];

        return (
            <text
                x={x + width / 2}
                y={y - 10}
                fill={fillColor}
                textAnchor="middle"
                fontSize={16}
                fontWeight="bold"
            >
                {value}
            </text>
        );
    };
    return (

        <>
            {
                displayData.length === 0 ? (
                    <div className='flex flex-col justify-center items-center gap-4 py-20 md:gap-8 md:p-40'>
                        <h1 className='text-xl md:text-4xl font-bold text-center'>You Have Not Book any appointment yet</h1>
                        <p className='text-sm md:text-lg text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>

                        <Link to='/' className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                            Book An Appointment
                        </Link>
                    </div>
                ) : (

                    <>
                        <div className='pt-4 border border-[#0F0F0F20] rounded-xl mb-10'>
                            <div className="w-full flex justify-center mb-10 pt-10">
                                <div className="w-[600px] md:w-[2000px] h-[400px] md:h-[500px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={displayData}>
                                            <XAxis dataKey="name" />
                                            <YAxis domain={[0, 'dataMax + 300']} />
                                            <Bar dataKey="fee" shape={<TriangleBar />}  >
                                            <LabelList dataKey="fee" content={CustomLabel} />
                                                {displayData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>


                        {
                            displayData.map(data => (
                                <Book key={data.id} data={data} handleDelete={handleDelete} />
                            ))
                        }
                    </>
                )
            }
        </>
    );
};

export default Bookings;
