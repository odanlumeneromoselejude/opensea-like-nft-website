-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 16, 2023 at 10:31 AM
-- Server version: 8.0.33
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nfts`
--

-- --------------------------------------------------------

--
-- Table structure for table `bids`
--

CREATE TABLE `bids` (
  `id` int UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nft_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `accepted` tinyint(1) NOT NULL,
  `status` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bids`
--

INSERT INTO `bids` (`id`, `user_id`, `nft_id`, `amount`, `accepted`, `status`, `created_at`, `updated_at`) VALUES
(1, '1', '156', '3', 0, 'Rejected', NULL, '2023-10-16 01:17:18'),
(2, '1', '156', '23', 1, 'Rejected', NULL, '2023-10-16 01:17:18'),
(3, '1', '156', '10', 0, 'Rejected', '2023-10-16 01:11:54', '2023-10-16 01:17:18'),
(4, '1', '156', '19', 1, 'Accepted', '2023-10-16 01:14:04', '2023-10-16 01:17:18'),
(5, '1', '156', '17', 0, 'Rejected', '2023-10-16 01:15:50', '2023-10-16 01:17:18'),
(6, '1', '156', '22', 0, 'Rejected', '2023-10-16 01:16:44', '2023-10-16 01:17:18');

-- --------------------------------------------------------

--
-- Table structure for table `collections`
--

