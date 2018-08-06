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
    database:'db_rustymoto',
    multipleStatements: true
});
db.connect();

//Login Fungsi 
//Login Admin
app.post('/', (req, res) => {
    var sql = `SELECT * FROM newusers`;
    dbs.query(sql, (error, result) => {
        if(error) {
            throw error;
        } else {
            var username = req.body.username;
            var password = req.body.password;
            
            for(var i=0; i < result.length; i++ ){
                if(username === result[i].Username && password === result[i].Password){
                    var status = 'oke';
                    res.send(status);
                    break;
                } else if(i === result.length - 1) {
                    res.send('gagal');
                }
            }
        }
    });
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

 //Di form tambah produk untuk memanggil Category dan Jenis

 app.get('/getdata', (req,res)=> {
     var sql =`SELECT * FROM tbl_jenis`;

     db.query(sql, (kaloError, hasil)=>{
         if (kaloError){
             throw kaloError;
         } else {
             res.send(hasil);
            //  console.log(hasil)
         }
     })
 })
//menambah data product
app.post('/tambahData', (req, res) => {
    var fileName= req.files.file.name;
    var namaProduk = req.body.namamotor;
    var descProduk = req.body.desc;
    var hargaProduk = req.body.harga;
    var namaPembuat = req.body.pembuat;
    var status = req.body.status;
    var jenisMotor = req.body.jenismotor;
    var status1 = req.body.inputTujuh;
    var status2 = req.body.inputDelapan;
    var formatedMysqlString = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
    if (req.files){
        var fungsiFile= req.files.file;

        fungsiFile.mv("./tampunganFile/" +fileName ,(kaloError) =>{
            if(kaloError){
                console.log(kaloError);
                res.send('uploadfailed');
            }else {
                res.send('upload sukses');
            }
        })
    }
    var sql = `INSERT INTO product VALUES("${''}","${jenisMotor}", "${fileName}", "${namaProduk}","${descProduk}","${hargaProduk}","${namaPembuat}","${status}","${formatedMysqlString}")`;
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
 //memanggil data product yg di pilih melalui kondisi id pada db 
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

 //Delete data product
 app.post('/hapusdata', (req,res) => {
     var id=req.body.id;

    //  console.log(id)
     var hapusData =`DELETE FROM product WHERE id_motor=?`;
     db.query(hapusData,id, (err,hasil) =>{
         if (err)
         throw err;
        //  res.redirect('/listproduct')
        // console.log(hasil)
     })
 })

//untuk update data product 
    app.post('/ubahData', (req, res) => {
    var id = req.body.id;
    var jenisMotor=req.body.jenismotor;
    var fileName = req.files.file.name;
    var namaProduk = req.body.namaproduk;
    var descProduk =req.body.descproduk;
    var hargaProduk = req.body.hargaproduk;
    var namaPembuat=req.body.namapembuat;
    var statuS=req.body.statusproduk;
    var formatedMysqlString = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
    
//ketika mendapat kiriman berupa file maka akan di jalankan fungsi ini
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
    var queryUpdate = `UPDATE product SET  gambar ="${fileName}",nama_motor ="${namaProduk}",desc_product="${descProduk}", 
                        harga = "${hargaProduk}", pembuat = "${namaPembuat}",status="${statuS}",posted="${formatedMysqlString}" WHERE id_motor="${id}"`;
    db.query(queryUpdate, (err, result) => {
        if(err){
            throw err;
        } else {
            res.send('Update berhasil !');
        }
    });
});



//untuk menampilkan Listmember
    app.get('/listmember', (req,res) => {
        var panggilData = 'SELECT * FROM tbl_user';
        db.query(panggilData, (err,result)=>{
            if(err){
                throw err;
            }else {
                res.send(result)
            }
        });

    })
//tambah data category
app.post('/tambahdataCat', (req,res)=>{
    var Kategori=req.body.inputSatu;
    var sql = `INSERT INTO tbl_kategori VALUES ("${''}","${Kategori}")`;
    db.query(sql, (err,result)=>{
        if(err){
            throw err;
        }
    });
})

// untuk menampilkan list category
    app.get('/listcategory', (req,res) => {
        var panggilData ='SELECT * FROM tbl_kategori';
        db.query(panggilData,(err,result)=>{
            if(err){
                throw err;
            }else {
                res.send(result)
            }
        });
    })

// untuk hapus data category
app.post('/hapusdataCat', (req,res) => {
    var id=req.body.id;

   //  console.log(id)
    var hapusData =`DELETE FROM tbl_kategori WHERE id_kategori=?`;
    db.query(hapusData,id, (err,hasil) =>{
        if (err)
        throw err;
       //  res.redirect('/listproduct')
       // console.log(hasil)
    })
})


// MENAMBAH DETAIL CAROUSEL  UPLOAD 3 GAMBAR
app.post('/tambahdataproductcarou', (req,res)=>{
    var judul =req.body.judulcarou;
    var desc =req.body.desccarou;
    var fileName1= req.files.file1.name;
    var fileName2= req.files.file2.name;
    var fileName3= req.files.file3.name;
    if(req.files){
        var fungsiFile1=req.files.file1;
        var fungsiFile2=req.files.file2;
        var fungsiFile3=req.files.file3;
        fungsiFile1.mv("./filedetailCarou/" +fileName1),
        fungsiFile2.mv("./filedetailCarou/" +fileName2),
        fungsiFile3.mv("./filedetailCarou/" +fileName3)
    }        
        var sql=`INSERT INTO tbl_productcarou VALUES ("${''}","${judul}","${desc}","${fileName1}","${fileName2}","${fileName3}")`;
        db.query(sql,(err,result)=>{
            if(err){
                throw err;
            }else{
                res.send('data berhasil di simpan ^^')
            }
        })
    

})
//MENAMBAH DATA PRODUCT DETAILING

// tambah data detail brakes
app.post('/tambahdetailbrakes', (req,res) =>{
    var fileName= req.files.file.name;
    var brakes= req.body.descbrakes;
    if (req.files){
        var fungsiFile= req.files.file;

        fungsiFile.mv("./filedetailBrakes/" +fileName ,(kaloError) =>{
            if(kaloError){
                console.log(kaloError);
                res.send('uploadfailed');
            }else {
                res.send('upload sukses');
            }
        })
    }

var sql=`INSERT INTO detail_brakes VALUES ("${``}","${fileName}","${brakes}")`;
db.query(sql,(err,result)=>{
    if(err){
        throw err;
    }else{
        res.send('data Brakes berhasil di tambah')
    }
    });
})

//tambah data detail light
app.post('/tambahdatalampu', (req,res) =>{
    var fileName= req.files.file.name;
    var light= req.body.detaillampu;
    if (req.files){
        var fungsiFile= req.files.file;

        fungsiFile.mv("./filedetailLight/" +fileName ,(kaloError) =>{
            if(kaloError){
                console.log(kaloError);
                res.send('uploadfailed');
            }else {
                res.send('upload sukses');
            }
        })
    }

var sql=`INSERT INTO detail_light VALUES ("${``}","${fileName}","${light}")`;
db.query(sql,(err,result)=>{
    if(err){
        throw err;
    }else{
        res.send('data lampu berhasil di tambah')
    }
    });
})

//tambah data detail GEARBOX
app.post('/tambahdatagearbox', (req,res) =>{
    var fileName= req.files.file.name;
    var descbox= req.body.descgearbox;
    if (req.files){
        var fungsiFile= req.files.file;

        fungsiFile.mv("./filedetailGearbox/" +fileName ,(kaloError) =>{
            if(kaloError){
                console.log(kaloError);
                res.send('uploadfailed');
            }else {
                res.send('upload sukses');
            }
        })
    }

var sql=`INSERT INTO detail_gearbox VALUES ("${``}","${fileName}","${descbox}")`;
db.query(sql,(err,result)=>{
    if(err){
        throw err;
    }else{
        res.send('data gearbox berhasil di tambah')
    }
    });
})

// tambah data sadle
app.post('/tambahdatasadle', (req,res) =>{
    var fileName= req.files.file.name;
    var descsadle= req.body.descsadle;
    if (req.files){
        var fungsiFile= req.files.file;

        fungsiFile.mv("./filedetailSadle/" +fileName ,(kaloError) =>{
            if(kaloError){
                console.log(kaloError);
                res.send('uploadfailed');
            }else {
                res.send('upload sukses');
            }
        })
    }

var sql=`INSERT INTO detail_sadle VALUES ("${``}","${fileName}","${descsadle}")`;
db.query(sql,(err,result)=>{
    if(err){
        throw err;
    }else{
        res.send('data sadle berhasil di tambah')
    }
    });
})

// tambah data detail shocks
app.post('/tambahdatashocks', (req,res) =>{
    var fileName= req.files.file.name;
    var descshocks= req.body.descshocks;
    if (req.files){
        var fungsiFile= req.files.file;

        fungsiFile.mv("./filedetailShocks/" +fileName ,(kaloError) =>{
            if(kaloError){
                console.log(kaloError);
                res.send('uploadfailed');
            }else {
                res.send('upload sukses');
            }
        })
    }

var sql=`INSERT INTO detail_shocks VALUES ("${``}","${fileName}","${descshocks}")`;
db.query(sql,(err,result)=>{
    if(err){
        throw err;
    }else{
        res.send('data shocks berhasil di tambah')
    }
    });
})

//tambah data detail wheels
app.post('/tambahdatawheels', (req,res) =>{
    var fileName= req.files.file.name;
    var descwheels= req.body.descwheels;
    if (req.files){
        var fungsiFile= req.files.file;

        fungsiFile.mv("./filedetailWheels/" +fileName ,(kaloError) =>{
            if(kaloError){
                console.log(kaloError);
                res.send('uploadfailed');
            }else {
                res.send('upload sukses');
            }
        })
    }

var sql=`INSERT INTO detail_wheels VALUES ("${``}","${fileName}","${descwheels}")`;
db.query(sql,(err,result)=>{
    if(err){
        throw err;
    }else{
        res.send('data wheels berhasil di tambah')
    }
    });
})
//AKHIR MENAMBAH DATA PRODUCT DETAILING

//member register from user interface

    app.post('/register',(req,res)=>{
        var nmDepan =req.body.input1;
        var nmBlkg =req.body.input2;
        var email= req.body.input3;
        var address=req.body.input4;
        var state=req.body.input5;
        var pos=req.body.input6;
        var password=req.body.input7;
        var phone=req.body.input8;
        var ttl=req.body.input9;
        var insertData= `INSERT INTO tbl_user VALUES ("${''}","${nmDepan}","${nmBlkg}","${email}","${address}","${state}","${pos}","${password}","${phone}","${ttl}")`;
        db.query(insertData, (err,result)=>{
            if(err){
                throw err;
            }else{
                res.send('Data berhasil di tambahkan')
            }
        })
    })


    app.listen(8000, () => {
        console.log('Server started at port 8000 ...')
    });
