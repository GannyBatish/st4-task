import { Container, createTheme, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider } from '@material-ui/core'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from './Context';
const useStyle=makeStyles((theme)=>({
  cont:{
    background:'url(https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    display:'flex',
    // justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:'100%',
    height:'99.9vh',
    // border:'2px solid red'
    // paddingTop:'30px'
  },
  table:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    width:'fit-content',
    background: 'rgba(255,255,255,0.1)',
     WebkitBackdropFilter: 'blur(10px)',
     backdropFilter: 'blur(10px)',
    [theme.breakpoints.down("xs")]:{
      width:'100%',
    }
  },
  cell:{
    paddingLeft:'50px',
    paddingRight:'50px',
    color:"white",
    fontWeight:"800",
    [theme.breakpoints.down('sm')]:{
      paddingLeft:'30px',
      paddingRight:'30px',
    },
    [theme.breakpoints.down('xs')]:{
      paddingLeft:'0px',
      paddingRight:'0px',
    }
  },
  cell1:{
    paddingLeft:'45px',
    paddingRight:'45px',
    color:"white",
    // fontWeight:"800",
    [theme.breakpoints.down('sm')]:{
      paddingLeft:'30px',
      paddingRight:'30px',
    },
    [theme.breakpoints.down('xs')]:{
      paddingLeft:'0px',
      paddingRight:'0px',
    }
  },
  btn2:{
    marginTop:'50px',
    // width:'500px',
    paddingLeft:'30px',
    paddingRight:'30px',
    height:'50px',
    borderRadius:'25px',
    outline:'none',
    backgroundColor:'#166bd3',
    color:'white',
    fontSize:'20px',
    cursor:'pointer',
    fontWeight:'bold',
    border:'5px solid #166bd3',
  },
}))
const User = () => {
  const darkTheme=createTheme({
    palette:{
        primary:{
            main:"#fff"
        },
        type:'dark'
    },
})
  const classes=useStyle();
  const {users}=GlobalContext();
  const [search,setSearch]=useState('');
  const history=useNavigate();
  const handleSearch=()=>{
    return users?.filter((user)=>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.toLowerCase().includes(search.toLowerCase()) ||
      user.address.toLowerCase().includes(search.toLowerCase())
    )
  }
  return (
    <div className={classes.cont}>
      <h1 style={{color:'white',fontSize:'40px',marginTop:'70px',marginBottom:'50px'}}>Users List</h1>
      {!users?<h1 style={{color:'white',fontSize:'40px',WebkitTextStroke:'1px black'}}>No User Added Yet</h1>:
      <div style={{
        width:'fit-content',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
      }}>
        <ThemeProvider theme={darkTheme}>
        <TextField
        className={classes.search}
            label="Search Any User...."
            variant='outlined'
            style={{
              width:'100%',
              marginTop:'10px',
              marginBottom:'30px',
              borderRadius:'20px'
            }}
            onChange={(e)=>{setSearch(e.target.value)}}
            />
        </ThemeProvider>
      <TableContainer className={classes.table}>
        <Table>
        <TableHead style={{
          backgroundColor:'#166bd3',
        }}>
          <TableRow>
            {['Name','Email','Phone Number','Address'].map((head)=>{
              return (
                <TableCell className={classes.cell} key={head}>
                  {head}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {handleSearch()?.map((user)=>{
            return (
              <TableRow key={user.name}>
                <TableCell className={classes.cell1}>
                  {user.name}
                </TableCell>
                <TableCell className={classes.cell1}>
                  {user.email}
                </TableCell>
                <TableCell className={classes.cell1}>
                  {user.phone}
                </TableCell>
                <TableCell className={classes.cell1}>
                  {user.address}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
        </Table>
      </TableContainer>
      </div>
      }
      <button className={classes.btn2}
      onClick={()=>{history('/')}}
      >
        Back To Home
      </button>
    </div>
  )
}

export default User