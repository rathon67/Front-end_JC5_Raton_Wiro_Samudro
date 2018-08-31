var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var url = bodyParser.urlencoded({ extended: false })

const mysql = require('mysql');
const crypto = require('crypto');
const secret = 'abcdefg';

const fileUpload = require('express-fileupload');
app.use(fileUpload());

// include ini untuk bisa menampilkan semua file foto di public
app.use(express.static(__dirname));
///////////////////////////////////////////////////////////////

// Untuk membuat unic id (permili second)
// var uniqid = require('uniqid');
/////////////////////////////////////////////


// untuk include cors (semua orang bisa akses)
var cors = require('cors')
app.use(cors());

// boddy parser yang kita terima berbentuk json dari react jadi harus di include
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'db_rustymoto'
});

db.connect();

//login user cookies
app.get('/', (req, res)=> {
  res.send('Halaman Dasboard')
});

app.post('/userlogin', (req, res) => {
  var Email =req.body.email;
  var Password =req.body.password;
  var encpass = crypto.createHash('sha256', secret).update(Password).digest('hex');

  // console.log(Email)
  // console.log(Password)
  var sql = `SELECT id_user,email,password FROM tbl_user`;
  db.query(sql, (error, result) => {
      if(error) {
          throw error;
      } else { 
          for(var i=0; i < result.length; i++ ){
              if(Email === result[i].email && Password === result[i].password){
                console.log('Login Berhasil')
                //console.log(result[i].id)
                var userID= result[i].id_user;
                res.send((userID).toString());
                break;  
              } 
              else if (i === result.length - 1) {                   
                  console.log('Data tidak sesuai. silahkan Input correct Account')
              }
          }
      }
  });
});
//akhir login

/**untuk proses perubahan pada header */
app.post('/profileuser', (req,res)=>{
 var userCookies= req.body.idUser;
  // console.log(userCookies)
 var sql= `SELECT * FROM tbl_user WHERE id_user=${userCookies}`;
 db.query(sql,(err,result) =>{
   if(err) throw err;
   res.send(result)
 })
})
/** akhir dari proses perubahan pada header */

//menampilkan produk di konten(halaman utama)
app.get('/productall', function (req, res) {

    // // console.log(req.query.page)
  
      var sql = 'SELECT * FROM product ORDER BY posted DESC LIMIT 6';
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
        
      });
  })
/** akhir dari produk di konten */



/** add to cart */
app.post('/addtoCart', (req, res)=>{
  var idproduct = req.body.e
  var idUser = req.body.idUser
  // console.log(idproduct)
  // console.log(idUser)
  var tarikdataProduct = ` SELECT * FROM product WHERE id_motor ="${idproduct}"`
  db.query(tarikdataProduct, (kaloError, hasilnya) =>{
    if(kaloError) {
      throw kaloError;
    }else{
      // console.log(hasilnya)
      var idMotor=hasilnya[0].id_motor;
      var namaMotor=hasilnya[0].nama_motor;
      var hargaMotor= hasilnya[0].harga;
      idUser = idUser
      var posted = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
      // console.log(idUser)
      // console.log(idCart)
      // console.log(namaMotor)
      // console.log(hargaMotor)
      for(var i=0; i<hasilnya.length; i++){
        var dataP= ` SELECT id_product FROM tbl_cart WHERE id_product =${idMotor}`
        db.query(dataP, (err, result)=>{
          if(err){
            throw err;
          } else {
            if(result.length == 0 ){
              
              var sql = ` INSERT INTO tbl_cart VALUES ("${''}","${idUser}","${idMotor}","${1}","${namaMotor}","${hargaMotor}","${posted}")`;
                db.query(sql, (kaloError, hasilnya) =>{
                if(kaloError){
                  throw kaloError;
                }else{   
                  res.send('1')
                }
              }) 
              }else{
                 res.send('-1')
            }
          }
        })
      }
  
    }
  })
})

/** memanggil sebuah parameter id di cart */
app.post('/getCartItem', (req, res) =>{
  var idUser=req.body.idUser;
  var grabData = `SELECT * FROM tbl_cart WHERE id_user=${idUser} AND id_status="1" OR id_status="2"`;
  db.query(grabData, (kaloError, hasilnya)=>{
    if(kaloError){
      throw kaloError;
    }else{
      res.send(hasilnya);
    }
  })
    
});
/** akhir dari data pada cart */

