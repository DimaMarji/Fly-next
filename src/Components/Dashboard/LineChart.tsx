import { Card } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
  { name: 'Aug', uv: 2000 },
  { name: 'Sep', uv: 2780 },
  { name: 'Oct', uv: 1890 },
  { name: 'Nov', uv: 2390 },
  { name: 'Dec', uv: 3490 },
];

const ChartCard:React.FC<any> = ({ title }) => (
  <Card className="chart-card">
    <div className="chart-title">{title}</div>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  </Card>
);

export default ChartCard;
