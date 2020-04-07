
 

/* Create the schema for our tables */
create table supply_demand(id int, stage decimal, demand1x int, demand1y int , demand2x int, demand2y int , supply1x int, supply1y int, supply2x int, supply2y int, price float(8,2), quantity int, equal int, description text);

/* Populate the tables with our data */
insert into supply_demand values(1, 1, -20, 6, 200, -5, 0, 0, 200, 10, 2.56, 50, 0, ' News about the pandemic is staring' );

insert into supply_demand values(2, 2, 0, 7, 200, -4.1, 0, 0, 200, 10, 3.07, 50, 0, 'Some consumers have started stocking up on essentials' );
insert into supply_demand values(3, 3, 0, 9, 200, -3.5, 0, 0, 200, 10, 4.53, 50, -5, 'State of emergency have been declared in large cities');
insert into supply_demand values(4, 4, 0, 11, 200, -3.3, 0, 0, 200, 10, 6.02, 50, -9, 'More consumers rush to grocery stores, creating a shortage');
insert into supply_demand values(5, 5, 0, 13, 200, -3.6, 0, 0, 200, 10, 7.56, 50, -14, 'Some stores start running out of sanitizer');
insert into supply_demand values(6, 6, 0, 15, 200, -5, 0, 0, 200, 10, 8.25, 50, -20, 'News spread about shortages, driving price upwards' );
insert into supply_demand values(7, 7, 0, 17, 200, -8, 0, 0, 200, 10, 9.75, 50, -26, 'Almost all stores are out of sanitizer');
insert into supply_demand values(8, 8, 0, 19, 200, -9.6, 0, 0, 200, 10, 11.03, 50, -31, 'Stay at home oreders are put in place');
insert into supply_demand values(9, 9, 0, 21, 200, -12.3, 0, 0, 200, 10, 12.25, 50, -39, 'Prices continue to skyrocket' );
insert into supply_demand values(10, 15, 0, 23, 200, -17, 0, 0, 200, 10, 13.75, 50, -45, 'Price gauging begins');




insert into supply_demand values(20, 20, 0, 25, 125, 0, 0, 0, 200, 10, 15.03, 50, -50, 'Price hits all time high' );

insert into supply_demand values(21, 21, 0, 25, 125, 0, 0, 0, 200, 10, 14.25, 56, -44, 'Suppliers begin responding' );
insert into supply_demand values(22, 22, 0, 25, 125, 0, 0, 0, 200, 10, 13.47, 68, -32, 'Suppliers are preparing factories' );
insert into supply_demand values(23, 23, 0, 25, 125, 0, 0, 0, 200, 10, 11.15, 72, -28,'Production is increased by 10% by all suppliers' );



insert into supply_demand values(30, 30, 0, 25, 125, 0, 0, 0, 200, 10, 10.04, 75, -25, 'Production is increased by 25% by all suppliers' );


insert into supply_demand values(31, 31,    0, 25, 125, 0,  -.25, 0,    200, 9.75,  9.50, 75, -25, 'Suppliers have only fulfilled part of demand' );
insert into supply_demand values(32, 32,    0, 25, 125, 0,  -.5, 0,     200, 9.5,   9.16, 78, -22, 'Suppliers are not able to fulfill demand at current economies of scale');
insert into supply_demand values(33, 33,    0, 25, 125, 0,  -.75, 0,    200, 9.25,  8.25, 81, -19, 'Suppliers begin making plans to expand' );
insert into supply_demand values(34, 34,    0, 25, 125, 0,  -1, 0,      200, 9,     7.23, 80, -16, 'The high price attracts new suppliers to the market' );
insert into supply_demand values(35, 35,    0, 25, 125, 0,  -1.25, 0,   200, 8.75,  6.93, 84, -12, 'Local Distillies enter market but there is a lag time before they can start producing' );
insert into supply_demand values(36, 36,    0, 25, 125, 0,  -1.5, 0,    200, 8.5,   6.12, 86, -10, 'Suppliers have increase production by almost 50%' );
insert into supply_demand values(37, 37,    0, 25, 125, 0,  -1.75, 0,   200, 8.25,  5.25, 86, -8, 'Price continues to drop as quanity increases' );
insert into supply_demand values(38, 38,    0, 25, 125, 0,  -2, 0,      200, 8,     4.05, 95, -6, 'Markets are stabilizing');
insert into supply_demand values(39, 39,    0, 25, 125, 0,  -2.25, 0,   200, 7.75,  3.46, 105, -3, 'Price has droped as quanity increases');




