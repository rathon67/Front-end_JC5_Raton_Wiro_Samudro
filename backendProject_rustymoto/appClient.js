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

// boddy parser yang kita terima berbentuk jason dari react jadi harus di include
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
// akhir dari produk di konten

//memanggil sebuah parameter id di cart
app.get('/getCartID/:id', (req, res) =>{
  var grabData = `SELECT * FROM product WHERE id_motor=${req.params.id}`;
  db.query(grabData, (kaloError, hasilnya)=>{
    if(kaloError){
      throw kaloError;
    }else{
      res.send(hasilnya);
    }
  })
});
//akhir dari ID
//port localhost paling bawah
app.listen(8002);