-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2018 at 08:22 AM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_rustymoto`
--

-- --------------------------------------------------------

--
-- Table structure for table `detail_brakes`
--

CREATE TABLE IF NOT EXISTS `detail_brakes` (
`id_brakes` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `gambar` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_brakes` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_brakes`
--

INSERT INTO `detail_brakes` (`id_brakes`, `id_motor`, `gambar`, `desc_brakes`) VALUES
(1, 19, 'vespasip2.jpg', 'Dijamin Masuk datanya!');

-- --------------------------------------------------------

--
-- Table structure for table `detail_dimensi`
--

CREATE TABLE IF NOT EXISTS `detail_dimensi` (
`id_dimensi` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `pjg_lbr_ttg` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `jarak_sumbu_roda` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `jarak_terendah_ketanah` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `tinggi_tempat_duduk` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `berat_isi` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `kapasitas_tangki` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_dimensi`
--

INSERT INTO `detail_dimensi` (`id_dimensi`, `id_motor`, `pjg_lbr_ttg`, `jarak_sumbu_roda`, `jarak_terendah_ketanah`, `tinggi_tempat_duduk`, `berat_isi`, `kapasitas_tangki`) VALUES
(2, 19, '20Cm, 32Cm, 67Cm', '12Cm', '5Cm', '56Cm', '120Kg', '7.7Liter');

-- --------------------------------------------------------

--
-- Table structure for table `detail_gearbox`
--

