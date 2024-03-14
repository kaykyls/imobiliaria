import PanelLayout from "@/Layouts/PanelLayout";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

export default function Dashboard({active, inactive, forSale, forRent, data, auth}) {   
    const COLORS = ['#5BC0BE', '#2F8584'];
      
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    const [outerRadius, setOuterRadius] = useState(60);

    const sampleData = [
        {
            mês: 'Janeiro',
            Vendas: 4000,
            Gastos: 2400,
            amt: 2400,
          },
          {
            mês: 'Fevereiro',
            Vendas: 3000,
            Gastos: 1398,
            amt: 2210,
          },
          {
            mês: 'Março',
            Vendas: 2000,
            Gastos: 5500,
            amt: 2290,
          },
          {
            mês: 'Abril',
            Vendas: 2780,
            Gastos: 3908,
            amt: 2000,
          },
          {
            mês: 'Maio',
            Vendas: 1890,
            Gastos: 4800,
            amt: 2181,
          },
          {
            mês: 'Junho',
            Vendas: 2390,
            Gastos: 3800,
            amt: 2500,
          },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setOuterRadius(60);
            } else {
                setOuterRadius(150);
            }
        };

        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const TickFormatter = (value) => {
        return "R$" + value 
    }

    return (
        <PanelLayout user={auth.user}>
            <div className='mb-8'>
                <span className='text-xl'>Dashboard</span>
            </div>
            <div className="grid grid-cols-2 md:flex gap-4">
                <div className='bg-white md:w-1/4 py-10 rounded-lg flex justify-between px-4'>
                    <div className="ms-4 flex flex-col justify-center">
                        <h3 className='text-slate-400 mb-2'>Imóveis Ativos</h3>
                        <span className='text-slate-800 text-3xl font-medium'>{active}</span>
                    </div>
                    <div>
                        <div className="bg-green-100 p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='bg-white md:w-1/4 py-10 rounded-lg flex justify-between px-4'>
                    <div className="flex flex-col justify-center">
                        <h3 className='text-slate-400 mb-2'>Imóveis Inativos</h3>
                        <span className='text-slate-800 text-3xl font-medium'>{inactive}</span>
                    </div>
                    <div>
                        <div className="bg-red-100 p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='bg-white md:w-1/4 py-10 rounded-lg flex justify-between px-4'>
                    <div className="ms-4 flex flex-col justify-center">
                        <h3 className='text-slate-400 mb-2'>Imóveis para venda</h3>
                        <span className='text-slate-800 text-3xl font-medium'>{forSale}</span>
                    </div>
                    <div>
                        <div className="bg-blue-100 p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='bg-white md:w-1/4 py-10 rounded-lg flex justify-between px-4'>
                    <div className="ms-4 flex flex-col justify-center">
                        <h3 className='text-slate-400 mb-2'>Imóveis para aluguel</h3>
                        <span className='text-slate-800 text-3xl font-medium'>{forRent}</span>
                    </div>
                    <div>
                        <div className="bg-yellow-100 p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                 <div className="h-[300px] md:h-[550px] w-full md:w-8/12 bg-white rounded-lg flex p-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                        width={500}
                        height={300}
                        data={sampleData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <XAxis tickMargin={10} axisLine={false} tickLine={false} dataKey="mês" />
                        <YAxis tickMargin={5} axisLine={false} tickLine={false} tickFormatter={TickFormatter}/>
                        <Tooltip />
                        <Legend verticalAlign="top" />
                        <Line type="monotone" dataKey="Gastos" stroke="#f87171" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Vendas" stroke="#4ade80" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-[300px] md:h-[550px] w-full md:w-4/12 bg-white rounded-lg p-4">
                    <ResponsiveContainer   ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={outerRadius}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        <Legend />

                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </PanelLayout>
    );
}


{/* <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        width={500}
                        height={300}
                        data={sampleData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                        </BarChart>
                    </ResponsiveContainer> */}