CREATE TABLE `collections` (
  `id` int UNSIGNED NOT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bids` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `volume` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `auction_end_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `floor` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creator` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `collections`
--

INSERT INTO `collections` (`id`, `user_id`, `image`, `name`, `bids`, `volume`, `verified`, `auction_end_date`, `created_at`, `updated_at`, `floor`, `creator`) VALUES
(1, '1', 'storage/uploads/collections/1.png', 'Art', '24', '1000', 1, '2d', NULL, NULL, '0.0005', 'liquid_metal'),
(3, '2', 'storage/uploads/collections/2.jpg', 'Photography', '122', '100000', 1, '0d', NULL, NULL, '10', 'liquid_metal'),
(4, '1', 'storage/uploads/collections/3.jpg', 'Gaming', '954', '9000000', 1, '0d', NULL, NULL, '200', 'liquid_metal'),
(5, '1', 'storage/uploads/collections/4.jpg', 'Sporting', '1', '1000', 1, '0d', NULL, NULL, '0.4', 'liquid_metal'),
(6, '1', 'storage/uploads/collections/5.jpg', 'Horror', '296', '70000', 1, '0d', NULL, NULL, '7', 'liquid_metal'),
(7, '1', 'storage/uploads/collections/6.jpeg', 'Painting', '34', '200000', 1, '0d', NULL, NULL, '71', 'liquid_metal'),
(8, '1', 'storage/uploads/collections/7.jpeg', 'Pets', '12', '200', 1, '0d', NULL, NULL, '1', 'liquid_metal'),
(9, '1', 'storage/uploads/collections/8.jpeg', 'Ape', '672', '90000', 1, '0d', NULL, NULL, '1.76', 'liquid_metal'),
(10, '1', 'storage/uploads/collections/9.jpeg', 'Abstract', '110', '60000', 1, '0d', NULL, NULL, '0.55', 'liquid_metal'),
(11, '1', 'storage/uploads/collections/10.png', 'Contemporary', '67', '3000', 1, '0d', NULL, NULL, '0.01', 'liquid_metal');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2023_06_22_180410_create_collections_table', 2),
(5, '2023_08_13_110548_add_floor_to_collections', 3),
(6, '2023_08_13_170224_add_creator_to_collections', 4),
(7, '2023_08_14_065809_create_nfts_table', 5),
(8, '2023_08_15_160213_add_collection_to_nfts', 6),
(9, '2023_10_15_202529_create_bids_table', 7);

-- --------------------------------------------------------

--
-- Table structure for table `nfts`
--

CREATE TABLE `nfts` (
  `id` int UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `floor` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bids` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `available` tinyint(1) NOT NULL,
  `volume` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `collection` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nfts`
--

INSERT INTO `nfts` (`id`, `user_id`, `image`, `floor`, `bids`, `available`, `volume`, `created_at`, `updated_at`, `collection`) VALUES
(1, '1', 'storage/uploads/nfts/1.jpeg', '8', '45', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(2, '1', 'storage/uploads/nfts/2.jpeg', '2', '46', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(3, '1', 'storage/uploads/nfts/3.jpeg', '7', '37', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(4, '1', 'storage/uploads/nfts/4.jpeg', '5', '60', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Gaming'),
(5, '1', 'storage/uploads/nfts/5.jpeg', '2', '22', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Gaming'),
(6, '1', 'storage/uploads/nfts/6.jpeg', '1', '50', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(7, '1', 'storage/uploads/nfts/7.jpeg', '3', '27', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(8, '1', 'storage/uploads/nfts/8.jpeg', '1', '12', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(9, '1', 'storage/uploads/nfts/9.jpeg', '7', '34', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(10, '1', 'storage/uploads/nfts/10.jpeg', '5', '95', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(11, '1', 'storage/uploads/nfts/11.jpeg', '5', '21', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Gaming'),
(12, '1', 'storage/uploads/nfts/12.jpeg', '3', '79', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(13, '1', 'storage/uploads/nfts/13.jpeg', '7', '22', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(14, '1', 'storage/uploads/nfts/14.jpeg', '2', '14', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(15, '1', 'storage/uploads/nfts/15.jpeg', '2', '100', 1, '100', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Abstract'),
(16, '1', 'storage/uploads/nfts/16.jpeg', '4', '3', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(17, '1', 'storage/uploads/nfts/17.jpeg', '7', '83', 1, '100', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Abstract'),
(18, '1', 'storage/uploads/nfts/18.jpeg', '8', '53', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(19, '1', 'storage/uploads/nfts/19.jpeg', '5', '26', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(20, '1', 'storage/uploads/nfts/20.jpeg', '5', '35', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(21, '1', 'storage/uploads/nfts/21.jpeg', '8', '52', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(22, '1', 'storage/uploads/nfts/22.jpeg', '2', '47', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(23, '1', 'storage/uploads/nfts/23.jpeg', '1', '80', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(24, '1', 'storage/uploads/nfts/24.jpeg', '7', '46', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(25, '1', 'storage/uploads/nfts/25.jpeg', '6', '94', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Gaming'),
(26, '1', 'storage/uploads/nfts/26.jpeg', '7', '93', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(27, '1', 'storage/uploads/nfts/27.jpeg', '3', '48', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(28, '1', 'storage/uploads/nfts/28.jpeg', '4', '55', 1, '100', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Abstract'),
(29, '1', 'storage/uploads/nfts/29.jpeg', '3', '10', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(30, '1', 'storage/uploads/nfts/30.jpeg', '8', '98', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(31, '1', 'storage/uploads/nfts/31.jpeg', '1', '67', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(32, '1', 'storage/uploads/nfts/32.jpeg', '6', '91', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(33, '1', 'storage/uploads/nfts/33.jpeg', '3', '22', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(34, '1', 'storage/uploads/nfts/34.jpeg', '6', '74', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(35, '1', 'storage/uploads/nfts/35.jpeg', '2', '13', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Painting'),
(36, '1', 'storage/uploads/nfts/36.jpeg', '2', '100', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(37, '1', 'storage/uploads/nfts/37.jpeg', '6', '39', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(38, '1', 'storage/uploads/nfts/38.jpeg', '6', '30', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(39, '1', 'storage/uploads/nfts/39.jpeg', '8', '2', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(40, '1', 'storage/uploads/nfts/40.jpeg', '4', '23', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(41, '1', 'storage/uploads/nfts/41.jpeg', '3', '6', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Painting'),
(42, '1', 'storage/uploads/nfts/42.jpeg', '1', '36', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(43, '1', 'storage/uploads/nfts/43.jpeg', '7', '11', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(44, '1', 'storage/uploads/nfts/44.jpeg', '6', '51', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(45, '1', 'storage/uploads/nfts/45.jpeg', '6', '78', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(46, '1', 'storage/uploads/nfts/46.jpeg', '7', '96', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Gaming'),
(47, '1', 'storage/uploads/nfts/47.jpeg', '4', '71', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(48, '1', 'storage/uploads/nfts/48.jpeg', '3', '20', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(49, '1', 'storage/uploads/nfts/49.jpeg', '1', '59', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(50, '1', 'storage/uploads/nfts/50.jpeg', '2', '29', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Painting'),
(51, '1', 'storage/uploads/nfts/51.jpeg', '2', '24', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(52, '1', 'storage/uploads/nfts/52.jpeg', '3', '32', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(53, '1', 'storage/uploads/nfts/53.jpeg', '6', '18', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(54, '1', 'storage/uploads/nfts/54.jpeg', '4', '61', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(55, '1', 'storage/uploads/nfts/55.jpeg', '4', '61', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(56, '1', 'storage/uploads/nfts/56.jpeg', '1', '46', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(57, '1', 'storage/uploads/nfts/57.jpeg', '2', '1', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(58, '1', 'storage/uploads/nfts/58.jpeg', '7', '69', 1, '100', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Abstract'),
(59, '1', 'storage/uploads/nfts/59.jpeg', '4', '20', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(60, '1', 'storage/uploads/nfts/60.jpeg', '6', '57', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(61, '1', 'storage/uploads/nfts/61.jpeg', '7', '57', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Painting'),
(62, '1', 'storage/uploads/nfts/62.jpeg', '2', '86', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(63, '1', 'storage/uploads/nfts/63.jpeg', '5', '73', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(64, '1', 'storage/uploads/nfts/64.jpeg', '2', '86', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Painting'),
(65, '1', 'storage/uploads/nfts/65.jpeg', '8', '57', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(66, '1', 'storage/uploads/nfts/66.jpeg', '1', '71', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(67, '1', 'storage/uploads/nfts/67.jpeg', '1', '11', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(68, '1', 'storage/uploads/nfts/68.jpeg', '6', '23', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(69, '1', 'storage/uploads/nfts/69.jpeg', '3', '0', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(70, '1', 'storage/uploads/nfts/70.jpeg', '4', '6', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(71, '1', 'storage/uploads/nfts/71.jpeg', '4', '78', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(72, '1', 'storage/uploads/nfts/72.jpeg', '2', '1', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(73, '1', 'storage/uploads/nfts/73.jpeg', '6', '15', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(74, '1', 'storage/uploads/nfts/74.jpeg', '8', '61', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Gaming'),
(75, '1', 'storage/uploads/nfts/75.jpeg', '8', '41', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(76, '1', 'storage/uploads/nfts/76.jpeg', '6', '16', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Painting'),
(77, '1', 'storage/uploads/nfts/77.jpeg', '5', '84', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(78, '1', 'storage/uploads/nfts/78.jpeg', '4', '51', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Gaming'),
(79, '1', 'storage/uploads/nfts/79.jpeg', '6', '87', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(80, '1', 'storage/uploads/nfts/80.jpeg', '7', '23', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(81, '1', 'storage/uploads/nfts/81.jpeg', '5', '88', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(82, '1', 'storage/uploads/nfts/82.jpeg', '8', '37', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Gaming'),
(83, '1', 'storage/uploads/nfts/83.jpeg', '1', '1', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(84, '1', 'storage/uploads/nfts/84.jpeg', '4', '35', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(85, '1', 'storage/uploads/nfts/85.jpeg', '2', '55', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(86, '1', 'storage/uploads/nfts/86.jpeg', '2', '97', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(87, '1', 'storage/uploads/nfts/87.jpeg', '2', '75', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(88, '1', 'storage/uploads/nfts/88.jpeg', '3', '79', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(89, '1', 'storage/uploads/nfts/89.jpeg', '2', '87', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(90, '1', 'storage/uploads/nfts/90.jpeg', '4', '63', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(91, '1', 'storage/uploads/nfts/91.jpeg', '3', '22', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(92, '1', 'storage/uploads/nfts/92.jpeg', '4', '8', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(93, '1', 'storage/uploads/nfts/93.jpeg', '3', '60', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(94, '1', 'storage/uploads/nfts/94.jpeg', '1', '92', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(95, '1', 'storage/uploads/nfts/95.jpeg', '5', '62', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(96, '1', 'storage/uploads/nfts/96.jpeg', '2', '76', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Gaming'),
(97, '1', 'storage/uploads/nfts/97.jpeg', '2', '15', 1, '100', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Abstract'),
(98, '1', 'storage/uploads/nfts/98.jpeg', '2', '45', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(99, '1', 'storage/uploads/nfts/99.jpeg', '8', '70', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Painting'),
(100, '1', 'storage/uploads/nfts/100.jpeg', '7', '24', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(101, '1', 'storage/uploads/nfts/101.jpeg', '7', '9', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(102, '1', 'storage/uploads/nfts/102.jpeg', '3', '95', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(103, '1', 'storage/uploads/nfts/103.jpeg', '3', '51', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(104, '1', 'storage/uploads/nfts/104.jpeg', '3', '86', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(105, '1', 'storage/uploads/nfts/105.jpeg', '6', '100', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(106, '1', 'storage/uploads/nfts/106.jpeg', '1', '53', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(107, '1', 'storage/uploads/nfts/107.jpeg', '5', '34', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(108, '1', 'storage/uploads/nfts/108.jpeg', '4', '22', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Gaming'),
(109, '1', 'storage/uploads/nfts/109.jpeg', '5', '86', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(110, '1', 'storage/uploads/nfts/110.jpeg', '1', '73', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(111, '1', 'storage/uploads/nfts/111.jpeg', '3', '54', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(112, '1', 'storage/uploads/nfts/112.jpeg', '2', '56', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(113, '1', 'storage/uploads/nfts/113.jpeg', '4', '73', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(114, '1', 'storage/uploads/nfts/114.jpeg', '4', '61', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(115, '1', 'storage/uploads/nfts/115.jpeg', '6', '60', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(116, '1', 'storage/uploads/nfts/116.jpeg', '7', '90', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(117, '1', 'storage/uploads/nfts/117.jpeg', '7', '67', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(118, '1', 'storage/uploads/nfts/118.jpeg', '1', '39', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(119, '1', 'storage/uploads/nfts/119.jpeg', '2', '34', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(120, '1', 'storage/uploads/nfts/120.jpeg', '6', '61', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(121, '1', 'storage/uploads/nfts/121.jpeg', '5', '86', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(122, '1', 'storage/uploads/nfts/122.jpeg', '4', '18', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(123, '1', 'storage/uploads/nfts/123.jpeg', '6', '65', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(124, '1', 'storage/uploads/nfts/124.jpeg', '1', '35', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(125, '1', 'storage/uploads/nfts/125.jpeg', '6', '30', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Painting'),
(126, '1', 'storage/uploads/nfts/126.jpeg', '4', '77', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(127, '1', 'storage/uploads/nfts/127.jpeg', '4', '20', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(128, '1', 'storage/uploads/nfts/128.jpeg', '1', '51', 1, '100', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Abstract'),
(129, '1', 'storage/uploads/nfts/129.jpeg', '8', '68', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(130, '1', 'storage/uploads/nfts/130.jpeg', '2', '76', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(131, '1', 'storage/uploads/nfts/131.jpeg', '4', '0', 1, '100', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Abstract'),
(132, '1', 'storage/uploads/nfts/132.jpeg', '4', '7', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(133, '1', 'storage/uploads/nfts/133.jpeg', '6', '1', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(134, '1', 'storage/uploads/nfts/134.jpeg', '1', '52', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(135, '1', 'storage/uploads/nfts/135.jpeg', '7', '12', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Gaming'),
(136, '1', 'storage/uploads/nfts/136.jpeg', '4', '52', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(137, '1', 'storage/uploads/nfts/137.jpeg', '5', '38', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(138, '1', 'storage/uploads/nfts/138.jpeg', '4', '25', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(139, '1', 'storage/uploads/nfts/139.jpeg', '7', '62', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Gaming'),
(140, '1', 'storage/uploads/nfts/140.jpeg', '3', '54', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(141, '1', 'storage/uploads/nfts/141.jpeg', '8', '10', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Painting'),
(142, '1', 'storage/uploads/nfts/142.jpeg', '7', '12', 1, '1000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Art'),
(143, '1', 'storage/uploads/nfts/143.jpeg', '4', '28', 1, '70000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Pets'),
(144, '1', 'storage/uploads/nfts/144.jpeg', '3', '67', 1, '200000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Sporting'),
(145, '1', 'storage/uploads/nfts/145.jpeg', '6', '53', 1, '100', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Abstract'),
(146, '1', 'storage/uploads/nfts/146.jpeg', '2', '63', 1, '10000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Painting'),
(147, '1', 'storage/uploads/nfts/147.jpeg', '5', '50', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(148, '1', 'storage/uploads/nfts/148.jpeg', '6', '15', 1, '100', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Abstract'),
(149, '1', 'storage/uploads/nfts/149.jpeg', '6', '6', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(150, '1', 'storage/uploads/nfts/150.jpeg', '8', '57', 1, '3000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Horror'),
(151, '1', 'storage/uploads/nfts/151.jpeg', '5', '15', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(152, '1', 'storage/uploads/nfts/152.jpeg', '4', '95', 1, '400', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Contemporary'),
(153, '1', 'storage/uploads/nfts/153.jpeg', '7', '71', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(154, '1', 'storage/uploads/nfts/154.jpeg', '3', '76', 1, '5000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Photography'),
(155, '1', 'storage/uploads/nfts/155.jpeg', '3', '92', 1, '55000', '2023-08-15 15:50:55', '2023-08-15 15:50:55', 'Ape'),
(156, '1', 'storage/uploads/nfts/156.jpeg', '3', '64', 1, '10000', '2023-08-15 15:50:55', '2023-10-16 01:17:18', 'Painting');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `wallet_balance` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `verified` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `address`, `balance`, `wallet_balance`, `verified`, `created_at`, `updated_at`) VALUES
(1, '0xa8d64cc8c103d98fb5d7b7408d5ec89dbda8c7b7', '0xa8d64cc8c103d98fb5d7b7408d5ec89dbda8c7b7', '0.0', '42.00', 1, '2023-10-14 07:20:56', '2023-10-16 01:17:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bids`
--
ALTER TABLE `bids`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `collections`
--
ALTER TABLE `collections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nfts`
--
ALTER TABLE `nfts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bids`
--
ALTER TABLE `bids`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `collections`
--
ALTER TABLE `collections`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `nfts`
--
ALTER TABLE `nfts`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=160;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