CREATE TABLE IF NOT EXISTS `detail_gearbox` (
`id_gearbox` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `gambar` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_gearbox` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_gearbox`
--

INSERT INTO `detail_gearbox` (`id_gearbox`, `id_motor`, `gambar`, `desc_gearbox`) VALUES
(1, 19, 'sipclass.jpg', 'masuk!');

-- --------------------------------------------------------

--
-- Table structure for table `detail_kelistrikan`
--

CREATE TABLE IF NOT EXISTS `detail_kelistrikan` (
`id_kelistrikan` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `sistem_pengapian` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `battery` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `type_busy` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_kelistrikan`
--

INSERT INTO `detail_kelistrikan` (`id_kelistrikan`, `id_motor`, `sistem_pengapian`, `battery`, `type_busy`) VALUES
(3, 19, 'CDI ignition HV 3000', 'Aki Cuan 6500', 'NGK 3000L');

-- --------------------------------------------------------

--
-- Table structure for table `detail_light`
--

CREATE TABLE IF NOT EXISTS `detail_light` (
`id_light` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `gambar` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_light` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_light`
--

INSERT INTO `detail_light` (`id_light`, `id_motor`, `gambar`, `desc_light`) VALUES
(1, 0, 'BSA4.jpg', 'Lampu HD White '),
(2, 0, 'motobene cafe racer rocketgarage-001.JPG', 'lampu detail test'),
(3, 0, 'motorbike113103.jpg', 'lampu detail test lagi'),
(5, 19, 'vespa62.jpg', 'masuk !');

-- --------------------------------------------------------

--
-- Table structure for table `detail_mesin`
--

CREATE TABLE IF NOT EXISTS `detail_mesin` (
`id_mesin` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `type_mesin` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `diameter_mesin` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `volume_cilinder` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `system_starter` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `system_pelumasan` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `kapasitas_oli` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `bahan_bakar` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `type_kopling` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `type_transmisi` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_mesin`
--

INSERT INTO `detail_mesin` (`id_mesin`, `id_motor`, `type_mesin`, `diameter_mesin`, `volume_cilinder`, `system_starter`, `system_pelumasan`, `kapasitas_oli`, `bahan_bakar`, `type_kopling`, `type_transmisi`) VALUES
(1, 19, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test'),
(2, 19, '1', '1', '1', '1', '1', '1', '1', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `detail_rangka`
--

CREATE TABLE IF NOT EXISTS `detail_rangka` (
`id_detailrangka` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `type_rangka` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `suspensi_depan` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `suspensi_belakang` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `rem_depan` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `rem_belakang` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_rangka`
--

INSERT INTO `detail_rangka` (`id_detailrangka`, `id_motor`, `type_rangka`, `suspensi_depan`, `suspensi_belakang`, `rem_depan`, `rem_belakang`) VALUES
(1, 19, 'test', 'test', 'test', 'test', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `detail_sadle`
--

CREATE TABLE IF NOT EXISTS `detail_sadle` (
`id_sadle` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `gambar` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_sadle` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_sadle`
--

INSERT INTO `detail_sadle` (`id_sadle`, `id_motor`, `gambar`, `desc_sadle`) VALUES
(4, 19, 'vespa62.jpg', 'masuk!');

-- --------------------------------------------------------

--
-- Table structure for table `detail_shocks`
--

CREATE TABLE IF NOT EXISTS `detail_shocks` (
`id_shocks` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `gambar` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_shocks` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_shocks`
--

INSERT INTO `detail_shocks` (`id_shocks`, `id_motor`, `gambar`, `desc_shocks`) VALUES
(4, 19, 'vesparoad.jpg', 'wkwkwkwk');

-- --------------------------------------------------------

--
-- Table structure for table `detail_wheels`
--

CREATE TABLE IF NOT EXISTS `detail_wheels` (
`id_wheels` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `gambar` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_wheels` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `master_status`
--

CREATE TABLE IF NOT EXISTS `master_status` (
`id_status` int(11) NOT NULL,
  `status` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `master_status`
--

INSERT INTO `master_status` (`id_status`, `status`) VALUES
(1, 'Cart'),
(2, 'Uncheck / Unpaid'),
(3, 'Process'),
(4, 'Checked / Paid / Success'),
(5, 'Booked'),
(6, 'Failed'),
(7, 'New Post'),
(8, 'Avaible'),
(9, 'Sold Out');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
`id_motor` int(11) NOT NULL,
  `id_jenis` int(11) NOT NULL,
  `gambar` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nama_motor` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_product` text COLLATE utf8_unicode_ci NOT NULL,
  `harga` int(25) NOT NULL,
  `pembuat` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(10) NOT NULL DEFAULT '1',
  `posted` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_motor`, `id_jenis`, `gambar`, `nama_motor`, `desc_product`, `harga`, `pembuat`, `status`, `posted`) VALUES
(8, 7, 'vespasip2.jpg', 'Vespa VNB 1961 New', 'New Avaible', 20000000, '67garages', 1, '2018-08-05 13:56:18'),
(9, 10, 'motoguzzi-850t-caferacer-4.jpg', 'MotoGuzii 850L Buildup', 'NEW AVAIBLE. SUPER MOTO', 78000000, 'Faldo Engine', 1, '2018-08-27 02:14:12'),
(10, 12, 'Lambretta_scooter,_Malt.jpg', 'Lambretta LI150S', 'Lambretta pembuatan tahun 1967. dengan build original dan classin paint. Catch up!', 125000000, '67Grg', 1, '2018-08-07 08:31:59'),
(11, 9, 'Royal-Enfield-by-Bulleteer-5.jpg', 'BB BlackBulleter 1200XL', 'Dengan Sentuhan', 75000000, 'Udin Garage', 1, '2018-08-07 08:36:22'),
(12, 11, 'maxrestracker.jpg', 'SNOW WHITE YALE 1200L Edit ke 3', 'Special Price', 120000000, 'BWM Motors4', 1, '2018-08-27 02:17:34'),
(13, 9, 'Motor_bobber.jpg', 'MotoR Bobber', 'Test', 25000000, 'Udin', 1, '2018-08-09 08:28:20'),
(14, 8, 'Triumph.jpg', 'Triump New 900 cc edited', 'edit ', 27800000, 'udin46 Grg', 1, '2018-08-31 03:43:46'),
(19, 7, 'vespasip3.jpg', 'Vespa VBA 1960 Custom SIP', 'Vespa VBA 1960 Custom Made by SIP Scooter Performance', 46000000, 'udin46', 8, '2018-08-31 02:47:52');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE IF NOT EXISTS `tbl_admin` (
`id_admin` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`id_admin`, `username`, `email`, `password`) VALUES
(1, 'asd', 'asd@gmail.com', '688787d8ff144c502c7f5cffaafe2cc588d86079f9de88304c26b0cb99ce91c6'),
(2, 'asd', 'asd@gmail.com', '688787d8ff144c502c7f5cffaafe2cc588d86079f9de88304c26b0cb99ce91c6'),
(3, 'rathon', 'rathonvespa@gmail.com', 'asdf'),
(4, 'udin', 'udinmantap@gmail.com', 'asdf');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_buktipembayaran`
--

CREATE TABLE IF NOT EXISTS `tbl_buktipembayaran` (
`id_buktipembayaran` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `kode_checkout` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `data` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `deskripsi` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tgl_upload` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_buktipembayaran`
--

INSERT INTO `tbl_buktipembayaran` (`id_buktipembayaran`, `id_user`, `kode_checkout`, `data`, `deskripsi`, `tgl_upload`) VALUES
(1, 2, '', 'logomandiri.jpg', 'struk pembayaran pertama', '2018-08-25 08:37:12'),
(2, 2, '', 'logoBNI.jpg', 'struk pembayaran ke dua', '2018-08-25 08:37:16'),
(3, 3, '', 'logo bri.jpg', 'pembayaran transfer motor', '2018-08-27 00:48:48'),
(4, 2, '', 'logo bri.jpg', 'pembayaran strun a/n Ichan', '2018-08-27 06:14:28'),
(5, 2, '', 'JC5.jpg', 'struk pembayaran nih', '2018-08-27 07:28:38'),
(6, 2, '', 'logo bri.jpg', 'bukti transfer okki', '2018-08-27 08:21:32'),
(7, 4, '00017', 'THE BEST.jpg', 'Mantap nih', '2018-08-28 09:04:48'),
(8, 4, '00017', 'JC5.jpg', 'struk pembayaran ke dua', '2018-08-28 10:10:58'),
(9, 4, '00017', 'logo BNI.jpg', 'Coba', '2018-08-28 10:14:05'),
(10, 4, '00017', 'logo bri.jpg', 'Coba lagi', '2018-08-28 10:15:43'),
(11, 4, '00017', 'WhatsApp Image 2018-07-10 at 20.38.33.jpeg', 'Coba ke 3', '2018-08-28 10:18:25'),
(12, 4, '00017', 'WhatsApp Image 2018-07-10 at 20.38.33.jpeg', 'Coba ke 4', '2018-08-28 10:20:30'),
(13, 4, '00017', 'WhatsApp Image 2018-07-10 at 20.38.33.jpeg', 'Coba ke 5', '2018-08-28 10:21:28'),
(14, 4, '00017', 'WhatsApp Image 2018-07-10 at 20.38.33.jpeg', 'Coba ke 5', '2018-08-28 10:24:14'),
(15, 4, '00017', 'WhatsApp Image 2018-07-10 at 20.38.33.jpeg', 'Coba ke 6', '2018-08-28 10:26:46'),
(16, 4, '00017', 'WhatsApp Image 2018-07-10 at 20.38.33.jpeg', 'Coba ke 7', '2018-08-28 10:27:25'),
(17, 2, '00018', 'logo mandiri.jpg', 'struk pembayaran rathon', '2018-08-30 01:04:20');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cart`
--

CREATE TABLE IF NOT EXISTS `tbl_cart` (
`id_cart` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_status` int(11) DEFAULT NULL,
  `nama_item` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `harga_item` int(25) NOT NULL,
  `cart_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_cart`
--

INSERT INTO `tbl_cart` (`id_cart`, `id_user`, `id_product`, `id_status`, `nama_item`, `harga_item`, `cart_time`) VALUES
(162, 4, 10, 3, 'Lambretta LI150S', 125000000, '2018-08-28 10:27:25'),
(163, 4, 11, 3, 'BB BlackBulleter 1200XL', 75000000, '2018-08-28 10:27:25'),
(165, 4, 9, 3, 'MotoGuzii 850L Buildup', 78000000, '2018-08-28 10:27:25'),
(168, 2, 13, 3, 'MotoR Bobber', 25000000, '2018-08-30 01:04:21');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_checkout`
--

CREATE TABLE IF NOT EXISTS `tbl_checkout` (
`id_checkout` int(11) NOT NULL,
  `id_cart` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `kode_checkout` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `nama_motor` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `harga` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `nama` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `alamat` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `kota` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `pos` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(5) NOT NULL DEFAULT '0',
  `order_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_checkout`
--

INSERT INTO `tbl_checkout` (`id_checkout`, `id_cart`, `id_user`, `kode_checkout`, `nama_motor`, `harga`, `email`, `nama`, `alamat`, `kota`, `pos`, `phone`, `status`, `order_time`) VALUES
(121, 163, 4, '00017', 'BB BlackBulleter 1200XL', '75000000', 'rendijs@gmail.com', 'rendi', 'Bekasi Indah', 'Bekasi', '890234', '0876833342222', 4, '2018-08-28 16:14:12'),
(122, 165, 4, '00017', 'MotoGuzii 850L Buildup', '78000000', 'rendijs@gmail.com', 'rendi', 'Bekasi Indah', 'Bekasi', '890234', '0876833342222', 4, '2018-08-28 16:14:12'),
(123, 168, 2, '00018', 'MotoR Bobber', '25000000', 'rathovespa@gmail.com', 'Rathon Wiro Samudro', 'Jalan raya Kopo Margahayu No 80 Bandung', 'Bandung', '768933', '082132545464', 6, '2018-08-30 02:00:23');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_invoice`
--

CREATE TABLE IF NOT EXISTS `tbl_invoice` (
`id_invoice` int(11) NOT NULL,
  `id_checkout` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `kode_invoice` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `nama_product` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `harga` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `nama` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `alamat` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `kota` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `pos` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(10) NOT NULL,
  `tgl_buat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_invoice`
--

INSERT INTO `tbl_invoice` (`id_invoice`, `id_checkout`, `id_user`, `kode_invoice`, `nama_product`, `harga`, `nama`, `email`, `alamat`, `kota`, `pos`, `phone`, `status`, `tgl_buat`) VALUES
(109, 120, 4, 'INV00001', 'Lambretta LI150S', '125000000', 'rendi', 'rendijs@gmail.com', 'Bekasi Indah', 'Bekasi', '890234', '0876833342222', 9, '2018-08-31 03:49:09'),
(110, 121, 4, 'INV00001', 'BB BlackBulleter 1200XL', '75000000', 'rendi', 'rendijs@gmail.com', 'Bekasi Indah', 'Bekasi', '890234', '0876833342222', 9, '2018-08-31 03:49:05'),
(111, 122, 4, 'INV00001', 'MotoGuzii 850L Buildup', '78000000', 'rendi', 'rendijs@gmail.com', 'Bekasi Indah', 'Bekasi', '890234', '0876833342222', 9, '2018-08-31 03:49:02'),
(123, 123, 2, 'INV00002', 'MotoR Bobber', '25000000', 'Rathon Wiro Samudro', 'rathovespa@gmail.com', 'Jalan raya Kopo Margahayu No 80 Bandung', 'Bandung', '768933', '082132545464', 9, '2018-08-31 03:48:54');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_jenis`
--

CREATE TABLE IF NOT EXISTS `tbl_jenis` (
`id_jenis` int(11) NOT NULL,
  `kategori_id` int(11) NOT NULL,
  `nama_jenis` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_jenis`
--

INSERT INTO `tbl_jenis` (`id_jenis`, `kategori_id`, `nama_jenis`) VALUES
(1, 1, 'Small Frame'),
(7, 1, 'Large Frame'),
(8, 2, 'Chopper'),
(9, 2, 'Bobber'),
(10, 2, 'Caferacer'),
(11, 2, 'Tracker'),
(12, 1, 'Lambretta');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_kategori`
--

CREATE TABLE IF NOT EXISTS `tbl_kategori` (
`id_kategori` int(10) NOT NULL,
  `nama_kategori` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_kategori`
--

INSERT INTO `tbl_kategori` (`id_kategori`, `nama_kategori`) VALUES
(1, 'Scooter'),
(2, 'Motorcycle');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pembuat`
--

CREATE TABLE IF NOT EXISTS `tbl_pembuat` (
`id_pembuat` int(11) NOT NULL,
  `nama_pembuat` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_pembuat`
--

INSERT INTO `tbl_pembuat` (`id_pembuat`, `nama_pembuat`) VALUES
(1, 'RWS Garage'),
(2, 'Udine46 Racing');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_productcarou`
--

CREATE TABLE IF NOT EXISTS `tbl_productcarou` (
`id_productcarou` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `judul_productcarou` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `desc_productcarou` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gambar1` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `gambar2` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `gambar3` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_productcarou`
--

INSERT INTO `tbl_productcarou` (`id_productcarou`, `id_motor`, `judul_productcarou`, `desc_productcarou`, `gambar1`, `gambar2`, `gambar3`) VALUES
(2, 19, 'coba test', 'test', 'vespasip5.jpg', 'vespasip3.jpg', 'vespastyle.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_test`
--

CREATE TABLE IF NOT EXISTS `tbl_test` (
`id` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_test`
--

INSERT INTO `tbl_test` (`id`, `username`, `password`, `email`) VALUES
(7, 'Udin', 'b1624a48de24aa81052d82df5d65ad7706561f24d7b015540d1c933c495c945d', 'udin@gmail.com'),
(8, 'Samid', 'd3a24f864764f297bc634c997be4c546a0821cd5bb8d42dd8b5b1895c3a175e8', 'samid@mail.com'),
(9, 'asril', '1ca49cc78256d060fd0efeec564d2587a3ed77663e4cba3720a410f7c0f81978', 'masasril@gmail.com'),
(10, 'asd', '688787d8ff144c502c7f5cffaafe2cc588d86079f9de88304c26b0cb99ce91c6', 'asd@asd.com');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE IF NOT EXISTS `tbl_user` (
`id_user` int(10) NOT NULL,
  `nama_depan` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `nama_belakang` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `alamat_lengkap` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `alamat_negara` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `kodepos` int(6) NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `no_telp` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `ttl` date DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id_user`, `nama_depan`, `nama_belakang`, `email`, `alamat_lengkap`, `alamat_negara`, `kodepos`, `password`, `no_telp`, `ttl`) VALUES
(1, 'Udin', 'Mantap', 'udin@gmail.com', 'Jakarta Selatan', 'Indonesia', 732130, 'asdf', '081232545464', '1994-04-11'),
(2, 'rathon', 'vespa', 'rathonvespa@gmail.com', 'Jakarta Selatan', 'Indonesia', 82222, 'asdf', '082132545464', '1994-02-11'),
(3, 'Okki', 'Jelly', 'okky@gmail.com', 'Jakarta Timur', 'Indonesia', 222232, 'asdf', '082311223321', '1994-04-12'),
(4, 'rathon67', 'wiro', 'rathonv@gmail.com', 'Jakarta', 'Indonesia', 88893, 'asdf', '081321545464', '1994-02-12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `detail_brakes`
--
ALTER TABLE `detail_brakes`
 ADD PRIMARY KEY (`id_brakes`);

--
-- Indexes for table `detail_dimensi`
--
ALTER TABLE `detail_dimensi`
 ADD PRIMARY KEY (`id_dimensi`);

--
-- Indexes for table `detail_gearbox`
--
ALTER TABLE `detail_gearbox`
 ADD PRIMARY KEY (`id_gearbox`);

--
-- Indexes for table `detail_kelistrikan`
--
ALTER TABLE `detail_kelistrikan`
 ADD PRIMARY KEY (`id_kelistrikan`);

--
-- Indexes for table `detail_light`
--
ALTER TABLE `detail_light`
 ADD PRIMARY KEY (`id_light`);

--
-- Indexes for table `detail_mesin`
--
ALTER TABLE `detail_mesin`
 ADD PRIMARY KEY (`id_mesin`);

--
-- Indexes for table `detail_rangka`
--
ALTER TABLE `detail_rangka`
 ADD PRIMARY KEY (`id_detailrangka`);

--
-- Indexes for table `detail_sadle`
--
ALTER TABLE `detail_sadle`
 ADD PRIMARY KEY (`id_sadle`);

--
-- Indexes for table `detail_shocks`
--
ALTER TABLE `detail_shocks`
 ADD PRIMARY KEY (`id_shocks`);

--
-- Indexes for table `detail_wheels`
--
ALTER TABLE `detail_wheels`
 ADD PRIMARY KEY (`id_wheels`);

--
-- Indexes for table `master_status`
--
ALTER TABLE `master_status`
 ADD PRIMARY KEY (`id_status`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
 ADD PRIMARY KEY (`id_motor`);

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
 ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `tbl_buktipembayaran`
--
ALTER TABLE `tbl_buktipembayaran`
 ADD PRIMARY KEY (`id_buktipembayaran`);

--
-- Indexes for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
 ADD PRIMARY KEY (`id_cart`);

--
-- Indexes for table `tbl_checkout`
--
ALTER TABLE `tbl_checkout`
 ADD PRIMARY KEY (`id_checkout`);

--
-- Indexes for table `tbl_invoice`
--
ALTER TABLE `tbl_invoice`
 ADD PRIMARY KEY (`id_invoice`);

--
-- Indexes for table `tbl_jenis`
--
ALTER TABLE `tbl_jenis`
 ADD PRIMARY KEY (`id_jenis`);

--
-- Indexes for table `tbl_kategori`
--
ALTER TABLE `tbl_kategori`
 ADD PRIMARY KEY (`id_kategori`);

--
-- Indexes for table `tbl_pembuat`
--
ALTER TABLE `tbl_pembuat`
 ADD PRIMARY KEY (`id_pembuat`);

--
-- Indexes for table `tbl_productcarou`
--
ALTER TABLE `tbl_productcarou`
 ADD PRIMARY KEY (`id_productcarou`);

--
-- Indexes for table `tbl_test`
--
ALTER TABLE `tbl_test`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
 ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `detail_brakes`
--
ALTER TABLE `detail_brakes`
MODIFY `id_brakes` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `detail_dimensi`
--
ALTER TABLE `detail_dimensi`
MODIFY `id_dimensi` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `detail_gearbox`
--
ALTER TABLE `detail_gearbox`
MODIFY `id_gearbox` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `detail_kelistrikan`
--
ALTER TABLE `detail_kelistrikan`
MODIFY `id_kelistrikan` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `detail_light`
--
ALTER TABLE `detail_light`
MODIFY `id_light` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `detail_mesin`
--
ALTER TABLE `detail_mesin`
MODIFY `id_mesin` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `detail_rangka`
--
ALTER TABLE `detail_rangka`
MODIFY `id_detailrangka` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `detail_sadle`
--
ALTER TABLE `detail_sadle`
MODIFY `id_sadle` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `detail_shocks`
--
ALTER TABLE `detail_shocks`
MODIFY `id_shocks` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `detail_wheels`
--
ALTER TABLE `detail_wheels`
MODIFY `id_wheels` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `master_status`
--
ALTER TABLE `master_status`
MODIFY `id_status` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
MODIFY `id_motor` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_buktipembayaran`
--
ALTER TABLE `tbl_buktipembayaran`
MODIFY `id_buktipembayaran` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
MODIFY `id_cart` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=169;
--
-- AUTO_INCREMENT for table `tbl_checkout`
--
ALTER TABLE `tbl_checkout`
MODIFY `id_checkout` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=124;
--
-- AUTO_INCREMENT for table `tbl_invoice`
--
ALTER TABLE `tbl_invoice`
MODIFY `id_invoice` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=124;
--
-- AUTO_INCREMENT for table `tbl_jenis`
--
ALTER TABLE `tbl_jenis`
MODIFY `id_jenis` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `tbl_kategori`
--
ALTER TABLE `tbl_kategori`
MODIFY `id_kategori` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_pembuat`
--
ALTER TABLE `tbl_pembuat`
MODIFY `id_pembuat` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_productcarou`
--
ALTER TABLE `tbl_productcarou`
MODIFY `id_productcarou` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_test`
--
ALTER TABLE `tbl_test`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
MODIFY `id_user` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
