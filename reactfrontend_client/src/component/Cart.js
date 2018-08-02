import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Cart extends Component
{
    render()
{
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
                    <tbody>
                    <tr>
                        <th>Number</th>
                        <th>Unit Name</th>
                        <th>Unit Price</th>
                        <th>Total Price</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Vespa 1962 <a href="">X</a></td>
                        <td>Rp. 11.500.000</td>
                        <td>Rp. 11.500.000</td>
                    </tr>
                    <tr>
                        <th colSpan={3}><span className="pull-right">Sub Total</span></th>
                        <th>Rp. 11.500.000</th>
                    </tr>
                    <tr>
                        <th colSpan={3}><span className="pull-right">Pajak 20%</span></th>
                        <th>Rp. 500.000</th>
                    </tr>
                    <tr>
                        <th colSpan={3}><span className="pull-right">Total</span></th>
                        <th>Rp. 12.000.000</th>
                    </tr>
                    <tr>
                        <td>
                            <a href="" className="btn btn-primary">Lanjut Bayar</a>
                            <a href="" className="btn btn-primary">Jadwalkan Test ride</a>
                        </td>
                        <td colSpan={3}><Link to="/checkout" className="pull-right btn btn-success">Checkout</Link></td>
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