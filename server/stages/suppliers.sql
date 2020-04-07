/* Delete the tables if they already exist */
/*drop table supply_demand

/* Create the schema for our tables */
create table suppliers(id int, company_id int, stage int, brand text, quantity_produced int, previous_quantity int);

/* Populate the tables with our data */

/*stage 1 */
insert into suppliers values(1, 1, 1, 'Purell®', 20, 20);
insert into suppliers values(2, 2, 1, 'Germ-X®', 15, 15);
insert into suppliers values(3, 3, 1, 'Wet Ones®', 7.5, 7.5);
insert into suppliers values(4, 4, 1, "Nice 'N Clean®", 2.5, 2.5 );
insert into suppliers values(5, 5, 1, 'Other', 5, 5 );

/*stage 11 */
insert into suppliers values(6, 1, 2, 'Purell®', 20.5, 20);
insert into suppliers values(7, 2, 2, 'Germ-X®', 17, 15);
insert into suppliers values(8, 3, 2, 'Wet Ones®', 5, 7.5);
insert into suppliers values(9, 4, 2, "Nice 'N Clean®", 5, 2.5 );
insert into suppliers values(10, 5, 2, 'Other', 2.5, 5 );

/*stage 12 */
insert into suppliers values(11, 1, 3, 'Purell®', 20, 20.5);
insert into suppliers values(12, 2, 3, 'Germ-X®', 17.5, 17);
insert into suppliers values(13, 3, 3, 'Wet Ones®', 3, 5);
insert into suppliers values(14, 4, 3, "Nice 'N Clean®", 6, 5 );
insert into suppliers values(15, 5, 3, 'Other', 2.5, 2.5 );

/*stage 13 */
insert into suppliers values(16, 1, 4, 'Purell®', 19, 10);
insert into suppliers values(17, 2, 4, 'Germ-X®', 18, 17.5);
insert into suppliers values(18, 3, 4, 'Wet Ones®', 3, 3);
insert into suppliers values(19, 4, 4, "Nice 'N Clean®", 6, 6 );
insert into suppliers values(20, 5, 4, 'Other', 3, 2.5 );

/*stage 14 */
insert into suppliers values(21, 1, 5, 'Purell®', 18.5, 19);
insert into suppliers values(22, 2, 5, 'Germ-X®', 19, 18);
insert into suppliers values(23, 3, 5, 'Wet Ones®', 5, 3);
insert into suppliers values(24, 4, 5, "Nice 'N Clean®", 2.5, 6 );
insert into suppliers values(25, 5, 5, 'Other', 5, 3 );

/*stage 15 */
insert into suppliers values(26, 1, 6, 'Purell®', 19, 18.5);
insert into suppliers values(27, 2, 6, 'Germ-X®', 19.5, 19);
insert into suppliers values(28, 3, 6, 'Wet Ones®', 4.5, 5);
insert into suppliers values(29, 4, 6, "Nice 'N Clean®", 3.5, 2.5 );
insert into suppliers values(30, 5, 6, 'Other', 3, 5 );

/*stage 16 */
insert into suppliers values(31, 1, 7, 'Purell®', 18, 19);
insert into suppliers values(32, 2, 7, 'Germ-X®', 19.5, 19.5);
insert into suppliers values(33, 3, 7, 'Wet Ones®', 5, 4.5);
insert into suppliers values(34, 4, 7, "Nice 'N Clean®", 4, 3.5 );
insert into suppliers values(35, 5, 7, 'Other', 3, 3);

/*stage 17 */
insert into suppliers values(36, 1, 8, 'Purell®', 20, 18);
insert into suppliers values(37, 2, 8, 'Germ-X®', 20, 19.5);
insert into suppliers values(38, 3, 8, 'Wet Ones®', 6, 5);
insert into suppliers values(39, 4, 8, "Nice 'N Clean®", 2.5, 4 );
insert into suppliers values(40, 5, 8, 'Other', 2.5 , 3);

