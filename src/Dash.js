import './Dash.css'
// import $ from 'jquery';
// import App from './App';
import { TiThMenu } from "react-icons/ti";
import { CiMenuKebab } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaTable } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { BiSolidLogIn } from "react-icons/bi";
import { SiSinglestore } from "react-icons/si";
import { FaChartPie } from "react-icons/fa";
import { MdInsertChart } from "react-icons/md";
import { FaAtom } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Progress } from "rsuite"; 
import "rsuite/dist/rsuite.min.css"; 
import { blue } from '@mui/material/colors';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
  const paginationModel = { page: 0, pageSize: 5 };
  
function Dash(){
    return(
        
        <div className="contain">
            <nav>
                <TiThMenu  className='menu_i_r' />
                TopAppbar
                <CiMenuKebab className='menu_i_l'/>
            </nav>
            <div className='all_item'> 

            
                <div className='sidebar'>
                    <div className='side_card_img'>
                    <FaUser size='300px' color='#8fb2f3' />
                    </div>
                    <div className='side_card_list'>
                    
                    <MdDashboard className='icon_sider_bar'/>
                     <label>Dashboard</label>
                    </div>
                    <div className='side_card_list'>
                    <FaTable className='icon_sider_bar' />
                     <label>Tables</label>
                    </div>
                    <div className='side_card_list'>
                    <FaMoneyBillWave className='icon_sider_bar' />
                     <label>Billigs</label>
                    </div>
                    <div className='side_card_list'>
                    <FaChartLine className='icon_sider_bar' />
                     <label>Rtl</label>
                    </div>
                    <div className='side_card_list'>
                    <IoNotificationsSharp  className='icon_sider_bar' />
                     <label>Notification</label>
                    </div>
                    <div className='side_card_list'>
                    <FaUser className='icon_sider_bar' />
                     <label>Profile</label>
                    </div>
                    <div className='side_card_list'>
                    <BiSolidLogIn  className='icon_sider_bar' />
                     <label>Sign In</label>
                    </div>
                    <div className='side_card_list'>
                    <SiSinglestore className='icon_sider_bar' />
                     <label>Singn Up</label>
                    </div>
                
    


                </div>

                <div className=' left_all_item'>
                    <label>wellcome</label> 
                    <div className='first_contant'>
                       
                        <div className="card_contion">
                            <div  id='card_contion_icon1'>
                            < FaChartPie  className='card_contion_icon' />
                            </div>
                            <div className='card_contion_lable'>
                            <label>Bookings</label>
                            <label>2000</label>
                            </div>
                           
                       
                        </div>
                
                        <div className="card_contion">
                            <div  id='card_contion_icon2'>
                            < MdInsertChart  className='card_contion_icon' />
                            </div>
                            <div className='card_contion_lable'>
                            <label>Total User</label>
                            <label>130</label>
                            </div>
                        </div>
                     
                        <div className="card_contion">
                            <div  id='card_contion_icon3'>
                            <FaAtom className='card_contion_icon'/>
                            </div>
                            <div className='card_contion_lable'>
                            <label>Avanue</label>
                            <label>20</label>
                            </div>

                        </div>
                        <div className="card_contion">
                            <div  id='card_contion_icon4'>
                            <FaCog className='card_contion_icon'/>
                            </div>
                            <div className='card_contion_lable'>
                            <label>Followers</label>
                            <label>2000</label>
                            </div>

                        </div>

                    </div>
                 
                    <div className='sec_contant'>
                        <div className="card_contion2">
                        
                        <BarChart className='charts_card1'
                            series={[
                                { data: [35, 44, 24, 34] },
                                { data: [51, 6, 49, 30] },
                                { data: [15, 25, 30, 50] },
                               
                            ]}
                            height={300}
                            width={450}
                            xAxis={[{ data: ['Q1', 'Q2', 'Q3', ], scaleType: 'band' }]}
                           
                            />
                    
               
                        <label>BarChart</label>

                        </div>
                        <div className="card_contion2">

                        <PieChart className='charts_card2'
                            series={[
                                {
                                data: [
                                    { id: 0, value: 10, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 2, value: 20, label: 'series C' },
                                ],
                                },
                              
                            ]}
                            height={300}
                            width={450}
                            />
                            <label> PieChart</label>

                        </div>
                        <div className="card_contion2">

                        <LineChart className='charts_card3'
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            height={300}
                            width={450}
                        
                            />
                            <label>LineChart</label>

                        </div>
                

                    </div>
                
                    <div className='thrid_contant'>
                        <div className="card_contion3">
                            <label>Tables</label>

                            <Paper sx={{ height: 300, width: '100%' ,}}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{ pagination: { paginationModel } }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                                sx={{ border: 0 }}
                            />
                            </Paper>
                        </div>
                        <div className="card_contion3">
                        <label>Line Of Spacing</label>
                        <Progress.Line percent={10}  />
                        <Progress.Line percent={30}  /> 
                        <Progress.Line percent={10}  /> 
                        <Progress.Line percent={70}  />  
                        <Progress.Line percent={70}  /> 
                        <Progress.Line percent={70}  /> 
                        <label >Lines</label>
                       
                        </div>

                    </div>

                </div>
            </div>
{/* 
            <BottomNavigation className='bottom_nov'
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation> */}

        </div>
        
            
           
        );
}

export default Dash;