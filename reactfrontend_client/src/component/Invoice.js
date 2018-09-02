import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie'
import axios from 'axios';

const cookies = new Cookies();

class Invoice extends Component
{
    state={
        kdInvoice:'',
        namaProduct:[],
        hargaSum:[],
        hargaSUM:[],
        totalSub:0,
        totalPRICE:0,
    }
    
    componentDidMount(){
        var kdInvoice=this.props.location.state.kdInvoice;
        // console.log(kdInvoice)
        axios.post(`http://localhost:8002/getdataInvoiceUser`,{
            kdInvoice:kdInvoice
        })
        .then((ambilData)=>{
            console.log(ambilData)
            this.setState({
                namaCos:ambilData.data[0].nama,//
                    email:ambilData.data[0].email,//
                    harga:ambilData.data[0].harga,
                    tanggal:ambilData.data[0].tgl_buat,
                    kota :ambilData.data[0].kota,//
                    pos :ambilData.data[0].pos,//
                    phone:ambilData.data[0].phone,//
                    alamat:ambilData.data[0].alamat,//
                    kodeINV:ambilData.data[0].kode_invoice,//
                    status:ambilData.data[0].status,//

                    
                    namaProduct:ambilData.data,
                    hargaSum:ambilData.data,      
            })
            const hargaSUM=this.state.hargaSum
            console.log(hargaSUM)
            var total=0;
            for(var i=0; i<hargaSUM.length; i++){
                var harga=hargaSUM[i].harga
                harga=parseInt(harga)
                total=total+harga
                total=total*0.1+total
                var totalSub=total
                var	string = totalSub.toString(),
                sisanya 	= string.length % 3,
                rupiah2 	= string.substr(0, sisanya),
                ribuan2 	= string.substr(sisanya).match(/\d{3}/g);
                    
                if (ribuan2) {
                    var sepatator2 = sisanya ? '.' : '';
                    rupiah2 += sepatator2 + ribuan2.join('.');
                    }
                    var totalSub=rupiah2         
                
// TOTAL PRICE WITH RUPIAH VALUE
                var totalPrice=total+1200000
                var	number_string = totalPrice.toString(),
                sisa 	= number_string.length % 3,
                rupiah 	= number_string.substr(0, sisa),
                ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
                    
                if (ribuan) {
                    var separator = sisa ? '.' : '';
                    rupiah += separator + ribuan.join('.');
                    }
                    var totalPrice=rupiah          
                }
                
            this.setState({
                totalSub:totalSub,
                totalPRICE:totalPrice              
            })
        })    
    }
    render()
{
    const orderSummaryName=this.state.namaProduct.map((isi,index)=>{
           
        var namaProduct=isi.nama_product;
        return <tr>{namaProduct}</tr>
    })

    const orderSummaryPrice=this.state.hargaSum.map((isinya,indexnya)=>{
        var hargaSum=isinya.harga;
        return <tr>Rp. {hargaSum},00</tr>
    })
     //Cookies login
     if (cookies.get('userID') === undefined)
     {
         return <Redirect to='/login'/>
     }
     //akhir cookies login
    return(
        (
            <div>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="invoice-title">
                            <h1 style={{color: 'brown'}}>Invoice</h1><h3 className="text-right">Order Kode: INV{this.state.kodeINV}</h3>
                            </div>
                            <hr />
                            <div className="row">
                            <div className="col-md-6">
                                <address>
                                <strong>Billed By:</strong><br />
                                {this.state.namaCos}<br />
                                <b><i>Email: </i></b>{this.state.email}<br />
                                <b><i>Phone Number: </i></b>{this.state.phone}<br />
                                </address>
                            </div>
                            <div className="col-md-6 text-right">
                                <address>
                                <strong>Shipped To:</strong><br />
                                {this.state.alamat}<br />
                                 {this.state.kota},<br />
                                Indonesia, {this.state.pos}
                                </address>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                                <address>
                                <strong>Payment Method:</strong><br />
                                Transfer<br />
                                </address>
                            </div>
                            <div className="col-md-6 text-right">
                                <address>
                                <strong>Order Date:</strong><br />
                                {this.state.tanggal}<br /><br />
                                </address>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><strong>Order summary</strong></h3>
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                <table className="table table-condensed">
                                    <thead>
                                    <tr>
                                        <td><strong>Jenis Order</strong></td>
                                        <td className="text-center"><strong>.</strong></td>
                                        <td className="text-center"><strong>Strength</strong></td>
                                        <td className="text-right"><strong>Price</strong></td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/* foreach ($order->lineItems as $line) or some such thing here */}
                                    <tr>
                                        <td>{orderSummaryName}</td>
                                        <td className="text-center"></td>
                                        <td className="text-center"></td>                                                    
                                        <td className="pull-right text-right">{orderSummaryPrice}</td>
                                         </tr>
                                               
                                         <tr>
                                        <td className="thick-line" />
                                        <td className="thick-line" />
                                        <td className="thick-line text-center"><strong>Subtotal + Tax</strong></td>
                                         <td className="thick-line text-right">Rp. {this.state.totalSub},00</td>
                                         </tr>
                                         <tr>
                                          <td className="no-line" />
                                           <td className="no-line" />
                                        <td className="no-line text-center"><strong>Shipping</strong></td>
                                         <td className="no-line text-right">Rp. 1.200.000,00</td>
                                         </tr>
                                         <tr>
                                         <td className="no-line" />
                                         <td className="no-line" />
                                          <td className="no-line text-center"><strong>Total</strong></td>
                                          <td className="no-line text-right">Rp. {this.state.totalPRICE},00</td>
                                        </tr>    
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <Link to="/konten" className="btn-lg btn-warning" tabIndex={-1} role="button" aria-disabled="true">Kembali</Link>
                    </div>
                    <br /><br /><br /><br /><br /><br />
            </div>

        )
    );
}
}
export default Invoice;