/* Delete the tables if they already exist */
/*drop table supply_demand

/* Create the schema for our tables */
create table supply_demand(id int, stage int, demand1x int, demand1y int , demand2x int, demand2y int , supply1x int, supply1y int, supply2x int, supply2y int, price float(8,2), quanity int, equal int);

/* Populate the tables with our data */
insert into supply_demand values(1, 1, 0, 5, 100, 0, 0, 0, 100, 5, 2.50, 50, 0 );
insert into supply_demand values(2, 2, 0, 25, 100, 5, 0, 0, 100, 5, 15.00, 50, -50 );
insert into supply_demand values(3, 3, 0, 25, 100, 5, 0, -2.5, 100, 2.5, 3.00, 110, 0 );
insert into supply_demand values(4, 4, 0, 5, 100, 0, 0, -2.5, 100, 2.5, 1.25, 75, 35);
insert into supply_demand values(5, 5, 0, 5, 100, 0, 0, 0, 100, 5, 2.50, 50, 0 );