/*stage 18 */
insert into suppliers values(41, 1, 9, 'Purell®', 20.5, 20);
insert into suppliers values(42, 2, 9, 'Germ-X®', 19.5, 20);
insert into suppliers values(43, 3, 9, 'Wet Ones®', 7.5, 6);
insert into suppliers values(44, 4, 9, "Nice 'N Clean®", 2.5, 2.5 );
insert into suppliers values(45, 5, 9, 'Other', 3 , 2.5);

/*stage 19 */
insert into suppliers values(46, 1, 15, 'Purell®', 23, 20.5);
insert into suppliers values(47, 2, 15, 'Germ-X®', 21, 19.5);
insert into suppliers values(48, 3, 15, 'Wet Ones®', 9, 7.5);
insert into suppliers values(49, 4, 15, "Nice 'N Clean ®", 2.5, 2.5 );
insert into suppliers values(50, 5, 15, 'Other', 4 , 3);


/*stage 20 - suppliers sont have time to increase production */
insert into suppliers values(51, 1, 20, 'Purell®', 25, 23);
insert into suppliers values(52, 2, 20, 'Germ-X®', 23, 21);
insert into suppliers values(53, 3, 20, 'Wet Ones®', 10, 9);
insert into suppliers values(54, 4, 20, "Nice 'N Clean®", 2.5, 2.5 );
insert into suppliers values(55, 5, 20, 'Other', 5 , 4);

/*stage 21 - suppliers sont have time to increase production */
insert into suppliers values(56, 1, 21, 'Purell®', 25, 25);
insert into suppliers values(57, 2, 21, 'Germ-X®', 27, 23);
insert into suppliers values(58, 3, 21, 'Wet Ones®', 10, 10);
insert into suppliers values(59, 4, 21, "Nice 'N Clean®", 2.5, 2.5 );
insert into suppliers values(60, 5, 21, 'Other', 5, 5 );

/*stage 22 - suppliers sont have time to increase production */
insert into suppliers values(61, 1, 22, 'Purell®', 27, 25);
insert into suppliers values(62, 2, 22, 'Germ-X®', 28, 27);
insert into suppliers values(63, 3, 22, 'Wet Ones®', 10, 10);
insert into suppliers values(64, 4, 22, "Nice 'N Clean®", 2.5, 2.5 );
insert into suppliers values(65, 5, 22, 'Other', 5, 5 );

/*stage 23 - suppliers sont have time to increase production */
insert into suppliers values(66, 1, 23, 'Purell®', 29, 27);
insert into suppliers values(67, 2, 23, 'Germ-X®', 28, 28);
insert into suppliers values(68, 3, 23, 'Wet Ones®', 10, 10);
insert into suppliers values(69, 4, 23, "Nice 'N Clean®", 5, 2.5 );
insert into suppliers values(70, 5, 23, 'Other', 2, 5 );



/*stage 30 - suppliers increase 50% to meet demand and new companies jump in*/
insert into suppliers values(71, 1, 30, 'Purell®', 30, 29);
insert into suppliers values(72, 2, 30, 'Germ-X®', 26, 28);
insert into suppliers values(73, 3, 30, 'Wet Ones®',11.25, 10);
insert into suppliers values(74, 4, 30, "Nice 'N Clean®", 3.75, 5 );
insert into suppliers values(75, 5, 30, 'Other', 7.5 , 2);
insert into suppliers values(76, 6, 30, 'Local Distillery', 0, 0 );

/*stage 31 - suppliers increase 50% to meet demand and new companies jump in*/
insert into suppliers values(78, 1, 31, 'Purell®', 30, 30);
insert into suppliers values(79, 2, 31, 'Germ-X®', 26, 28);
insert into suppliers values(80, 3, 31, 'Wet Ones®',11.25, 11.25);
insert into suppliers values(81, 4, 31, "Nice 'N Clean®", 3.75, 3.75 );
insert into suppliers values(82, 5, 31, 'Other', 7.5, 7.5 );
insert into suppliers values(83, 6, 31, 'Local Distillery', 0, 0 );

/*stage 32 - suppliers increase 50% to meet demand and new companies jump in*/
insert into suppliers values(84, 1, 32, 'Purell®', 30, 30);
insert into suppliers values(85, 2, 32, 'Germ-X®', 26, 26);
insert into suppliers values(86, 3, 32, 'Wet Ones®',11.25, 11.25);
insert into suppliers values(87, 4, 32, "Nice 'N Clean®", 3.75, 3.75 );
insert into suppliers values(88, 5, 32, 'Other', 7.5, 7.5 );
insert into suppliers values(89, 6, 32, 'Local Distillery', 3.50, 0 );

