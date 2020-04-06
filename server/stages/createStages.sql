/* Delete the tables if they already exist */
/*drop table supply_demand

/* Create the schema for our tables */
create table supply_demand(id int, stage decimal, demand1x int, demand1y int , demand2x int, demand2y int , supply1x int, supply1y int, supply2x int, supply2y int, price float(8,2), quantity int, equal int);

/* Populate the tables with our data */
insert into supply_demand values(1, 10, -20, 6, 200, -5, 0, 0, 200, 10, 2.50, 50, 0 );

insert into supply_demand values(2, 11, 0, 7, 200, -4.1, 0, 0, 200, 10, 3.00, 50, 0 );
insert into supply_demand values(3, 12, 0, 9, 200, -3.5, 0, 0, 200, 10, 4.50, 50, -5);
insert into supply_demand values(4, 13, 0, 11, 200, -3.3, 0, 0, 200, 10, 6.00, 50, -9);
insert into supply_demand values(5, 14, 0, 13, 200, -3.6, 0, 0, 200, 10, 7.50, 50, -14);
insert into supply_demand values(6, 15, 0, 15, 200, -5, 0, 0, 200, 10, 8.25, 50, -20 );
insert into supply_demand values(7, 16, 0, 17, 200, -8, 0, 0, 200, 10, 9.75, 50, -26);
insert into supply_demand values(8, 17, 0, 19, 200, -9.6, 0, 0, 200, 10, 11.00, 50, -31);
insert into supply_demand values(9, 18, 0, 21, 200, -12.3, 0, 0, 200, 10, 12.25, 50, -39 );
insert into supply_demand values(10, 19, 0, 23, 200, -17, 0, 0, 200, 10, 13.75, 50, -45 );




insert into supply_demand values(20, 20, 0, 25, 125, 0, 0, 0, 200, 10, 15.00, 50, -50 );

insert into supply_demand values(21, 21, 0, 25, 125, 0, 0, 0, 200, 10, 14.20, 56, -44 );
insert into supply_demand values(22, 22, 0, 25, 125, 0, 0, 0, 200, 10, 13.40, 68, -32 );
insert into supply_demand values(23, 23, 0, 25, 125, 0, 0, 0, 200, 10, 11.15, 72, -28 );



insert into supply_demand values(30, 30, 0, 25, 125, 0, 0, 0, 200, 10, 10.00, 75, -25 );


insert into supply_demand values(31, 31,    0, 25, 125, 0,  -.25, 0,    200, 9.75,  9.50, 75, -25 );
insert into supply_demand values(32, 32,    0, 25, 125, 0,  -.5, 0,     200, 9.5,   9.10, 78, -22 );
insert into supply_demand values(33, 33,    0, 25, 125, 0,  -.75, 0,    200, 9.25,  8.25, 81, -19 );
insert into supply_demand values(34, 34,    0, 25, 125, 0,  -1, 0,      200, 9,     7.24, 80, -16 );
insert into supply_demand values(35, 35,    0, 25, 125, 0,  -1.25, 0,   200, 8.75,  6.90, 84, -12 );
insert into supply_demand values(36, 36,    0, 25, 125, 0,  -1.5, 0,    200, 8.5,   6.10, 86, -10 );
insert into supply_demand values(37, 37,    0, 25, 125, 0,  -1.75, 0,   200, 8.25,  5.25, 86, -8 );
insert into supply_demand values(38, 38,    0, 25, 125, 0,  -2, 0,      200, 8,     4.05, 95, -6);
insert into supply_demand values(39, 39,    0, 25, 125, 0,  -2.25, 0,   200, 7.75,  3.46, 105, -3 );




insert into supply_demand values(40, 40, 0, 25, 125, 0, 0, -2.5, 200, 7.5, 3.00, 110, 0 );

insert into supply_demand values(41, 41, 0, 23, 200, -17, 0, -2.5, 200, 7.5, 2.70, 106, 4);
insert into supply_demand values(42, 42, 0, 21, 200, -12.3, 0, -2.5, 200, 7.5, 2.64, 102, 8 );
insert into supply_demand values(43, 43, 0, 19, 200, -9.6, 0, -2.5, 200, 7.5, 2.56, 98, 12);
insert into supply_demand values(44, 44, 0, 17, 200, -8, 0, -2.5, 200, 7.5, 2.34, 96, 16 );
insert into supply_demand values(45, 45, 0, 15, 200, -5, 0, -2.5, 200, 7.5, 2.10, 92, 18 );
insert into supply_demand values(46, 46, 0, 13, 200, -3.6, 0, -2.5, 200, 7.5, 1.95, 88, 20);
insert into supply_demand values(47, 47, 0, 11, 200, -3.3, 0, -2.5, 200, 7.5, 1.65, 86, 24 );
insert into supply_demand values(48, 48, 0, 9, 200, -3.5, 0, -2.5, 200, 7.5, 1.54, 82, 28);
insert into supply_demand values(49, 49, 0, 7, 200, -4.1, 0, -2.5, 200, 7.5, 1.40, 78, 32 );




insert into supply_demand values(50, 50, 0, 5, 200, -5, 0, -2.5, 170, 6, 1.25, 75, 35);


insert into supply_demand values(51, 51,        0, 5, 200, -5,       -2.25,    0, 200, 7.75,      1.25, 73, 33);
insert into supply_demand values(52, 52,        0, 5, 200, -5,       -2,       0, 200,  8.00,        1.25, 69, 29);
insert into supply_demand values(53, 53,        0, 5, 200, -5,       -1.75,    0, 200,  8.25,     1.25, 65, 25);
insert into supply_demand values(54, 54,        0, 5, 200, -5,       -1.5,     0, 200,  8.50,      1.25, 63, 21);
insert into supply_demand values(55, 55,        0, 5, 200, -5,       -1.25,    0, 200,  8.75,     1.25, 61, 18);
insert into supply_demand values(56, 56,        0, 5, 200, -5,      -1,       0, 200,   9.00,       1.25, 59, 15);
insert into supply_demand values(57, 57,        0, 5, 200, -5,       -.75,     0, 200,  9.25,      1.25, 57, 11);
insert into supply_demand values(58, 58,        0, 5, 200, -5,       -2.5,     0, 200,  9.50,      1.25, 54, 7);
insert into supply_demand values(59, 59,        0, 5, 200, -5,       -2.5,     0, 200,  9.75,      1.25, 51, 4);




insert into supply_demand values(60, 60, -20, 6, 200, -5, 0, 0, 200, 10, 2.50, 50, 0 );
