const express= require('express');
const koneksi = require('cors');
const app= express();
app.use(`/filebuktiTransfer`, express.static(`filebuktiTransfer`));
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

app.get('/', (req, res)=> {
    res.send('Halaman Dasboard')
})

//login admin with session
app.post('/adminlogin', (req, res) => {
    var Email =req.body.email;
    var Password =req.body.password;

    console.log(Email)
    console.log(Password)
    var sql = `SELECT * FROM tbl_admin`;
    db.query(sql, (error, result) => {
        if(error) {
            throw error;
        } else { 
            for(var i=0; i < result.length; i++ ){
                if(Email === result[i].email && Password === result[i].password){
                  console.log('Login Berhasil')
                  //console.log(result[i].id)
                  var userID= result[i].id_admin;
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
         }  else {
            res.send(hasil)
            
        }
     })
 })

 //mengambil id motor untuk di kirim ke tambah carousel
 app.get('/getdataidmotor',(req,res)=>{
    sql =`SELECT * FROM
    product
    ORDER BY id_motor DESC limit 1`;
    db.query(sql, (err,result)=>{
        if(err){
            throw err;
        }else{
            res.send(result)
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
    
    var namaProduk = req.body.namaproduk;
    var descProduk =req.body.descproduk;
    var hargaProduk = req.body.hargaproduk;
    var namaPembuat=req.body.namapembuat;
    var statuS=req.body.statusproduk;
    var formatedMysqlString = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
    
//ketika mendapat kiriman berupa file maka akan di jalankan fungsi ini
    if(req.files){
        var fileName = req.files.file.name;
        var fungsiFile = req.files.file;
        fungsiFile.mv("./tampunganFile/"+fileName, (kaloError) => {
            if(kaloError){
                console.log(kaloError);
                // res.send('Upload failed');
            } else {
                    var queryUpdate = `UPDATE product SET  gambar ="${fileName}",nama_motor ="${namaProduk}",desc_product="${descProduk}", 
                        harga = "${hargaProduk}", pembuat = "${namaPembuat}",status="${statuS}",posted="${formatedMysqlString}" WHERE id_motor="${id}"`;
                    db.query(queryUpdate, (err, result) => {
                        if(err){
                            throw err;
                        } else {
                            res.send('Update berhasil !');
                        }
                    });
                
            }
        })
    } else {
            var queryUpdate = `UPDATE product SET nama_motor ="${namaProduk}",desc_product="${descProduk}", 
            harga = "${hargaProduk}", pembuat = "${namaPembuat}",status="${statuS}",posted="${formatedMysqlString}" WHERE id_motor="${id}"`;
        db.query(queryUpdate, (err, result) => {
            if(err){
                throw err;
            } else {
                res.send('Update berhasil !');
            }
    });

    }
    
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
    var idmotor=req.body.idmotor
    var judul =req.body.judulcarou;
    var desc =req.body.desccarou;
    var fileName1= req.files.file1.name;
    var fileName2= req.files.file2.name;
    var fileName3= req.files.file3.name;
    if(idmotor !== '' && judul !== '' && desc !== '' && fileName1 !== '' && fileName2 !== '' && fileName3 !== ''){
        var fungsiFile1=req.files.file1;
        var fungsiFile2=req.files.file2;
        var fungsiFile3=req.files.file3;
        fungsiFile1.mv("./filedetailCarou/" +fileName1, (err)=>{
            if (err){
                console.log('upload gagal');
            } else {
                console.log('upload sukses')
                var sql=`INSERT INTO tbl_productcarou VALUES ("${''}","${idmotor}","${judul}","${desc}","${fileName1}")`;
                db.query(sql, (err, result)=>{
                    if(err){
                        throw err;
                    }else{
                        res.send('1');
                    }
                })
            }
        }),
        fungsiFile2.mv("./filedetailCarou/" +fileName2, (err) => {
            if(err){
                console.log('upload gagal');
            }else {
                console.log('upload sukses')
                var sql=` INSER INTO tbl_productcarou (gambar2) VALUES ("${fileName2}")`;
                db.quert(sql, (err, result)=>{
                    if(err){
                        throw err;
                    }else {
                        res.send('1');
                    }
                })
            }
        })
        fungsiFile3.mv("./filedetailCarou/" +fileName3, (err) => {
            if(err){
                console.log('upload gagal');
            }else {
                console.log('upload sukses')
                var sql=` INSER INTO tbl_productcarou (gambar3) VALUES ("${fileName3}")`;
                db.quert(sql, (err, result)=>{
                    if(err){
                        throw err;
                    }else {
                        res.send('1');
                    }
                })
            }
        })
    }       
  
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
                // res.send('upload sukses');
            }
        })
    }

var sql=`INSERT INTO detail_light VALUES ("${``}","${fileName}","${light}")`;
db.query(sql,(err,result)=>{
    if(err){
        throw err;
    }else{
        // res.send('data lampu berhasil di tambah')
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
                // res.send('upload sukses');
            }
        })
    }

var sql=`INSERT INTO detail_gearbox VALUES ("${``}","${fileName}","${descbox}")`;
db.query(sql,(err,result)=>{
    if(err){
        throw err;
    }else{
        // res.send('data gearbox berhasil di tambah')
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
                // res.send('upload sukses');
            }
        })
    }

var sql=`INSERT INTO detail_sadle VALUES ("${``}","${fileName}","${descsadle}")`;
db.query(sql,(err,result)=>{
    if(err){
        throw err;
    }else{
        // res.send('data sadle berhasil di tambah')
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

// menampilkan data Checkout
app.get('/getDataCheckout', (req,res)=>{
    var sql= `SELECT * FROM tbl_checkout JOIN tbl_cart on tbl_cart.id_cart = tbl_checkout.id_cart GROUP BY tbl_checkout.kode_checkout`;
    db.query(sql, (err,result)=>{
        if (err){
            throw err;
        }else{
            res.send(result)
            // console.log(result)
        }
    })
})

/** update status pada Checkout triple fungsi*/
app.post(`/updateStatusLunas`, (req,res)=>{
    var idklick1 =req.body.kodeCheckout;
    var sql= `UPDATE tbl_checkout SET status='${1}' WHERE kode_checkout =${idklick1};`
    sql+= `SELECT * FROM tbl_checkout WHERE kode_checkout =${idklick1};`
    sql+= `SELECT tbl_checkout.id_cart, tbl_cart.nama_item, tbl_cart.harga_item,tbl_cart.id_user  
    FROM tbl_checkout
    JOIN tbl_cart ON tbl_cart.id_cart=tbl_checkout.id_cart
    WHERE tbl_checkout.kode_checkout =${idklick1};`
    sql+=`SELECT COUNT(*) AS jml_motor FROM tbl_checkout WHere kode_checkout=${idklick1};`
    db.query(sql, (err,result)=>{
        if(err){
            throw err;
        }else{  console.log(result)  
                    var tgl_buat = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
                    var idCheckout =result[1][0].id_checkout
                    // console.log(typeof(idCheckout)) 
                    console.log(idCheckout)
                    var idCart =result[1][0].id_cart
                    var kode_checkout=result[1][0].kode_checkout
                    var email=result[1][0].email
                    var nama=result[1][0].nama
                    var alamat=result[1][0].alamat
                    var kota=result[1][0].kota
                    var pos=result[1][0].pos
                    var phone=result[1][0].phone
                    var status=result[1][0].status
                    var namaMotor=result[2][0].nama_item
                    var hargaitem=result[2][0].harga_item
                    var iduser=result[2][0].id_user
                    var jmlmotordibeli=result[3][0].jml_motor
                    var sql =`INSERT INTO tbl_invoice VALUES ("${''}","${idCheckout}","${iduser}","${namaMotor}","${jmlmotordibeli}","${nama}","${email}","${hargaitem}","${status}","${tgl_buat}")`;
                    db.query(sql, (err,result)=>{
                        if(err){
                            throw err;
                        }else{
                            // console.log(result)
                        }
                    })
        }
    })
})
/** tambah data invoice */
app.post(`/tambahDataInvoice`, (req,res)=>{
    var idCheckout =req.body.id
    var sql =`INSERT INTO tbl_invoice VALUES ("${''}","${'id_checkout'}","${'id_user'}","${'namaproduk'}","${'jumlahproduk'}","${'nama'}","${'email'}","${'harga'}","${'status'}","${'tgl_invoice'}")`

})

/**akhir dari tambah data invoice */

app.post(`/updateStatusAngsur`, (req,res)=>{
    var id =req.body.id;
    var sql= `UPDATE tbl_checkout SET status='${2}' WHERE id_checkout =${id}`;
    db.query(sql, (err,result)=>{
        if(err){
            throw err;
        }else{
            res.send('update status menjadi Angsur')
        }
    })
})

app.post(`/updateStatusGagal`, (req,res)=>{
    var id =req.body.id;
    var sql= `UPDATE tbl_checkout SET status='${3}' WHERE id_checkout =${id}`;
    db.query(sql, (err,result)=>{
        if(err){
            throw err;
        }else{
            res.send('update status menjadi gagal')
        }
    })
})

/**menyimpan bukti pembayaran */
app.post('/kirimbuktiPembayaran', (req,res)=>{
    var idUser =req.body.idUser;
    var fileName= req.files.file.name;
    var deskPembayaran= req.body.deskPembayaran;
    var posted =(new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
    if (req.files){
        var fungsiFile= req.files.file;
        // console.log(idUser)
        // console.log(fileName)
        // console.log(deskPembayaran)
        // console.log(fungsiFile) 

        fungsiFile.mv("./filebuktiTransfer/" +fileName ,(kaloError) =>{
            if(kaloError){
                console.log(kaloError);
                res.send('uploadfailed');
            }else {
                res.send('upload sukses');
            }
        })
    }
    var sql=`INSERT INTO tbl_buktipembayaran VALUES ("${``}","${idUser}","${fileName}","${deskPembayaran}","${posted})`;
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
            // res.send('data pembayaran berhasil di upload')
        }
    });
})

/** menampilkan semua bukti transfer/ pembayaran */
app.get('/getdataPembayaran', (req,res)=>{ 
    var sql=` SELECT * FROM tbl_buktipembayaran`;
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send(result)
        }
    })
})
/** akhir dari proses bukti pembayaran */
/** menampilkan get data detail pembayaran */
app.get ('/getDetailPembayaran/:id', (req,res)=>{
    var sql =`SELECT * FROM tbl_buktipembayaran WHERE id_user=${req.params.id}`;
    // console.log(sql)
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send(result)
        }
    })
})
/** akhir dari get data detail pembayaran */

/**untuk menampilkan data invoice */
app.get (`/getdataInvoice`, (req,res)=>{
    var sql=`SELECT * FROM tbl_invoice`;
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send(result)
        }
    })
})

    app.listen(8000, () => {
        console.log('Server started at port 8000 ...')
    });