/*stage 33 - suppliers increase 50% to meet demand and new companies jump in*/
insert into suppliers values(90, 1, 33, 'Purell®', 30, 30);
insert into suppliers values(91, 2, 33, 'Germ-X®', 26, 26);
insert into suppliers values(92, 3, 33, 'Wet Ones®', 11.25, 11.25);
insert into suppliers values(93, 4, 33, "Nice 'N Clean®", 3.75, 3.75 );
insert into suppliers values(94, 5, 33, 'Other', 7.5 , 7.5);
insert into suppliers values(95, 6, 33, 'Local Distillery', 1, 3.50 );

/*stage 34 - suppliers increase 50% to meet demand and new companies jump in*/
insert into suppliers values(96, 1, 34, 'Purell®', 30, 30);
insert into suppliers values(97, 2, 34, 'Germ-X®', 26, 26);
insert into suppliers values(98, 3, 34, 'Wet Ones®', 11.25, 11.25);
insert into suppliers values(99, 4, 34, "Nice 'N Clean®", 3.75, 3.75 );
insert into suppliers values(100, 5, 34, 'Other', 7.5, 7.5 );
insert into suppliers values(101, 6, 34, 'Local Distillery', 1, 1 );

/*stage 35 - suppliers increase 50% to meet demand and new companies jump in*/
insert into suppliers values(102, 1, 35, 'Purell®', 30, 30);
insert into suppliers values(103, 2, 35, 'Germ-X®', 26, 26);
insert into suppliers values(104, 3, 35, 'Wet Ones®',11.25, 11.25);
insert into suppliers values(105, 4, 35, "Nice 'N Clean®", 3.75 , 3.75);
insert into suppliers values(106, 5, 35, 'Other', 7.5 , 7.5);
insert into suppliers values(107, 6, 35, 'Local Distillery', 6.5 , 1);

/*stage 36 - suppliers increase 50% to meet demand and new companies jump in*/
insert into suppliers values(108, 1, 36, 'Purell®', 30, 30);
insert into suppliers values(109, 2, 36, 'Germ-X®', 26, 26);
insert into suppliers values(110, 3, 36, 'Wet Ones®',11.25, 11.25);
insert into suppliers values(111, 4, 36, "Nice 'N Clean®", 3.75 , 3.75);
insert into suppliers values(112, 5, 36, 'Other', 7.5 , 7.5);
insert into suppliers values(113, 6, 36, 'Local Distillery', 7.8  , 6.5);

/*stage 37 - suppliers increase 50% to meet demand and new companies jump in*/
insert into suppliers values(114, 1, 37, 'Purell®', 30, 30);
insert into suppliers values(115, 2, 37, 'Germ-X®', 26, 26);
insert into suppliers values(116, 3, 37, 'Wet Ones®',11.25, 11.25);
insert into suppliers values(117, 4, 37, "Nice 'N Clean®", 3.75 , 3.75);
insert into suppliers values(118, 5, 37, 'Other', 7.5 , 7.5);
insert into suppliers values(119, 6, 37, 'Local Distillery', 9.7 , 7.8);

/*stage 38 - suppliers increase 50% to meet demand and new companies jump in*/
insert into suppliers values(120, 1, 38, 'Purell®', 30 ,30);
insert into suppliers values(121, 2, 38, 'Germ-X®', 26, 26);
insert into suppliers values(122, 3, 38, 'Wet Ones®',11.25, 11.25);
insert into suppliers values(123, 4, 38, "Nice 'N Clean®", 3.75 ,3.75);
insert into suppliers values(124, 5, 38, 'Other', 7.5 , 7.5);
insert into suppliers values(125, 6, 38, 'Local Distillery', 10, 9.0 );