insert into supply_demand values(40, 40, 0, 25, 125, 0, 0, -2.5, 200, 7.5, 3.03, 110, 0 , 'Market is finally in equalibrium' );

insert into supply_demand values(41, 41, 0, 23, 200, -17, 0, -2.5, 200, 7.5, 2.75, 106, 4, 'Pandemic has reached its climax');
insert into supply_demand values(42, 42, 0, 21, 200, -12.3, 0, -2.5, 200, 7.5, 2.64, 102, 8, 'Consumers are less worried about the future');
insert into supply_demand values(43, 43, 0, 19, 200, -9.6, 0, -2.5, 200, 7.5, 2.56, 98, 12, 'Demand curve begins to move to the left');
insert into supply_demand values(44, 44, 0, 17, 200, -8, 0, -2.5, 200, 7.5, 2.34, 96, 16, 'Quanity demaded beings to drop' );
insert into supply_demand values(45, 45, 0, 15, 200, -5, 0, -2.5, 200, 7.5, 2.11, 92, 18, 'A surplus results in the market' );
insert into supply_demand values(46, 46, 0, 13, 200, -3.6, 0, -2.5, 200, 7.5, 1.95, 88, 20, 'Consumers have stopped buying sanitizer');
insert into supply_demand values(47, 47, 0, 11, 200, -3.3, 0, -2.5, 200, 7.5, 1.65, 86, 24, 'Price drops below equalibrium before the pandemic began' );
insert into supply_demand values(48, 48, 0, 9, 200, -3.5, 0, -2.5, 200, 7.5, 1.54, 82, 28, 'Pandemic has declined');
insert into supply_demand values(49, 49, 0, 7, 200, -4.1, 0, -2.5, 200, 7.5, 1.42, 78, 32, 'Demand returns to levels before the pandemic began' );




insert into supply_demand values(50, 50, 0, 5, 200, -5, 0, -2.5, 170, 6, 1.25, 75, 35, 'The price has become to low for suppliers');


insert into supply_demand values(51, 51,        0, 5, 200, -5,       -2.25,    0, 200, 7.75,      1.25, 73, 33, 'Suppliers begin to reduce production');
insert into supply_demand values(52, 52,        0, 5, 200, -5,       -2,       0, 200,  8.01,        1.25, 69, 29, 'Local distilleries begin dropping out of the market');
insert into supply_demand values(53, 53,        0, 5, 200, -5,       -1.75,    0, 200,  8.25,     1.25, 65, 25, 'As more suppliers drop out the supply curve shifts left');
insert into supply_demand values(54, 54,        0, 5, 200, -5,       -1.5,     0, 200,  8.54,      1.25, 63, 21, 'Price slowly rises');
insert into supply_demand values(55, 55,        0, 5, 200, -5,       -1.25,    0, 200,  8.75,     1.25, 61, 18, 'Quanity decreases');
insert into supply_demand values(56, 56,        0, 5, 200, -5,      -1,       0, 200,   9.02,       1.25, 59, 15, 'Market surplus becomes smaller');
insert into supply_demand values(57, 57,        0, 5, 200, -5,       -.75,     0, 200,  9.25,      1.25, 57, 11, 'Market returns to prepandemic levels');
insert into supply_demand values(58, 58,        0, 5, 200, -5,       -2.5,     0, 200,  9.52,      1.25, 54, 7, 'Price stabilizes');
insert into supply_demand values(59, 59,        0, 5, 200, -5,       -2.5,     0, 200,  9.75,      1.25, 51, 4, 'Quanity stabilizes');




insert into supply_demand values(60, 60, -20, 6, 200, -5, 0, 0, 200, 10, 2.56, 50, 0, 'Market is in equalibrium');
