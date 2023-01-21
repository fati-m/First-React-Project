import './App.css';
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WarningIcon from '@mui/icons-material/Warning';
import SendIcon from '@mui/icons-material/Send';
import { AppBar, Icon, Toolbar, Typography } from '@mui/material';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Theme = createTheme({
	typography: {
	 fontFamily: [ `"Lato", sans-serif`,].join(","),
	}
 });

class App extends Component {




//name form greeting
	constructor(props) {
		super(props);
		this.state = {value: ''};
	
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }
	
	  handleChange(event) {
		this.setState({value: event.target.value});
	  }
	
	  handleSubmit(event) {
		document.getElementById("outputDiv").innerHTML = "Hello, " + this.state.value + "!";
		event.preventDefault();
	  };

	
	
  render () {
	return (
    <div className="body">
	<ThemeProvider theme={Theme}>


	<AppBar position='static' style={{color: "black", border:"white", background:"rgba(0, 0, 0, 0.5)"}}>
		<Toolbar style={{background: "rgb(107, 142, 35)", border:"rgb(107, 142, 35)", fontWeight: "bold", }}>
			<Icon size="large" edge="start" color="inherit" aria-label="logo"  style={{color:"white", background: "rgb(107, 142, 35)", height:"40px", width:"40px", borderRadius: "40px"}} >
				<SsidChartIcon/>
			</Icon>
			<Typography variant='h6' component="div" startIcon={SsidChartIcon} style={{color: "white", border:"rgb(107, 142, 35)", borderRadius:"5px"}}>
			&nbsp;&nbsp;Fluctuating Avocado Prices
			</Typography>
		</Toolbar> 
		<div className="nameForm">
      <form onSubmit={this.handleSubmit}>
		Name:	<TextField type="text" variant="standard" id="inputText" value={this.state.value} onChange={this.handleChange} color="success"/>
        <Button type="submit" value="Submit" onClick={reverseSTableRowing} variant="contianed" endIcon={<SendIcon/>}>submit</Button>
      </form>
    </div>
	</AppBar>

	<br/>
	<br/>

	<div id="outputDiv"></div>
	<div id="outputDiv2"></div>
	<p id = "reveserSTableRowingResult"> </p>  
	<p id = "result"> </p> 

    <div className='table'>
	<TableContainer component={Paper} style={{borderRadius:"12px"}}>
    <Table sx={{ minWidth: 650, textAlign: "center", alignItems:"center", backgroundcolor:"black",}} aria-label="simple table" id="tab">

    <TableHead id="head1">
    	<TableCell align='center'>Cities</TableCell>
		<TableCell align="center">Avg of Avg Price</TableCell>
	  	<TableCell align="center">Avg of Total Volume</TableCell>
		<TableCell align="center">Average of 4046</TableCell>
		<TableCell align="center">Average of 4225</TableCell>
		<TableCell align="center">Average of 4770</TableCell>
		<TableCell align="center">Average of Total Bags</TableCell>
		<TableCell align="center">Average of Small Bags</TableCell>
		<TableCell align="center">Average of Large Bags</TableCell>
		<TableCell align="center">Average of XLarge Bags</TableCell>
        </TableHead>
	
		<TableBody>
        <TableRow style={{backgroundColor:"lightgray"}}>
    <TableCell>Albany</TableCell>
		<TableCell align="center">1.561035503</TableCell>
		<TableCell align="center">47537.86973</TableCell>
		<TableCell align="center">1824.081775</TableCell>
		<TableCell align="center">37621.20825</TableCell>
		<TableCell align="center">162.8323373</TableCell>
		<TableCell align="center">7929.747367</TableCell>
		<TableCell align="center">6647.765473</TableCell>
		<TableCell align="center">1153.496213</TableCell>
		<TableCell align="center">128.4886391</TableCell>
        </TableRow>

        <TableRow>
    <TableCell>Atlanta</TableCell>
		<TableCell align="center">1.33795858</TableCell>
		<TableCell align="center">262145.322</TableCell>
		<TableCell align="center">146116.868</TableCell>
		<TableCell align="center">31218.51038</TableCell>
		<TableCell align="center">311.3857692</TableCell>
		<TableCell align="center">84498.56089</TableCell>
		<TableCell align="center">51605.72734</TableCell>
		<TableCell align="center">32070.04456</TableCell>
		<TableCell align="center">822.7860355</TableCell>
        </TableRow>

        <TableRow style={{backgroundColor:"lightgray"}}>
    <TableCell>BaltimoreWashington</TableCell>
		<TableCell align="center">1.534230769</TableCell>
		<TableCell align="center">398561.8915</TableCell>
		<TableCell align="center">35656.21817</TableCell>
		<TableCell align="center">245982.8889</TableCell>
		<TableCell align="center">12466.73098</TableCell>
		<TableCell align="center">104456.0535</TableCell>
		<TableCell align="center">100939.6832</TableCell>
		<TableCell align="center">2903.984586</TableCell>
		<TableCell align="center">612.3827219</TableCell>
        </TableRow>

        <TableRow >
		<TableCell>Boise</TableCell>
		<TableCell align="center">1.348136095</TableCell>
		<TableCell align="center">42642.56731</TableCell>
		<TableCell align="center">20019.5076</TableCell>
		<TableCell align="center">3461.682367</TableCell>
		<TableCell align="center">3186.78784</TableCell>
		<TableCell align="center">15974.59246</TableCell>
		<TableCell align="center">13840.03725</TableCell>
		<TableCell align="center">2103.634083</TableCell>
		<TableCell align="center">30.9152071</TableCell>
        </TableRow>

        <TableRow style={{backgroundColor:"lightgray"}}>
    <TableCell>Boston</TableCell>
		<TableCell align="center">1.530887574</TableCell>
		<TableCell align="center">287792.8545</TableCell>
		<TableCell align="center">4994.610059</TableCell>
		<TableCell align="center">214219.8643</TableCell>
		<TableCell align="center">4982.29497</TableCell>
		<TableCell align="center">63596.08521</TableCell>
		<TableCell align="center">58906.59036</TableCell>
		<TableCell align="center">4438.364704</TableCell>
		<TableCell align="center">251.1242308</TableCell>
        </TableRow>

        <TableRow>
    <TableCell>BuffaloRochester</TableCell>
		<TableCell align="center">1.51683432</TableCell>
		<TableCell align="center">67936.30296</TableCell>
		<TableCell align="center">1776.671243</TableCell>
		<TableCell align="center">31663.95364</TableCell>
		<TableCell align="center">144.3359763</TableCell>
		<TableCell align="center">34351.33618</TableCell>
		<TableCell align="center">30379.97571</TableCell>
		<TableCell align="center">3729.05</TableCell>
		<TableCell align="center">242.313432</TableCell>
        </TableRow>

        <TableRow style={{backgroundColor:"lightgray"}}>
    <TableCell>California</TableCell>
		<TableCell align="center">1.395325444</TableCell>
		<TableCell align="center">3044324.418</TableCell>
		<TableCell align="center">1180375.778</TableCell>
		<TableCell align="center">1039915.391</TableCell>
		<TableCell align="center">94204.27675</TableCell>
		<TableCell align="center">729828.9755</TableCell>
		<TableCell align="center">677803.7867</TableCell>
		<TableCell align="center">36425.84589</TableCell>
		<TableCell align="center">15599.34293</TableCell>
        </TableRow>

        <TableRow>
    <TableCell>Charlotte</TableCell>
		<TableCell align="center">1.606035503</TableCell>
		<TableCell align="center">105193.9184</TableCell>
		<TableCell align="center">22378.1382</TableCell>
		<TableCell align="center">36628.01556</TableCell>
		<TableCell align="center">11578.46757</TableCell>
		<TableCell align="center">34609.29707</TableCell>
		<TableCell align="center">31490.68512</TableCell>
		<TableCell align="center">2912.684172</TableCell>
		<TableCell align="center">205.9277811</TableCell>
        </TableRow>

        <TableRow style={{backgroundColor:"lightgray"}}>
    <TableCell >Chicago</TableCell>
		<TableCell align="center">1.556775148</TableCell>
		<TableCell align="center">395569.0488</TableCell>
		<TableCell align="center">32083.08192</TableCell>
		<TableCell align="center">254519.0449</TableCell>
		<TableCell align="center">59069.20429</TableCell>
		<TableCell align="center">49897.63497</TableCell>
		<TableCell align="center">43771.16293</TableCell>
		<TableCell align="center">5005.546864</TableCell>
		<TableCell align="center">1120.925178</TableCell>
        </TableRow>
    
        <TableRow>
    <TableCell>CincinnatiDayton</TableCell>
		<TableCell align="center">1.209201183</TableCell>
		<TableCell align="center">131721.9159</TableCell>
		<TableCell align="center">5411.697604</TableCell>
		<TableCell align="center">61058.89929</TableCell>
		<TableCell align="center">3421.026598</TableCell>
		<TableCell align="center">61828.16107</TableCell>
		<TableCell align="center">16751.16544</TableCell>
		<TableCell align="center">44296.43429</TableCell>
		<TableCell align="center">780.5642899</TableCell>
        </TableRow>
		</TableBody>

      </Table>
	  </TableContainer>
    </div>

	
    <div className='browser_alert'>
		<br/>
      <Button variant="outlined" onClick={btn} startIcon={<WarningIcon/>} style={{color: "white", background:"red"}}>
        Click me!
      </Button>
    </div>
	</ThemeProvider>

    </div>


	);
  };
}
//chrome alert
const btn = () => {
    alert("The creator of this site does not claim rights over the data presented in the table.");
	console.log ("Code has to be oranized! It's a bit messy.");
  }
  



//reverse string

const reverseSTableRowing = () => {
	let input = document.getElementById("inputText").value;

	let reverseResult = "";
	document.getElementById("result").innerHTML = '';
	document.getElementById("outputDiv").innerHTML = '';

	for ( var i = input.length -1; i >= 0; i--) {
		reverseResult = reverseResult + input[i];
	}

	document.getElementById("reveserSTableRowingResult").innerHTML = "Reversed name: " + reverseResult;
    document.getElementById("outputDiv").innerHTML = "Reversed name: " + reverseResult;


} 




export default App;