/*stage 39 - suppliers increase 50% to meet demand and new companies jump in*/
insert into suppliers values(126, 1, 39, 'Purell®', 30, 30);
insert into suppliers values(127, 2, 39, 'Germ-X®', 26, 26);
insert into suppliers values(128, 3, 39, 'Wet Ones®',11.25, 11.25);
insert into suppliers values(129, 4, 39, "Nice 'N Clean®", 3.75 , 3.75);
insert into suppliers values(130, 5, 39, 'Other', 7.5, 7.5 );
insert into suppliers values(131, 6, 39, 'Local Distillery', 13.75, 10 );

/*stage 40 - pandemic starts to subside, deemand drops and there is a surplus*/
insert into suppliers values(132, 1, 40, 'Purell®', 31, 30);
insert into suppliers values(133, 2, 40, 'Germ-X®', 28, 26);
insert into suppliers values(134, 3, 40, 'Wet Ones®',14.25, 11.25);
insert into suppliers values(135, 4, 40, "Nice 'N Clean®", 5 , 3.75);
insert into suppliers values(136, 5, 40, 'Other', 10, 7.5 );
insert into suppliers values(137, 6, 40, 'Local Distillery', 15.75, 13.75 );


/*stage 41 - pandemic starts to subside, deemand drops and there is a surplus*/
insert into suppliers values(138, 1, 41, 'Purell®', 31, 31);
insert into suppliers values(139, 2, 41, 'Germ-X®', 28, 28);
insert into suppliers values(140, 3, 41, 'Wet Ones®',14.25, 14.25);
insert into suppliers values(141, 4, 41, "Nice 'N Clean®", 5 , 5);
insert into suppliers values(142, 5, 41, 'Other', 10, 10 );
insert into suppliers values(143, 6, 41, 'Local Distillery', 15.75 , 15.75);


/*stage 42 - pandemic starts to subside, deemand drops and there is a surplus*/
insert into suppliers values(144, 1, 42, 'Purell®', 28, 31);
insert into suppliers values(145, 2, 42, 'Germ-X®', 29, 28);
insert into suppliers values(146, 3, 42, 'Wet Ones®', 9, 14.25);
insert into suppliers values(147, 4, 42, "Nice 'N Clean®", 8 , 5);
insert into suppliers values(148, 5, 42, 'Other', 10 , 10);
insert into suppliers values(149, 6, 42, 'Local Distillery', 16, 15.75 );


/*stage 43 - pandemic starts to subside, deemand drops and there is a surplus*/
insert into suppliers values(150, 1, 43, 'Purell®', 28, 28);
insert into suppliers values(151, 2, 43, 'Germ-X®', 29, 29);
insert into suppliers values(152, 3, 43, 'Wet Ones®',12, 9);
insert into suppliers values(153, 4, 43, "Nice 'N Clean®", 7, 8 );
insert into suppliers values(154, 5, 43, 'Other', 9, 10 );
insert into suppliers values(155, 6, 43, 'Local Distillery', 13.25, 16 );



/*stage 44 - pandemic starts to subside, deemand drops and there is a surplus*/
insert into suppliers values(156, 1, 44, 'Purell®', 29, 28);
insert into suppliers values(157, 2, 44, 'Germ-X®', 30, 29);
insert into suppliers values(158, 3, 44, 'Wet Ones®',13.5, 12);
insert into suppliers values(159, 4, 44, "Nice 'N Clean®", 7, 7 );
insert into suppliers values(160, 5, 44, 'Other', 9 , 9);
insert into suppliers values(161, 6, 44, 'Local Distillery', 13.25, 13.25 );


/*stage 45 - pandemic starts to subside, deemand drops and there is a surplus*/
insert into suppliers values(162, 1, 45, 'Purell®', 30, 29);
insert into suppliers values(163, 2, 45, 'Germ-X®', 31, 30);
insert into suppliers values(164, 3, 45, 'Wet Ones®',14.25, 13.5);
insert into suppliers values(165, 4, 45, "Nice 'N Clean®", 5 , 7);
insert into suppliers values(166, 5, 45, 'Other', 10 ,9);
insert into suppliers values(167, 6, 45, 'Local Distillery', 14.2, 13.25 );


