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
  console.log(encpass)
  var sql = `SELECT id_user,email,password FROM tbl_user`;
  db.query(sql, (error, result) => {
      if(error) {
          throw error;
      } else { 
          for(var i=0; i < result.length; i++ ){
              if(Email === result[i].email && encpass === result[i].password){
                console.log('Login Berhasil')
                //console.log(result[i].id)
                var userID= result[i].id_user;
                res.send((userID).toString());
                break;  
              } 
              else if (i === result.length - 1) {                   
                  res.send('1')
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
app.get('/getMotorCard', function (req, res) {

    // // console.log(req.query.page)
  
      var sql = 'SELECT product.id_motor, product.id_jenis, product.gambar, product.nama_motor, product.harga, product.pembuat, product.posted, master_status.status FROM product JOIN master_status ON master_status.id_status=product.status WHERE product.status=7 OR product.status=8 OR product.status=9 ORDER BY posted DESC LIMIT 6';
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
        
      });
  })
/** akhir dari produk di konten */

/** Menampilkan Detail per Motor */ //memanggil parameter
app.get(`/getDetailMotor/:id_motor`, (req,res)=>{
  console.log(req.params.id_motor)
  var selectJoinDetailOnProduct =`SELECT product.gambar, product.nama_motor, product.desc_product, product.harga, product.harga, detail_light.gambar_light, detail_light.desc_light, detail_brakes.gambar_brakes, detail_brakes.desc_brakes, detail_gearbox.gambar_gearbox, detail_gearbox.desc_gearbox, detail_sadle.gambar_sadle, detail_sadle.desc_sadle, detail_shocks.gambar_shocks, detail_shocks.desc_shocks, detail_wheels.gambar_wheels, detail_wheels.desc_wheels, detail_rangka.type_rangka, detail_rangka.suspensi_depan, detail_rangka.suspensi_belakang, detail_rangka.rem_depan, detail_rangka.rem_belakang, detail_mesin.type_mesin,
  detail_mesin.diameter_mesin, detail_mesin.volume_cilinder, detail_mesin.system_starter, detail_mesin.system_pelumasan, detail_mesin.kapasitas_oli, detail_mesin.bahan_bakar, detail_mesin.type_kopling, detail_mesin.type_transmisi, detail_dimensi.pjg_lbr_ttg, detail_dimensi.jarak_sumbu_roda, detail_dimensi.jarak_terendah_ketanah, detail_dimensi.tinggi_tempat_duduk, detail_dimensi.berat_isi, detail_dimensi.kapasitas_tangki, detail_kelistrikan.sistem_pengapian, detail_kelistrikan.battery, detail_kelistrikan.type_busy
  FROM product
  JOIN detail_light ON detail_light.id_motor =product.id_motor
  JOIN detail_brakes ON detail_brakes.id_motor=product.id_motor
  JOIN detail_gearbox ON detail_gearbox.id_motor=product.id_motor
  JOIN detail_sadle ON detail_sadle.id_motor=product.id_motor
  JOIN detail_shocks ON detail_shocks.id_motor=product.id_motor
  JOIN detail_wheels ON detail_wheels.id_motor=product.id_motor
  JOIN detail_rangka ON detail_rangka.id_motor=product.id_motor
  JOIN detail_mesin ON detail_mesin.id_motor=product.id_motor
  JOIN detail_dimensi ON detail_dimensi.id_motor=product.id_motor
  JOIN detail_kelistrikan ON detail_kelistrikan.id_motor=product.id_motor
  WHERE product.id_motor="${req.params.id_motor}"
  `
  db.query(selectJoinDetailOnProduct,(err,result)=>{
    if(err){
      throw err;
    }else{
      res.send(result)
    }
  })
})
/** end */

/** List motor section */
/**list motor classic */
app.get('/getListMotorClassic', (req,res)=>{
  var getListMotor= `SELECT product.id_motor, product.nama_motor, product.gambar, master_status.status FROM product JOIN master_status ON master_status.id_status=product.status WHERE tahun_pembuatan <=1990`;
  db.query(getListMotor, (err,result)=>{
    if(err){
      throw err;
    }else{
      res.send(result)
    }
  })
})

/**list motor bobber */
app.get('/getListMotorBobber', (req,res)=>{
  var getListMotor= `SELECT product.id_motor, product.nama_motor, product.gambar, master_status.status FROM product JOIN master_status ON master_status.id_status=product.status WHERE product.id_jenis=9`;
  db.query(getListMotor, (err,result)=>{
    if(err){
      throw err;
    }else{
      res.send(result)
    }
  })
})

app.get('/getListMotorChopper', (req,res)=>{
  var getListMotor= `SELECT product.id_motor, product.nama_motor, product.gambar, master_status.status FROM product JOIN master_status ON master_status.id_status=product.status WHERE product.id_jenis=8`;
  db.query(getListMotor, (err,result)=>{
    if(err){
      throw err;
    }else{
      res.send(result)
    }
  })
})

app.get('/getListMotorCaferacer', (req,res)=>{
  var getListMotor= `SELECT product.id_motor, product.nama_motor, product.gambar, master_status.status FROM product JOIN master_status ON master_status.id_status=product.status WHERE product.id_jenis=10`;
  db.query(getListMotor, (err,result)=>{
    if(err){
      throw err;
    }else{
      res.send(result)
    }
  })
})

app.get('/getListMotorTracker', (req,res)=>{
  var getListMotor= `SELECT product.id_motor, product.nama_motor, product.gambar, master_status.status FROM product JOIN master_status ON master_status.id_status=product.status WHERE product.id_jenis=11`;
  db.query(getListMotor, (err,result)=>{
    if(err){
      throw err;
    }else{
      res.send(result)
    }
  })
})
/**End of section */



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
        var dataP= ` SELECT id_product FROM tbl_cart WHERE id_product =${idMotor} AND id_user=${idUser} AND id_status=1`;
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
            } else {
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
/**end */

/**menampilkan history invoice  */
app.post('/getInvoiceHistory', (req,res)=>{
  var idCookiesUser=req.body.idUser
  console.log(idCookiesUser)
  getInvoiceH=`SELECT * FROM tbl_invoice WHERE id_user='${idCookiesUser}'`;
  db.query(getInvoiceH, (err,result)=>{
    if (err){
      throw err;
    }else{
      res.send(result)
    }
  })
})
/**end */

/**menampilkan invoice user */
app.post('/getdataInvoiceUser', (req,res)=>{
  var kdInvoice=req.body.kdInvoice
  kdInvoice ="'"+kdInvoice+"'"

  var sql=`SELECT * FROM tbl_invoice WHERE kode_invoice=${kdInvoice}`;
  db.query(sql,(err,result)=>{
      if(err){
          throw err;
      }else{
          res.send(result)
          // console.log(result)          
      }
  })
})
/** */
//port localhost paling bawah
app.listen(8002, () => {
  console.log('Server started at port 8002 for Client UI...')
});