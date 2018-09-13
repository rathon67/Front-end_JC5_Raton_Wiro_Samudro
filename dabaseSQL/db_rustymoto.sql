-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 12, 2018 at 04:54 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_rustymoto`
--

-- --------------------------------------------------------

--
-- Table structure for table `detail_brakes`
--

CREATE TABLE `detail_brakes` (
  `id_brakes` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `gambar_brakes` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_brakes` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_brakes`
--

INSERT INTO `detail_brakes` (`id_brakes`, `id_motor`, `gambar_brakes`, `desc_brakes`) VALUES
(1, 19, 'vespasip2.jpg', 'Dijamin Masuk datanya!'),
(2, 20, 'lambretta scooter.jpg', 'Lambretta LI150S'),
(3, 21, 'Snow-Male.jpg', 'Snow White Tracker, Ride With An Honor for a Woman'),
(4, 22, 'building-a-cafe-racer-triumph.jpg', 'Caferacer Triumps');

-- --------------------------------------------------------

--
-- Table structure for table `detail_dimensi`
--

CREATE TABLE `detail_dimensi` (
  `id_dimensi` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `pjg_lbr_ttg` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `jarak_sumbu_roda` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `jarak_terendah_ketanah` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `tinggi_tempat_duduk` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `berat_isi` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `kapasitas_tangki` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_dimensi`
--

