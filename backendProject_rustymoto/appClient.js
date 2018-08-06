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

app.get('/productall', function (req, res) {

    // // console.log(req.query.page)
  
      var sql = 'SELECT * FROM product';
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
  
      });
  })



//port localhost paling bawah
app.listen(8002);