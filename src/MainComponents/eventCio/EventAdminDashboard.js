import React from 'react';
import Sidenav from './components/SideNav';
import "./Event.css";
import logo from "../../Assets/logonew.png"
import "../../index.css"
import stonks from "../../Assets/stonks.png"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { BarChart, PieChart } from '@mui/x-charts';
import { IoIosArrowDropright } from "react-icons/io";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


function EventAdminDashboard() {

   

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);
    return(
        <div style={{backgroundColor: "#E8E8EE", minHeight: "100vh"}}>
            <div className='enav'>
                <img src={logo} style={{width: "200px", padding: "20px"}} className='ml-2' />
            </div>
            <div className='ecards-cont'>
                <div className='ecard-grid1'>
                    <div className='ecard-grid3'>
                        <div className='card3'>
                            <h1 className=' p-5 gilroyBold text-[26px] txtclr'>Total Footfalls </h1>
                            <div className="flex flex-row items-center justify-center gap-[20px]">
                                <h1 className='text-[45px] gilroyBold txtclr'>
                                    900
                                </h1>
                            </div>
                            <IoIosArrowDropright onClick={handleClickOpen('paper')} color='#162449' size='25px' style={{marginLeft: "5px", cursor: "pointer"}} />
                            
                        </div>
                        <div className='card3'>
                        <h1 className=' p-5 gilroyBold text-[26px] txtclr'>Stall Goodies Count </h1>
                        <div className="flex flex-row items-center justify-center gap-[20px]">
                                <h1 className='text-[45px] gilroyBold txtclr'>
                                    900
                                </h1>
                            </div>

                            <IoIosArrowDropright onClick={handleClickOpen('paper')} color='#162449' size='25px' style={{marginLeft: "5px", cursor: "pointer"}} />
                            
                        </div>
                        
                    </div>
                    <div className='ecard-grid4'>
                        <div className='card4 flex flex-col items-center'>
                            <div className='flex flex-row items-center justify-center'>
                        <h1 className='mx-auto p-5 gilroyBold text-[30px] txtclr'>Meal Data </h1>
                        <IoIosArrowDropright onClick={handleClickOpen('paper')} color='#162449' size='25px' style={{marginLeft: "-8px", cursor: "pointer", marginTop: "5px"}} />
                        </div>
                        <div className='flex flex-row items-center justify-center gap-[100px] pie-grid' >
                            <div className='' >
                        <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 10, label: 'M1 total' },
                                { id: 1, value: 15, label: 'M1 used' },
                            ],
                            },
                        ]}
                        width={400}
                        height={200}
                        />
                        <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 10, label: 'M2 total' },
                                { id: 1, value: 15, label: 'M2 used' },
                            ],
                            },
                        ]}
                        width={400}
                        height={200}
                        />
                        </div>
                        <div>
                        <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 10, label: 'M3 total' },
                                { id: 1, value: 15, label: 'M3 used' },
                            ],
                            },
                        ]}
                        width={400}
                        height={200}
                        />
                        </div>
                       
                        
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className='ecard-grid2'>
                    <div className='card2'>
                        <div className='flex flex-col'>
                        <div className='flex flex-row items-center justify-center'>
                            <h1 className=' p-5 gilroyBold text-[30px] txtclr text-center'>Live Hall Count</h1>
                        <IoIosArrowDropright onClick={handleClickOpen('paper')} color='#162449' size='25px' style={{marginLeft: "-8px", cursor: "pointer", marginTop: "5px"}} />
                            </div>
                            <BarChart
                            xAxis={[{ scaleType: 'band', data: ['Hall A', 'Hall B', 'Hall C', "Hall D"] }]}
                            series={[{ data: [1, 2, 3] }, { data: [6] }, { data: [5] }]}
                            width={500}
                            height={300}
                            />
                        </div>
                    </div>
                    <div className='card1'>
                    <div className='flex flex-row items-center justify-center'>
                        
                    <h1 className=' p-5 gilroyBold text-[30px] txtclr  '>Event Goodies Count</h1>
                    <IoIosArrowDropright onClick={handleClickOpen('paper')} color='#162449' size='25px' style={{marginLeft: "-8px", cursor: "pointer", marginTop: "5px"}} />
                        </div>
                        <h1 className='text-[78px] gilroyBold txtclr mx-auto'>
                            900
                        </h1>
                    </div>
                </div>
            </div>
            <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Title</DialogTitle>
                <DialogContent>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} className='gilroyMedium'>Close</Button>
                <Button onClick={handleClose} style={{backgroundColor: "#007133", color: "#ffffff"}} className='gilroyMedium'>Export to sheets</Button>
                </DialogActions>
            </Dialog>
            </React.Fragment>
        </div>

    )
}


export default EventAdminDashboard