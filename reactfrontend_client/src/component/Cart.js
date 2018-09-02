import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

class Cart extends Component
{
    state ={
        hargaTotal:0,        
        hargaTax:'',
        hargaSum:'',
        dataCart:[]
    }
    componentWillMount(){
        var idUser= cookies.get('userID')
        axios.post('http://localhost:8002/getCartItem/', {
            idUser:idUser
        })
        .then(
            (hasilAmbil)=>{
                console.log(hasilAmbil);
                this.setState({
                    // dataIDCart:hasilAmbil.data[0].id_cart,
                    // dataIDUser:hasilAmbil.data[0].id_user,                   
                    // idproduct :hasilAmbil.data[0].id_product,                   
                    // namaMotor :hasilAmbil.data[0].nama_item,
                    // harga:hasilAmbil.data[0].harga_item,
                    dataCart:hasilAmbil.data                   
                                                      
                })
            }
        )
        var idUser= cookies.get('userID')
        axios.post('http://localhost:8002/jumlahsubHarga',{
            idUser:idUser
        })
        .then((hasilSum)=>{
            // console.log(typeof(hasilSum.data[0].sum))
            var idUser= cookies.get('userID')
            axios.post('http://localhost:8002/taxTotal',{
            idUser:idUser
            })
        .then((taxItem)=>{
            // console.log(typeof(taxItem.data))
            this.setState({
                hargaTax:taxItem.data,
                hargaSum:hasilSum.data[0].sum,
          
            })
            var tax=this.state.hargaTax
            var sum=this.state.hargaSum
            this.setState({
                hargaTotal:tax+sum
            })
            // console.log(this.state.hargaTax)
            // console.log(this.state.hargaSum)
        })

            this.setState({
                // hargaSum:hasilSum.data[0].sum
                })
            }
        )

        // axios.get('http://localhost:8002/taxTotal')
        // .then((taxItem)=>{
        //     console.log(typeof(taxItem.data))
        //     this.setState({
        //         hargaTax:taxItem.data,
        //     })
        // })

    }
    componentDidMount(){
        this.setState({
            hargaTotal:this.state.hargaTax + this.state.hargaSum
        })
    }

    hapusData =(e)=> {
        axios.post('http://localhost:8002/hapusdataitemCart',{
            id:e
        })
        alert("Item dihapus, silahkan pilih motor kembali!")
        window.location.reload();
    }

   
    updateKodeCart=(e)=>{
        var id=cookies.get('userID');
        // console.log(id)
        axios.post('http://localhost:8002/updatekodeCart/',{
            id:id
        })
        .then((ambildata)=>{
            
        })

    }
      

    render()
{
    /**Cookies login*/
    if (cookies.get('userID') === undefined)
    {
        return <Redirect to='/login'/>
    }
    /**akhir cookies login*/
    
    const Cart= this.state.dataCart.map((data, urut)=>{
        var urutan=urut+1+'.';
        var id =data.id_cart;
        var idUser=data.id_user;
        var idProduct=data.id_product;
        var namaMotor=data.nama_item;
        var harga =data.harga_item;
        var tglCart=data.cart_time;
        return (
        <tr>
            <td style ={{width:"30px", textAlign:'center'}}>{urutan}</td>
            <td style ={{width:"50px", textAlign:'center'}}>
            <button onClick={() =>this.hapusData(id)} className="btn btn-danger "><i className="fa fa-trash"></i></button>
            </td>
            <td style ={{textAlign:'center'}}>{namaMotor}</td>
            <td style ={{textAlign:'center'}}>Rp. {harga}</td>
            <td style ={{textAlign:'center'}}>Rp. {harga}</td>
        </tr>  
        )
    })
  
    return(
        (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
            
                <h1>Shopping Cart</h1><hr/>
                <table className="table table-striped table-hover table-bordered">
                <tr>
                        <th style ={{textAlign:'center'}}>Number</th>
                        <th style ={{textAlign:'center'}}>Action</th>
                        <th style ={{textAlign:'center'}}>Unit Name</th>
                        <th style ={{textAlign:'center'}}>Unit Price</th>
                        <th style ={{textAlign:'center'}}>Total Price</th>
                </tr>
                    <tbody>
                   {Cart}
                                      
                    <tr>
                        <th colSpan={4}><span className="pull-right">Sub Total</span></th>
                        <th style ={{textAlign:'center'}}>Rp. {this.state.hargaSum}</th>
                    </tr>
                    <tr>
                        <th colSpan={4}><span className="pull-right">Tax 10% / Unit </span></th>
                        <th style ={{textAlign:'center'}}>Rp. {this.state.hargaTax}</th>
                    </tr>
                    <tr>
                        <th colSpan={4}><span className="pull-right">Total</span></th>
                        <th style ={{textAlign:'center'}}>Rp. {this.state.hargaTotal}</th>
                    </tr>
                    <tr>
                        <td>
                           
                            <a href="" className="btn btn-info">Jadwalkan Test ride</a>
                        </td>
                        <td colSpan={4}><button onClick={()=>this.updateKodeCart()} className="pull-right btn btn-primary"><Link to="/checkout"><i className="fas fa-motorcycle" style={{color:"white"}}>Checkout</i></Link></button>
                        {/* <button onClick={() =>this.simpanData()} className="pull-center btn btn-success">Tambah Motor</button>&nbsp; */}
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
        </div>
        )
    );
}
}
export default Cart;