INSERT INTO `detail_dimensi` (`id_dimensi`, `id_motor`, `pjg_lbr_ttg`, `jarak_sumbu_roda`, `jarak_terendah_ketanah`, `tinggi_tempat_duduk`, `berat_isi`, `kapasitas_tangki`) VALUES
(2, 19, '20Cm, 32Cm, 67Cm', '12Cm', '5Cm', '56Cm', '120Kg', '7.7Liter'),
(3, 20, 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S'),
(4, 21, 'Snow White Tracker, Ride ', 'Snow White Tracker, Ride ', 'Snow White Tracker, Ride ', 'Snow White Tracker, Ride ', 'Snow White Tracker, Ride ', 'Snow White Tracker, Ride '),
(5, 22, 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps');

-- --------------------------------------------------------

--
-- Table structure for table `detail_gearbox`
--

CREATE TABLE `detail_gearbox` (
  `id_gearbox` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `gambar_gearbox` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_gearbox` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_gearbox`
--

INSERT INTO `detail_gearbox` (`id_gearbox`, `id_motor`, `gambar_gearbox`, `desc_gearbox`) VALUES
(1, 19, 'sipclass.jpg', 'masuk!'),
(2, 20, 'lambretta scooter.jpg', 'Lambretta LI150S'),
(3, 21, '152823928-4e18dc5f-5d5e-42d3-b10d-9f79770c52a8.jpg', 'Snow White Tracker, Ride With An Honor for a Woman'),
(4, 22, 'building-a-cafe-racer-triumph.jpg', 'Caferacer Triumps');

-- --------------------------------------------------------

--
-- Table structure for table `detail_kelistrikan`
--

CREATE TABLE `detail_kelistrikan` (
  `id_kelistrikan` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `sistem_pengapian` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `battery` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `type_busy` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_kelistrikan`
--

INSERT INTO `detail_kelistrikan` (`id_kelistrikan`, `id_motor`, `sistem_pengapian`, `battery`, `type_busy`) VALUES
(3, 19, 'CDI ignition HV 3000', 'Aki Cuan 6500', 'NGK 3000L'),
(4, 20, 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S'),
(5, 21, 'Snow White Tracker, Ride ', 'Snow White Tracker, Ride ', 'Snow White Tracker, Ride '),
(6, 22, 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps');

-- --------------------------------------------------------

--
-- Table structure for table `detail_light`
--

CREATE TABLE `detail_light` (
  `id_light` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `gambar_light` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_light` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_light`
--

INSERT INTO `detail_light` (`id_light`, `id_motor`, `gambar_light`, `desc_light`) VALUES
(1, 0, 'BSA4.jpg', 'Lampu HD White '),
(2, 0, 'motobene cafe racer rocketgarage-001.JPG', 'lampu detail test'),
(3, 0, 'motorbike113103.jpg', 'lampu detail test lagi'),
(5, 19, 'vespa62.jpg', 'masuk !'),
(6, 20, 'Lambretta_scooter,_Malt.jpg', 'Lambretta LI150S'),
(7, 21, 'Snow-Male.jpg', 'Snow White Tracker, Ride With An Honor for a Woman'),
(8, 22, 'building-a-cafe-racer-triumph.jpg', 'Caferacer Triumps');

-- --------------------------------------------------------

--
-- Table structure for table `detail_mesin`
--

CREATE TABLE `detail_mesin` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_mesin`
--

INSERT INTO `detail_mesin` (`id_mesin`, `id_motor`, `type_mesin`, `diameter_mesin`, `volume_cilinder`, `system_starter`, `system_pelumasan`, `kapasitas_oli`, `bahan_bakar`, `type_kopling`, `type_transmisi`) VALUES
(1, 19, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test'),
(2, 19, '1', '1', '1', '1', '1', '1', '1', '1', '1'),
(3, 20, 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S'),
(4, 21, 'Snow White Tracker, Ride With An Honor for a Woman', 'Snow White Tracker, Ride With An Honor for a Woman', 'Snow White Tracker, Ride With An Honor for a Woman', 'Snow White Tracker, Ride With An Honor for a Woman', 'Snow White Tracker, Ride With An Honor for a Woman', 'Snow White Tracker, Ride With An Honor for a Woman', 'Snow White Tracker, Ride With An Honor for a Woman', 'Snow White Tracker, Ride With An Honor for a Woman', 'Snow White Tracker, Ride With An Honor for a Woman'),
(5, 22, 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps');

-- --------------------------------------------------------

--
-- Table structure for table `detail_rangka`
--

CREATE TABLE `detail_rangka` (
  `id_detailrangka` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `type_rangka` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `suspensi_depan` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `suspensi_belakang` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `rem_depan` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `rem_belakang` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_rangka`
--

INSERT INTO `detail_rangka` (`id_detailrangka`, `id_motor`, `type_rangka`, `suspensi_depan`, `suspensi_belakang`, `rem_depan`, `rem_belakang`) VALUES
(1, 19, 'test', 'test', 'test', 'test', 'test'),
(2, 20, 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S', 'Lambretta LI150S'),
(3, 21, 'Snow White Tracker, Ride ', 'Snow White Tracker, Ride ', 'Snow White Tracker, Ride ', 'Snow White Tracker, Ride With An Honor for a Woman', 'Snow White Tracker, Ride With An Honor for a Woman'),
(4, 22, 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps', 'Caferacer Triumps');

-- --------------------------------------------------------

--
-- Table structure for table `detail_sadle`
--

CREATE TABLE `detail_sadle` (
  `id_sadle` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `gambar_sadle` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_sadle` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_sadle`
--

INSERT INTO `detail_sadle` (`id_sadle`, `id_motor`, `gambar_sadle`, `desc_sadle`) VALUES
(4, 19, 'vespa62.jpg', 'masuk!'),
(5, 20, 'lambretta-scooter-125dl-1969-going-underground-250', 'Lambretta LI150S'),
(6, 21, '152823928-4e18dc5f-5d5e-42d3-b10d-9f79770c52a8.jpg', 'Snow White Tracker, Ride With An Honor for a Woman'),
(7, 22, 'building-a-cafe-racer-triumph.jpg', 'Caferacer Triumps');

-- --------------------------------------------------------

--
-- Table structure for table `detail_shocks`
--

CREATE TABLE `detail_shocks` (
  `id_shocks` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `gambar_shocks` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_shocks` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_shocks`
--

INSERT INTO `detail_shocks` (`id_shocks`, `id_motor`, `gambar_shocks`, `desc_shocks`) VALUES
(4, 19, 'vesparoad.jpg', 'wkwkwkwk'),
(5, 20, 'lambretta scooter.jpg', 'Lambretta LI150S'),
(6, 21, '152823928-4e18dc5f-5d5e-42d3-b10d-9f79770c52a8.jpg', 'Snow White Tracker, Ride With An Honor for a Woman'),
(7, 22, 'BSA3.jpg', 'Caferacer Triumps');

-- --------------------------------------------------------

--
-- Table structure for table `detail_wheels`
--

CREATE TABLE `detail_wheels` (
  `id_wheels` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `gambar_wheels` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_wheels` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_wheels`
--

INSERT INTO `detail_wheels` (`id_wheels`, `id_motor`, `gambar_wheels`, `desc_wheels`) VALUES
(1, 20, 'lambretta-scooter-125dl-1969-going-underground-250', 'Lambretta LI150S'),
(2, 21, '152823928-4e18dc5f-5d5e-42d3-b10d-9f79770c52a8.jpg', 'Snow White Tracker, Ride With An Honor for a Woman'),
(3, 22, 'building-a-cafe-racer-triumph.jpg', 'Caferacer Triumps');

-- --------------------------------------------------------

--
-- Table structure for table `master_status`
--

CREATE TABLE `master_status` (
  `id_status` int(11) NOT NULL,
  `status` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

CREATE TABLE `product` (
  `id_motor` int(11) NOT NULL,
  `id_jenis` int(11) NOT NULL,
  `gambar` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nama_motor` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `desc_product` text COLLATE utf8_unicode_ci NOT NULL,
  `harga` int(25) NOT NULL,
  `tahun_pembuatan` int(11) NOT NULL,
  `pembuat` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(10) NOT NULL DEFAULT '1',
  `posted` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_motor`, `id_jenis`, `gambar`, `nama_motor`, `desc_product`, `harga`, `tahun_pembuatan`, `pembuat`, `status`, `posted`) VALUES
(20, 7, 'lambretta scooter.jpg', 'Lambretta LI150S', 'Lambretta LI150S New Rebuild', 57000000, 1967, 'Udin Garage', 8, '2018-09-03 05:15:05'),
(21, 11, '152823928-4e18dc5f-5d5e-42d3-b10d-9f79770c52a8.jpg', 'Snow White Tracker', 'Snow White Tracker, Ride With An Honor for a Woman', 340000000, 2015, 'Royal Enfield', 8, '2018-09-03 04:00:01'),
(22, 10, 'building-a-cafe-racer-triumph.jpg', 'Caferacer Triumps', 'Caferacer Triumps new', 220000000, 2018, 'MasAdhi motor', 9, '2018-09-03 05:33:22');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id_admin` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

CREATE TABLE `tbl_buktipembayaran` (
  `id_buktipembayaran` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `kode_checkout` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `data` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `deskripsi` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tgl_upload` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_buktipembayaran`
--

INSERT INTO `tbl_buktipembayaran` (`id_buktipembayaran`, `id_user`, `kode_checkout`, `data`, `deskripsi`, `tgl_upload`) VALUES
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
(17, 2, '00018', 'logo mandiri.jpg', 'struk pembayaran rathon', '2018-08-30 01:04:20'),
(18, 5, '00019', 'Silentnight_Beds_old_logo.png', 'Pembayaran Motor Lambretta', '2018-09-03 04:26:01'),
(19, 8, '00020', 'Silentnight_Beds_old_logo.png', 'struke pembayaran motor', '2018-09-03 05:31:57');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cart`
--

CREATE TABLE `tbl_cart` (
  `id_cart` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_status` int(11) DEFAULT NULL,
  `nama_item` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `harga_item` int(25) NOT NULL,
  `cart_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_cart`
--

INSERT INTO `tbl_cart` (`id_cart`, `id_user`, `id_product`, `id_status`, `nama_item`, `harga_item`, `cart_time`) VALUES
(162, 4, 10, 3, 'Lambretta LI150S', 125000000, '2018-08-28 10:27:25'),
(163, 4, 11, 3, 'BB BlackBulleter 1200XL', 75000000, '2018-08-28 10:27:25'),
(165, 4, 9, 3, 'MotoGuzii 850L Buildup', 78000000, '2018-08-28 10:27:25'),
(168, 2, 13, 3, 'MotoR Bobber', 25000000, '2018-08-30 01:04:21'),
(171, 6, 21, 1, 'Snow White Tracker', 340000000, '2018-09-03 04:20:37'),
(173, 5, 20, 3, 'Lambretta LI150S', 57000000, '2018-09-03 04:26:01'),
(175, 8, 22, 3, 'Caferacer Triumps', 220000000, '2018-09-03 05:31:57'),
(176, 8, 22, 1, 'Caferacer Triumps', 220000000, '2018-09-03 05:36:16'),
(177, 6, 22, 1, 'Caferacer Triumps', 220000000, '2018-09-05 12:05:52');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_checkout`
--

CREATE TABLE `tbl_checkout` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_checkout`
--

INSERT INTO `tbl_checkout` (`id_checkout`, `id_cart`, `id_user`, `kode_checkout`, `nama_motor`, `harga`, `email`, `nama`, `alamat`, `kota`, `pos`, `phone`, `status`, `order_time`) VALUES
(121, 163, 4, '00017', 'BB BlackBulleter 1200XL', '75000000', 'rendijs@gmail.com', 'rendi', 'Bekasi Indah', 'Bekasi', '890234', '0876833342222', 4, '2018-08-28 16:14:12'),
(122, 165, 4, '00017', 'MotoGuzii 850L Buildup', '78000000', 'rendijs@gmail.com', 'rendi', 'Bekasi Indah', 'Bekasi', '890234', '0876833342222', 4, '2018-08-28 16:14:12'),
(123, 168, 2, '00018', 'MotoR Bobber', '25000000', 'rathovespa@gmail.com', 'Rathon Wiro Samudro', 'Jalan raya Kopo Margahayu No 80 Bandung', 'Bandung', '768933', '082132545464', 6, '2018-08-30 02:00:23'),
(124, 173, 5, '00019', 'Lambretta LI150S', '57000000', 'okky@gmail.com', 'okky satria', 'Kampung rawa Jakarta Pusat', 'DKI Jakarta', '092238', '081322441234', 4, '2018-09-03 04:26:18'),
(125, 175, 8, '00020', 'Caferacer Triumps', '220000000', 'iksan@gmail.com', 'iksan ', 'Kalibata Jakarta', 'DKI Jakarta', '087798', '021383546676', 4, '2018-09-03 05:33:22');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_invoice`
--

CREATE TABLE `tbl_invoice` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_invoice`
--

INSERT INTO `tbl_invoice` (`id_invoice`, `id_checkout`, `id_user`, `kode_invoice`, `nama_product`, `harga`, `nama`, `email`, `alamat`, `kota`, `pos`, `phone`, `status`, `tgl_buat`) VALUES
(109, 120, 4, '00001', 'Lambretta LI150S', '125000000', 'rendi', 'rendijs@gmail.com', 'Bekasi Indah', 'Bekasi', '890234', '0876833342222', 9, '2018-09-03 04:48:32'),
(110, 121, 4, '00001', 'BB BlackBulleter 1200XL', '75000000', 'rendi', 'rendijs@gmail.com', 'Bekasi Indah', 'Bekasi', '890234', '0876833342222', 9, '2018-09-03 04:48:37'),
(111, 122, 4, '00001', 'MotoGuzii 850L Buildup', '78000000', 'rendi', 'rendijs@gmail.com', 'Bekasi Indah', 'Bekasi', '890234', '0876833342222', 9, '2018-09-03 04:48:51'),
(123, 123, 2, '00002', 'MotoR Bobber', '25000000', 'Rathon Wiro Samudro', 'rathovespa@gmail.com', 'Jalan raya Kopo Margahayu No 80 Bandung', 'Bandung', '768933', '082132545464', 9, '2018-09-03 04:48:58'),
(126, 124, 5, '00003', 'Lambretta LI150S', '57000000', 'okky satria', 'okky@gmail.com', 'Kampung rawa Jakarta Pusat', 'DKI Jakarta', '092238', '081322441234', 9, '2018-09-03 04:49:27'),
(133, 124, 5, '00004', 'Lambretta LI150S', '57000000', 'okky satria', 'okky@gmail.com', 'Kampung rawa Jakarta Pusat', 'DKI Jakarta', '092238', '081322441234', 9, '2018-09-03 05:19:57'),
(134, 124, 5, '00005', 'Lambretta LI150S', '57000000', 'okky satria', 'okky@gmail.com', 'Kampung rawa Jakarta Pusat', 'DKI Jakarta', '092238', '081322441234', 9, '2018-09-03 05:20:40'),
(135, 125, 8, '00006', 'Caferacer Triumps', '220000000', 'iksan ', 'iksan@gmail.com', 'Kalibata Jakarta', 'DKI Jakarta', '087798', '021383546676', 9, '2018-09-03 05:33:22');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_jenis`
--

CREATE TABLE `tbl_jenis` (
  `id_jenis` int(11) NOT NULL,
  `kategori_id` int(11) NOT NULL,
  `nama_jenis` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

CREATE TABLE `tbl_kategori` (
  `id_kategori` int(10) NOT NULL,
  `nama_kategori` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

CREATE TABLE `tbl_pembuat` (
  `id_pembuat` int(11) NOT NULL,
  `nama_pembuat` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

CREATE TABLE `tbl_productcarou` (
  `id_productcarou` int(10) NOT NULL,
  `id_motor` int(11) NOT NULL,
  `judul_productcarou` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `desc_productcarou` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gambar1` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `gambar2` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `gambar3` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_productcarou`
--

INSERT INTO `tbl_productcarou` (`id_productcarou`, `id_motor`, `judul_productcarou`, `desc_productcarou`, `gambar1`, `gambar2`, `gambar3`) VALUES
(2, 19, 'coba test', 'test', 'vespasip5.jpg', 'vespasip3.jpg', 'vespastyle.jpg'),
(3, 20, 'Lambretta LI150S', 'Lambretta LI150S', 'lambretta scooter.jpg', 'lambretta scooter.jpg', 'lambretta scooter.jpg'),
(4, 21, 'Snow White Tracker, Ride ', 'Snow White Tracker, Ride With An Honor for a Woman', '152823928-4e18dc5f-5d5e-42d3-b10d-9f79770c52a8.jpg', '152823928-4e18dc5f-5d5e-42d3-b10d-9f79770c52a8.jpg', '152823928-4e18dc5f-5d5e-42d3-b10d-9f79770c52a8.jpg'),
(5, 22, 'Caferacer Triumps', 'Caferacer Triumps new', 'building-a-cafe-racer-triumph.jpg', 'building-a-cafe-racer-triumph.jpg', 'building-a-cafe-racer-triumph.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_test`
--

CREATE TABLE `tbl_test` (
  `id` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

CREATE TABLE `tbl_user` (
  `id_user` int(10) NOT NULL,
  `nama_depan` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `nama_belakang` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `alamat_lengkap` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alamat_negara` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `kodepos` int(6) DEFAULT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `no_telp` varchar(12) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ttl` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id_user`, `nama_depan`, `nama_belakang`, `email`, `alamat_lengkap`, `alamat_negara`, `kodepos`, `password`, `no_telp`, `ttl`) VALUES
(1, 'Udin', 'Mantap', 'udin@gmail.com', 'Jakarta Selatan', 'Indonesia', 732130, 'asdf', '081232545464', '1994-04-11'),
(2, 'rathon', 'vespa', 'rathonvespa@gmail.com', 'Jakarta Selatan', 'Indonesia', 82222, 'asdf', '082132545464', '1994-02-11'),
(3, 'Okki', 'Jelly', 'okky@gmail.com', 'Jakarta Timur', 'Indonesia', 222232, 'asdf', '082311223321', '1994-04-12'),
(4, 'rathon67', 'wiro', 'rathonv@gmail.com', 'Jakarta', 'Indonesia', 88893, 'asdf', '081321545464', '1994-02-12'),
(5, 'okky satria', '', 'okkyjelly@gmail.com', '', '', 0, 'f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b', '', '0000-00-00'),
(6, 'samin', '', 'samid@gmail.com', '', '', 0, 'f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b', '', '0000-00-00'),
(7, 'rathon wiro samudro', '', 'vespasprint@gmail.com', '', '', 0, 'f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b', '', '0000-00-00'),
(8, 'iksan', '', 'iksan@gmail.com', '', '', 0, 'f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b', '', '0000-00-00');

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
  MODIFY `id_brakes` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `detail_dimensi`
--
ALTER TABLE `detail_dimensi`
  MODIFY `id_dimensi` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `detail_gearbox`
--
ALTER TABLE `detail_gearbox`
  MODIFY `id_gearbox` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `detail_kelistrikan`
--
ALTER TABLE `detail_kelistrikan`
  MODIFY `id_kelistrikan` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `detail_light`
--
ALTER TABLE `detail_light`
  MODIFY `id_light` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `detail_mesin`
--
ALTER TABLE `detail_mesin`
  MODIFY `id_mesin` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `detail_rangka`
--
ALTER TABLE `detail_rangka`
  MODIFY `id_detailrangka` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `detail_sadle`
--
ALTER TABLE `detail_sadle`
  MODIFY `id_sadle` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `detail_shocks`
--
ALTER TABLE `detail_shocks`
  MODIFY `id_shocks` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `detail_wheels`
--
ALTER TABLE `detail_wheels`
  MODIFY `id_wheels` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `master_status`
--
ALTER TABLE `master_status`
  MODIFY `id_status` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id_motor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_buktipembayaran`
--
ALTER TABLE `tbl_buktipembayaran`
  MODIFY `id_buktipembayaran` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  MODIFY `id_cart` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;

--
-- AUTO_INCREMENT for table `tbl_checkout`
--
ALTER TABLE `tbl_checkout`
  MODIFY `id_checkout` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- AUTO_INCREMENT for table `tbl_invoice`
--
ALTER TABLE `tbl_invoice`
  MODIFY `id_invoice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT for table `tbl_jenis`
--
ALTER TABLE `tbl_jenis`
  MODIFY `id_jenis` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tbl_kategori`
--
ALTER TABLE `tbl_kategori`
  MODIFY `id_kategori` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_pembuat`
--
ALTER TABLE `tbl_pembuat`
  MODIFY `id_pembuat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_productcarou`
--
ALTER TABLE `tbl_productcarou`
  MODIFY `id_productcarou` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_test`
--
ALTER TABLE `tbl_test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id_user` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
