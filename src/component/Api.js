import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table,Button,FormLabel,Modal} from 'react-bootstrap'



export default function Api() {

    const[dataa,setData]=useState([])
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const[idnumber,setIdnumber]=useState()
    const[showEdit,setShowEdit]=useState(true)
    const [addName,setAddName]=useState('')
    const [addEmail,setAddEmail]=useState('')
    const [addAdress,setAddAddress]=useState('')
    const [confirmModal,setConfirmModal]=useState(false);

    useEffect(() => {
        getApi()
    }, [])

    //ADD API
    const additems =()=>{
        console.log(addName,addEmail,addAdress);
        axios.post('http://localhost:3000/users',{
            name:addName,
            email:addEmail,
            address:addAdress

        }).then((response)=>{
            console.log(response);
        })
        setAddAddress('')
        setAddEmail('')
        setAddName('')
        getApi();
    }

    //GET API 
    const getApi=()=>{
        axios.get('http://localhost:3000/users')
        .then((response)=>{
        setData(response.data)
        })    
    }

    //DELETE API 
    const deteItem=(id)=>{   
        setConfirmModal(true)

        
        
        // window.confirm();
       
        console.log(alert);
    //    axios.delete(`http://localhost:3000/users/${id}`)
    //    getApi()  ;                                                              
    }

    const handleEdit=(id)=>{
        //setConfirmModal(true);
    //  console.log(dataa[id].name); 
      setName(dataa[id].name)
      setEmail(dataa[id].email)
      setAddress(dataa[id].address)
      setShowEdit(false)

      // YE setIdnumber islie use kia h yha pr kyu ki agr humko id vhaiye ho update krvate time to hum issi variable ka use krle 
      setIdnumber(dataa[id])
    }
    const handleEditNameInput =(e)=>{
        setName(e.target.value)
    }
   
    const handleEditEmailInput =(e)=>{
        setEmail(e.target.value)
       
    }
    const handleEditAddressInput =(e)=>{
        setAddress(e.target.value)
    }
    // funtion to close the module 
    const closeModule=()=>{
        setConfirmModal(false);
        getApi();
    }
    


    //PUT API
        
    const updateItem=()=>{
        console.log(name,email,address);
        console.log(idnumber);
        axios.put(`http://localhost:3000/users/${idnumber.id}`,{
            id:idnumber.id,
            name:name,
            email:email,
            address:address
        }).then((response)=>{
            console.log(response);
        })
        
        setShowEdit(true);
        setAddress('');    
        setEmail('');
        setName('');    
        getApi();

    }
    
  return (
    <>
{ confirmModal ? 
 <div>
 <Modal.Dialog >
   <Modal.Header closeButton >
    
     <Modal.Title>User module </Modal.Title>
   </Modal.Header>

   <Modal.Body>
     <p>Are you  Sure want to delete this entry </p>
   </Modal.Body>

   <Modal.Footer>
     <Button variant="secondary" onClick={closeModule}>No </Button>
     <Button variant="primary">yes</Button>
   </Modal.Footer>
 </Modal.Dialog>

 </div>  :
 <div>
           
           
 <h1>Users Informations </h1>       
 {
   showEdit ? <>
       <h1>Add Item</h1>
 <FormLabel>Name--</FormLabel>
 <input type="text" placeholder='Name' onChange={(e)=>setAddName(e.target.value)} value={addName}/> <br /><br />
 <FormLabel>Email--</FormLabel>
 <input type="text" placeholder='Email ID' onChange={(e)=>setAddEmail(e.target.value)} value={addEmail} /><br /><br />
 <FormLabel>Address--</FormLabel>
 <input type="text" placeholder='Address' onChange={(e)=>setAddAddress(e.target.value)} value={addAdress}/><br /><br />
 <Button onClick={additems} >Add Data </Button><br /><br /> 
 <Table border="1">
   <tbody>
       <tr>
           <td>S No. </td>
           <td>Name</td>
           <td>Email Id </td>
           <td>Address </td>
           <td>Operations</td>
       </tr>
       {
           dataa.map((item, i) => {
               return (
                   <tr key={i}>
                       <td>{i+1}</td>
                       <td>{item.name}</td>
                       <td>{item.email}</td>
                       <td>{item.address}</td>
                       <td><Button style={{ marginRight: 10 }} onClick={() => deteItem(item.id)}>Delete</Button>
                           <Button onClick={() => handleEdit(i)}>Edit</Button></td>
                   </tr>
               )

           })
       }
   </tbody>
</Table></> :
     <> 
     <h2>PLease add details here for updattion </h2>
     <FormLabel>Name-</FormLabel>
     <input type="text" placeholder='Name' onChange={handleEditNameInput} value={name} /> <br /><br />
     <FormLabel>Email ID -</FormLabel>
     <input type="text" placeholder='Email ID' onChange={handleEditEmailInput} value={email} /><br /><br />
     <FormLabel>Address -</FormLabel>
     <input type="text" placeholder='Address' onChange={handleEditAddressInput} value={address} /><br /><br />
     <Button onClick={updateItem}>Update Data </Button>
 </>
 } 
</div>

}
   
          
    </>
  )
}
