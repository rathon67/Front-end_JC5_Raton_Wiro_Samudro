const express= require('express');
const koneksi = require('cors');
const app= express();
app.use(koneksi());

const bodyParser =require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
const upload=require('express-fileupload');
app.use(upload());

const mysql= require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database:'db_rustymoto'
});
db.connect();

app.listen(8000, () => {
    console.log('Server started at port 8000 ...')
});
//menampilkan data
app.get('/listproduct', (req, res) =>{
    // req.body //
    // req.params //terima parameter dari URL (contoh : 'https://localhost:8000/menu//:param2')  
    // req.query //(contoh :'https://localhost:8000/menu?params1=nasi&params2=goreng)

    // res.send('respon berhasil'); // memberikan respon dan menampilkan value berupa string dan array
    // res.end('berhasil konek'); //memberikan respon menalpikan hanya array string
    // res.json(); //memberikan respon dan menampilkan
    // res.render('form'); //menampilkan file (form pada contoh ini)
    var panggilData = 'SELECT * FROM product';
    db.query(panggilData, (err, result)=>{
        if(err){
            throw err;
        }else{
            res.send(result);
        }
    });
})
//menambah data
app.post('/tambahData', (req, res) => {
    var gambar = req.body.inputSatu;
    var namaProduk = req.body.inputDua;
    var descProduk = req.body.inputTiga;
    var hargaProduk = req.body.inputEmpat;
    var namaPembuat = req.body.inputLima;
    var status = req.body.inputEnam;
    var status1 = req.body.inputTujuh;
    var status2 = req.body.inputDelapan;
    var formatedMysqlString = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
    console.log( formatedMysqlString );
    var sql = `INSERT INTO product VALUES("${''}", "${gambar}", "${namaProduk}","${descProduk}","${hargaProduk}","${namaPembuat}","${status}","${formatedMysqlString}")`;
     db.query(sql, (kaloError, hasilnya) => {
         if(kaloError){
             throw kaloError;
         } 
        //  else {
        //      res.end('Data berhasil disimpan')
        //  }
     });
 });

 //untuk mengambil data perbaris clear except tabel desc(text area)

 app.get('/editdata/:id', (req, res) => {
    //  console.log(req.params.id);
    var grabData= `SELECT * FROM product WHERE id_motor = ${req.params.id}`;
    db.query(grabData, (kaloError, hasilnya) => {
        if(kaloError){
            throw kaloError;
        }else {
            res.send(hasilnya);
        }
    })
 });

 //untuk mengupdate data
//     app.post('/ubahData', (req,res) => {
//     if(req.files){
//     console.log(req.files);
//     var file= req.files.filename;
//     var filename=file.name;
//     file.mv("./tampunganFile/"+filename, (kaloError,hasilnya) => {
//         if(kaloError){
//             console.log(kaloError);
//             res.send('upload failed');
//         }else {
//             res.send('upload jadi')
//         }
//     })
// }

//      var id= req.body.id;
//     //  var gambarProduk=req.body.gambarproduk;
//      var namaProduk=req.body.namaproduk;
//      var descProduk=req.body.descproduk
//      var hargaProduk=req.body.harga;
//      var namaPembuat=req.body.namapembuat;
//      var statuS=req.body.status;
//      var sql= `UPDATE product SET gambar = "${filename}",nama_product= "${namaProduk}",desc_product="${descProduk}", harga="${hargaProduk}",pembuat="${namaPembuat}",status="${statuS}" WHERE id_motor="${id}" `;
//      db.query(sql, (kaloError, hasilnya)=>{
//          if(kaloError){
//              throw kaloError;
//          } else {
             
//          }
//      })

//  });

// app.listen(8000, (req, res) =>{
//     // console.log('server started on port 8k ....');
   
// });

//updatean baru (Masih Erorr) untuk mengupdate data 
    app.post('/ubahData', (req, res) => {
    var id = req.body.id;
    var fileName = req.files.file.name;
    var namaProduk = req.body.namaproduk;
    var descProduk =req.body.descproduk;
    var hargaProduk = req.body.harga;
    var namaPembuat=req.body.pembuat;
    var statuS=req.body.status;
    var formatedMysqlString = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
    

    if(req.files){
        var fungsiFile = req.files.file;
        fungsiFile.mv("./tampunganFile/"+fileName, (kaloError) => {
            if(kaloError){
                console.log(kaloError);
                res.send('Upload failed');
            } else {
                res.send('Upload berhasil');
            }
        })
    }
    var queryUpdate = `UPDATE product SET gambar ="${fileName}",nama_produk = "${namaProduk}",desc_produk="${descProduk}", 
                        harga = "${hargaProduk}", pembuat = "${namaPembuat}",status="${statuS}",posted="${formatedMysqlString}" WHERE id_motor="${id}"`;
    db.query(queryUpdate, (err, result) => {
        if(err){
            throw err;
        } else {
            res.send('Update berhasil !');
        }
    });
});


//Login Fungsi

    app.post('/', (req, res)=> {
        var sql= 'SELECT * FROM newusers';
        db.query(sql, (error,result) => {
            if(error){
                throw error;
            }else{
                var username =req.body.username;
                var password = req.body.password;
                for (var i=0; i<result.length; i++){
                    if(username === result[i].Username && password === result[i].Password){
                        var signal='OKE';
                        res.send(signal);
                        break;
                    }else if(i === result.length - 1){
                        res.send('gagal')
                    }                      
                    
                }
            }
        });
    });