/**Delete Cart item */
app.post('/hapusdataitemCart', (req,res)=>{
  var id=req.body.id
  var hapusItem= `DELETE FROM tbl_cart WHERE id_cart=?`;
  db.query(hapusItem,id, (err,hasil)=>{
    if (err)
    throw err;
  })
})
/** akhir dari delete cart item */

/** mengolah data Cart */
/** jumlah subtotal */
app.post('/jumlahsubHarga', (req, res)=>{
  var iduser= req.body.idUser
  // console.log(iduser)
  var sumSubharga = `SELECT SUM(harga_item) AS sum FROM tbl_cart WHERE id_user=${iduser} AND id_status="1" OR id_status="2"`;
  db.query(sumSubharga, (err,hasil)=>{
    if (err){
    throw err;
    }else {
      // console.log(hasil)
      res.send(hasil);
      
    }
  })
})
/**akhir dari subtotal */
app.post('/taxTotal', (req,res)=>{
  var iduser= req.body.idUser
  var tax= `SELECT harga_item FROM tbl_cart WHERE id_user=${iduser} AND id_status="1" OR id_status="2"`;
  db.query(tax, (err,hasil)=>{
    if(err){
      throw err;
    }else{
      var hasilTax=[]
      var totalTax=0;
      for(var i=0; i<hasil.length; i++){
        hasilTax = hasil[i].harga_item * 0.1;
        var totalTax = totalTax + hasilTax;
      }
      res.send(totalTax.toString())
      // console.log(totalTax.toString())
    }
  })
})
/** akhir dari pengolahan data Cart */

/**checkout section */
/** tambah data checkout */
app.post('/tambahdataCheckout', (req,res)=>{
  var idUser=req.body.idUser;
  // console.log(idCart)
  var nameAndPrice= `SELECT id_cart,nama_item, harga_item FROM tbl_cart WHERE id_user='${idUser}' AND id_status=1`;
  db.query(nameAndPrice, (err,result)=>{
    if(err){
      throw err; 
    }else{
        // console.log(result[0].nama_item)
          var listCart =result
          console.log(result)
          var email =req.body.email;
          var nama =req.body.nama;
          var alamat =req.body.alamat;
          var kota = req.body.kota;
          var pos =req.body.pos;
          var phone =req.body.phone;
          var waktuOrder = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
          
          var takeorderID = 'SELECT kode_checkout FROM tbl_checkout';
          db.query(takeorderID, (err, results) =>{
            if (err) throw err
            else
            {
              var length = results.length;
              // console.log(length)
              // console.log(results)
              
              var kodeCheckout = 0;
              (length === 0) ? kodeCheckout = 0 : kodeCheckout = parseInt(results[length-1].kode_checkout);
              var INV = kodeCheckout + 1;
              var kodeCK = '';
              
              if (INV < 10)  kodeCK = kodeCK + '0000' + INV
              else if (INV >= 10 && INV < 100) kodeCK = kodeCK + '000' + INV
              else if (INV >= 100 && INV < 1000) kodeCK = kodeCK + '00' + INV
              else if (INV >= 1000 && INV < 10000) kodeCK = kodeCK + '0' + INV
              else kodeCK = kodeCK + INV
              // generate Invoice Code
              // console.log(kodeCK)
              var counter=0
              for (var i =0; i<listCart.length; i++){
                    
              // console.log(idCart[i].id_cart)
              var sql =` INSERT INTO tbl_checkout VALUES ("${''}","${listCart[i].id_cart}","${idUser}","${kodeCK}","${listCart[i].nama_item}","${listCart[i].harga_item}","${email}","${nama}","${alamat}","${kota}","${pos}","${phone}","${'2'}","${waktuOrder}")`;
              db.query(sql, (err, result)=>{
                if (err){
                  throw err;
                }else{
                  counter++
                  console.log(counter)
                  // console.log(listCart)
                  if(counter == listCart.length){
                    var updateCart = `UPDATE tbl_cart SET id_status="2" WHERE id_user="${idUser}" AND id_status="1"`;
                    db.query(updateCart, (err,result)=>{
                      if(err){
                        throw err;
                      }else{
                       

                      }
                    })
                    // console.log('masuk')
                  }
                }
              })
              }
            }
          });

        }        
      })  
  
})


/** get id cart */
app.get(`/idcarttoChecout`, (req,res)=>{

  sql=` SELECT id_cart FROM tbl_cart`;
  db.query(sql, (err,result)=>{
    if(err){
      throw err;
    }else{
      res.send(result);
    }
  })
})
//port localhost paling bawah
app.listen(8002, () => {
  console.log('Server started at port 8002 for Client UI...')
});