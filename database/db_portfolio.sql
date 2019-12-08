-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 07, 2019 at 10:00 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `ID` int(11) NOT NULL,
  `Name` varchar(300) NOT NULL,
  `ProjectType` varchar(350) NOT NULL,
  `Description` text NOT NULL,
  `Role` varchar(280) NOT NULL,
  `Thumbnail` varchar(250) NOT NULL,
  `Image` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`ID`, `Name`, `ProjectType`, `Description`, `Role`, `Thumbnail`, `Image`) VALUES
(1, 'Thames River Anglers Association', 'Web Development - Design', 'During the winter of 2019, another partner and I were tasked to brand, design and develop the Thames River Anglers Association website. The main goal of this project was to make the brand more noticeable by all types of audiences, in order to achieve this task, we designed and developed a modern responsive website, designed merchandising products and produced a promotional animated video for the TRAA.', 'Developer, Designer & Motion Designer', 'traa_small.jpg', 'traa_large.png'),
(2, 'Formula 1 Interactive Infographic', 'Web Development - Design', 'Designed and developed a responsive one-page web application that showcases the 2018 Formula 1 Driver Standings interactively using animations, SVG images, and dynamic data. This interactive infographic uses Node.js and Express.js for the front and back end of the application. On the server-side routes are used to retrieve data from the database, and on the client side the data is fetched using a series of AJAX calls.', 'Web developer & Designer', 'infographic_small.jpg', 'infographic_large.png'),
(3, 'Sportsnet Video', 'Motion Design', 'For this project, I created, modeled, textured and lighted 3D elements in Cinema 4D in order to create a video intro for the Sportsnet Monday Night Football show. All 3D elements were animated and rendered in Cinema 4D. Afterwards, I used to Adobe After Effects to apply color correction, transitions and effects to the final video. ', 'Motion Designer', 'sportsnet_small.jpg', 'sportsnet_large.png'),
(4, 'Arbora Point of Purchase Displays', 'Branding - Design', 'I was tasked to design and 3D model point of purchase displays for the Arbora campaign. I designed two displays for retail stores, a free-standing display and a counter display. First, I sketched some ideas on paper, then I used cinema 4D in order to create 3D models of the displays and finally I created mock-ups and video animations to show all angles of the display.', 'Designer', 'arbora_small.jpg', 'arbora_large.png'),
(5, 'Organ Marketing Awareness Campaign', 'Branding - Marketing', 'Alongside with other designer, we were challenged to create a marketing awareness campaign for the regeneration and experimental orthotopic transplantation of bioengineered organs. The main goal of this campaign was to explain the benefits, the process and to bring awareness in a creative way of this complex medical procedure. To achieve this goal, I created an animated informational video that explains in detail the organ regeneration process.', 'Motion Designer ', 'organ_small.jpg', 'organ_large.png'),
(6, 'Morphing TV Commercial', 'Motion Design', 'For this project I produced a television commercial for a furniture company. The main goal of the commercial is to showcase the furniture morphing from one type of furniture to another while creating some interesting camera angles so the viewer can see the product from different angles.', 'Motion Designer', 'morphing_small.jpg', 'morphing_large.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
