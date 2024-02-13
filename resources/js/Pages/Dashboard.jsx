import PanelLayout from "@/Layouts/PanelLayout";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export default function Dashboard({active, inactive, forSale, forRent, data}) {      
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

    const totalProperties = data.reduce((total, property) => total + property.value, 0);
    const percentageHouses = (data.find(property => property.name === 'Houses').value / totalProperties) * 100;
    const percentageApartments = (data.find(property => property.name === 'Apartments').value / totalProperties) * 100;

    return (
        <PanelLayout>
            <div className='mb-8'>
                <span className='text-2xl'>Dashboard</span>
            </div>
            <div className="flex gap-4">
                <div className='bg-white w-1/4 py-10 rounded-lg flex items-center'>
                    <div className="ms-4 flex flex-col justify-center">
                        <h3 className='text-slate-400 text-xl mb-2'>Imóveis Ativos</h3>
                        <span className='text-slate-800  text-5xl'>{active}</span>
                    </div>
                </div>
                <div className='bg-white w-1/4 py-10 rounded-lg flex items-center'>
                    <div className="ms-4 flex flex-col justify-center">
                        <h3 className='text-slate-400 text-xl mb-2'>Imóveis Inativos</h3>
                        <span className='text-slate-800  text-5xl'>{inactive}</span>
                    </div>
                </div>
                <div className='bg-white w-1/4 py-10 rounded-lg flex items-center'>
                    <div className="ms-4 flex flex-col justify-center">
                        <h3 className='text-slate-400 text-xl mb-2'>Imóveis para venda</h3>
                        <span className='text-slate-800  text-5xl'>{forSale}</span>
                    </div>
                </div>
                <div className='bg-white w-1/4 py-10 rounded-lg flex items-center'>
                    <div className="ms-4 flex flex-col justify-center">
                        <h3 className='text-slate-400 text-xl mb-2'>Imóveis para aluguel</h3>
                        <span className='text-slate-800  text-5xl'>{forRent}</span>
                    </div>
                </div>
            </div>
            <div className="h-[550px] w-full bg-white rounded-lg mt-4 flex">
                <ResponsiveContainer width="50%" height="100%">
                    <PieChart width="100%" height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={200}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="w-1/2 flex justify-center items-end">
                    <div className="mb-20 flex">
                        <div className="grid grid-cols-2 items-end">
                            <div className="flex items-center gap-4">
                                <div className="h-3 w-3 bg-[#2F8584]"></div>
                                <p className="text-xl text-slate-400">Casas:</p>
                            </div>
                            <span className="ml-4 text-xl text-slate-400">{percentageApartments.toFixed(0)}%</span>
                            <div className="flex items-center gap-4">
                                <div className="h-3 w-3 bg-main-color"></div>
                                <p className="text-xl text-slate-400">Apartamentos:</p>
                            </div>
                            <span className="text-xl text-slate-400 ml-4">{percentageHouses.toFixed(0)}%</span>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </PanelLayout>
    );
}