/*stage 46 - pandemic starts to subside, deemand drops and there is a surplus*/
insert into suppliers values(168, 1, 46, 'Purell®', 31, 30);
insert into suppliers values(169, 2, 46, 'Germ-X®', 30, 31);
insert into suppliers values(170, 3, 46, 'Wet Ones®',14, 14.25);
insert into suppliers values(171, 4, 46, "Nice 'N Clean®", 5.6, 5 );
insert into suppliers values(172, 5, 46, 'Other', 8, 10 );
insert into suppliers values(173, 6, 46, 'Local Distillery', 15.75, 14.2 );


/*stage 47 - pandemic starts to subside, deemand drops and there is a surplus*/
insert into suppliers values(174, 1, 47, 'Purell®', 31, 30);
insert into suppliers values(175, 2, 47, 'Germ-X®', 28, 30);
insert into suppliers values(176, 3, 47, 'Wet Ones®',14.25, 14);
insert into suppliers values(177, 4, 47, "Nice 'N Clean®", 8 , 5.6);
insert into suppliers values(178, 5, 47, 'Other', 8 ,10);
insert into suppliers values(179, 6, 47, 'Local Distillery', 15.25, 15.75 );


/*stage 48 - pandemic starts to subside, deemand drops and there is a surplus*/
insert into suppliers values(180, 1, 48, 'Purell®', 31, 31);
insert into suppliers values(181, 2, 48, 'Germ-X®', 28, 28);
insert into suppliers values(182, 3, 48, 'Wet Ones®',14.5, 14.25);
insert into suppliers values(183, 4, 48, "Nice 'N Clean®", 9 , 8);
insert into suppliers values(184, 5, 48, 'Other', 8, 8 );
insert into suppliers values(185, 6, 48, 'Local Distillery', 14.3, 15.25 );


/*stage 49 - pandemic starts to subside, deemand drops and there is a surplus*/
insert into suppliers values(186, 1, 49, 'Purell®', 31, 31);
insert into suppliers values(187, 2, 49, 'Germ-X®', 29, 28);
insert into suppliers values(188, 3, 49, 'Wet Ones®',12, 14.25);
insert into suppliers values(189, 4, 49, "Nice 'N Clean®", 8 , 9);
insert into suppliers values(190, 5, 49, 'Other', 7, 8);
insert into suppliers values(191, 6, 49, 'Local Distillery', 13.5, 14.3 );

/*stage 50 - suppliers decrease and companies drop out*/
insert into suppliers values(192, 1, 50, 'Purell®', 35.5, 31);
insert into suppliers values(193, 2, 50, 'Germ-X®', 28, 29);
insert into suppliers values(194, 3, 50, 'Wet Ones®',14.5, 14.25);
insert into suppliers values(195, 4, 50, "Nice 'N Clean®", 7 , 8);
insert into suppliers values(196, 5, 50, 'Other', 10, 7 );
insert into suppliers values(197, 6, 50, 'Local Distillery', 15.9, 13.5 );

/*stage 51 - suppliers decrease and companies drop out*/
insert into suppliers values(198, 1, 51, 'Purell®', 33, 35.5);
insert into suppliers values(199, 2, 51, 'Germ-X®', 28, 28);
insert into suppliers values(200, 3, 51, 'Wet Ones®',12, 14.25);
insert into suppliers values(201, 4, 51, "Nice 'N Clean®", 8, 7 );
insert into suppliers values(202, 5, 51, 'Other', 9, 10 );
insert into suppliers values(203, 6, 51, 'Local Distillery', 14.6, 15.9 );

/*stage 52 - suppliers decrease and companies drop out*/
insert into suppliers values(204, 1, 52, 'Purell®', 31, 33);
insert into suppliers values(205, 2, 52, 'Germ-X®', 29, 28);
insert into suppliers values(206, 3, 52, 'Wet Ones®',13.2, 12);
insert into suppliers values(207, 4, 52, "Nice 'N Clean®", 8, 8 );
insert into suppliers values(208, 5, 52, 'Other', 8 , 9);
insert into suppliers values(209, 6, 52, 'Local Distillery', 11.5, 14.6 );

