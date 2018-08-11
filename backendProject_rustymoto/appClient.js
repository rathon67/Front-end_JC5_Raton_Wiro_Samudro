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

//menampilkan produk di konten(halaman utama)
app.get('/productall', function (req, res) {

    // // console.log(req.query.page)
  
      var sql = 'SELECT * FROM product ORDER BY posted DESC LIMIT 3';
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
      var idCart=hasilnya[0].id_motor;
      var namaMotor=hasilnya[0].nama_motor;
      var hargaMotor= hasilnya[0].harga;
      idUser = idUser
      var posted = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
      // console.log(idUser)
      // console.log(idCart)
      // console.log(namaMotor)
      // console.log(hargaMotor)
      
      var sql = ` INSERT INTO tbl_cart VALUES ("${''}","${idUser}","${idCart}","${namaMotor}","${hargaMotor}","${posted}")`;
      db.query(sql, (kaloError, hasilnya) =>{
        if(kaloError){
          throw kaloError;
        }else{
          console.log('data Cart bersahil di input')
        }
      })      
    }
  })
})

/** melempar id cart konten ke cart */
// app.post('/getdataCartID', (req, res) => {
//   var sqlCart = `SELECT * FROM tbl_cart`;
//   db.query(sqlCart, (kaloError,hasilnya) =>{
//     if(kaloError){
//       throw kaloError;
//     } else {
//       res.send(hasilnya)
//     }
//   })
// })

//memanggil sebuah parameter id di cart
app.post('/getCartID', (req, res) =>{
  var idUser=req.body.idUser;
  var grabData = `SELECT * FROM tbl_cart WHERE id_user=${idUser}`;
  db.query(grabData, (kaloError, hasilnya)=>{
    if(kaloError){
      throw kaloError;
    }else{
      res.send(hasilnya);
    }
  })  
});
//akhir dari data pada cart

/** Proses memanggil data Cart */

//port localhost paling bawah
app.listen(8002);