/* Delete the tables if they already exist */
/*drop table supply_demand

/* Create the schema for our tables */
create table supply_demand(id int, stage decimal, demand1x int, demand1y int , demand2x int, demand2y int , supply1x int, supply1y int, supply2x int, supply2y int, price float(8,2), quanity int, equal int);

/* Populate the tables with our data */
insert into supply_demand values(1, 10, 0, 5, 200, -5, 0, 0, 100, 5, 2.50, 50, 0 );

insert into supply_demand values(2, 11, 0, 7, 200, -4.1, 0, 0, 100, 5, 3.00, 50, 0 );
insert into supply_demand values(3, 12, 0, 9, 200, -3.5, 0, 0, 100, 5, 4.50, 50, -5);
insert into supply_demand values(4, 13, 0, 11, 200, -3.3, 0, 0, 100, 5, 6.00, 50, -9);
insert into supply_demand values(5, 14, 0, 13, 200, -3.6, 0, 0, 100, 5, 7.50, 50, -14);
insert into supply_demand values(6, 15, 0, 15, 200, -5, 0, 0, 100, 5, 8.25, 50, -20 );
insert into supply_demand values(7, 16, 0, 17, 200, -8, 0, 0, 100, 5, 9.75, 50, -26);
insert into supply_demand values(8, 17, 0, 19, 200, -9.6, 0, 0, 100, 5, 11.00, 50, -31);
insert into supply_demand values(9, 18, 0, 21, 200, -12.3, 0, 0, 100, 5, 12.25, 50, -39 );
insert into supply_demand values(10, 19, 0, 23, 200, -17, 0, 0, 100, 5, 13.75, 50, -45 );




insert into supply_demand values(12, 20, 0, 25, 125, 0, 0, 0, 140, 7, 15.00, 50, -50 );
insert into supply_demand values(13, 30, 0, 25, 125, 0, 0, 0, 140, 7, 10.00, 75, -25 );
insert into supply_demand values(14, 40, 0, 25, 125, 0, 50, 0, 170, 6, 3.00, 110, 0 );
insert into supply_demand values(15, 50, 0, 5, 120, -1, 0, -2.5, 120, 3.5, 1.25, 75, 35);
insert into supply_demand values(16, 60, 0, 5, 100, 0, 0, 0, 100, 5, 2.50, 50, 0 );