/*stage 53 - suppliers decrease and companies drop out*/
insert into suppliers values(210, 1, 53, 'Purell®', 29, 31);
insert into suppliers values(211, 2, 53, 'Germ-X®', 29, 29);
insert into suppliers values(212, 3, 53, 'Wet Ones®',12.5, 13.2);
insert into suppliers values(213, 4, 53, "Nice 'N Clean®", 9 , 8);
insert into suppliers values(214, 5, 53, 'Other', 8 );
insert into suppliers values(215, 6, 53, 'Local Distillery', 7 , 11.5);

/*stage 54 - suppliers decrease and companies drop out*/
insert into suppliers values(216, 1, 54, 'Purell®', 27, 29);
insert into suppliers values(217, 2, 54, 'Germ-X®', 28, 29);
insert into suppliers values(218, 3, 54, 'Wet Ones®',14.5, 12.5);
insert into suppliers values(219, 4, 54, "Nice 'N Clean®", 7, 9 );
insert into suppliers values(220, 5, 54, 'Other', 8 , 8);
insert into suppliers values(221, 6, 54, 'Local Distillery', 5.25, 7 );

/*stage 55 - suppliers decrease and companies drop out*/
insert into suppliers values(222, 1, 55, 'Purell®', 24, 27);
insert into suppliers values(223, 2, 55, 'Germ-X®', 28, 28);
insert into suppliers values(224, 3, 55, 'Wet Ones®',12.6, 14.5);
insert into suppliers values(225, 4, 55, "Nice 'N Clean®", 7,7 );
insert into suppliers values(226, 5, 55, 'Other', 8 ,8);
insert into suppliers values(227, 6, 55, 'Local Distillery', 2.25, 5.25 );

/*stage 56 - suppliers decrease and companies drop out*/
insert into suppliers values(228, 1, 56, 'Purell®', 23, 24);
insert into suppliers values(229, 2, 56, 'Germ-X®', 26, 28);
insert into suppliers values(230, 3, 56, 'Wet Ones®',9.8, 12.6);
insert into suppliers values(231, 4, 56, "Nice 'N Clean®", 7, 7 );
insert into suppliers values(232, 5, 56, 'Other', 7 , 8);
insert into suppliers values(233, 6, 56, 'Local Distillery', 1.5, 2.25 );

/*stage 57 - suppliers decrease and companies drop out*/
insert into suppliers values(234, 1, 57, 'Purell®', 22, 23);
insert into suppliers values(235, 2, 57, 'Germ-X®', 24, 26);
insert into suppliers values(236, 3, 57, 'Wet Ones®',9.25, 9.8);
insert into suppliers values(237, 4, 57, "Nice 'N Clean®", 7, 7 );
insert into suppliers values(238, 5, 57, 'Other', 10, 7 );
insert into suppliers values(239, 6, 57, 'Local Distillery', 1, 1.5 );

/*stage 58 - suppliers decrease and companies drop out*/
insert into suppliers values(240, 1, 58, 'Purell®', 21, 22);
insert into suppliers values(241, 2, 58, 'Germ-X®', 20, 24);
insert into suppliers values(242, 3, 58, 'Wet Ones®',8, 9.25);
insert into suppliers values(243, 4, 58, "Nice 'N Clean®", 5, 7);
insert into suppliers values(244, 5, 58, 'Other', 7 , 10);

/*stage 59 - suppliers decrease and companies drop out*/
insert into suppliers values(245, 1, 59, 'Purell®', 21, 21);
insert into suppliers values(246, 2, 59, 'Germ-X®', 16, 20);
insert into suppliers values(247, 3, 59, 'Wet Ones®',6.5, 8);
insert into suppliers values(248, 4, 59, "Nice 'N Clean®", 3, 5 );
insert into suppliers values(249, 5, 59, 'Other', 6, 7 );

/*stage 6 - suppliers decrease to stage 1*/
insert into suppliers values(250, 1, 60, 'Purell®', 20, 21);
insert into suppliers values(251, 2, 60, 'Germ-X®', 15, 16);
insert into suppliers values(252, 3, 60, 'Wet Ones®', 7.5, 8);
insert into suppliers values(253, 4, 60, "Nice 'N Clean®", 2.5, 3 );
insert into suppliers values(254, 5, 60, 'Other', 5 , 6);
