/* Delete the tables if they already exist */
/*drop table supply_demand

/* Create the schema for our tables */
create table suppliers(id int, company_id int, stage int, brand text, quanity_produced int);

/* Populate the tables with our data */

/*stage 1 */
insert into suppliers values(1, 1, 10, 'Purrell®', 20);
insert into suppliers values(2, 2, 10, 'Germ-X®', 15);
insert into suppliers values(3, 3, 10, 'Wet Ones®', 7.5);
insert into suppliers values(4, 4, 10, "Nice 'N Clean ®", 2.5 );
insert into suppliers values(5, 5, 10, 'Other', 5 );

/*stage 2 - suppliers sont have time to increase production */
insert into suppliers values(6, 1, 20, 'Purrell®', 20);
insert into suppliers values(7, 2, 20, 'Germ-X®', 15);
insert into suppliers values(8, 3, 20, 'Wet Ones®', 7.5);
insert into suppliers values(9, 4, 20, "Nice 'N Clean ®", 2.5 );
insert into suppliers values(10, 5, 20, 'Other', 5 );


/*stage 3 - suppliers increase 50% to meet demand and new companies jump in*/
insert into suppliers values(11, 1, 30, 'Purrell®', 30);
insert into suppliers values(12, 2, 30, 'Germ-X®', 22.5);
insert into suppliers values(13, 3, 30, 'Wet Ones®',11.25);
insert into suppliers values(14, 4, 30, "Nice 'N Clean ®", 3.75 );
insert into suppliers values(15, 5, 30, 'Other', 7.5 );
insert into suppliers values(16, 6, 30, 'Local Distillery', 0 );

/*stage 4 - suppliers increase another 25% to meet demand and new companies jump in*/
insert into suppliers values(17, 1, 40, 'Purrell®', 37.5);
insert into suppliers values(18, 2, 40, 'Germ-X®', 28.125);
insert into suppliers values(19, 3, 40, 'Wet Ones®',14.0625);
insert into suppliers values(20, 4, 40, "Nice 'N Clean ®", 4.6875 );
insert into suppliers values(21, 5, 40, 'Other', 9.375 );
insert into suppliers values(22, 6, 40, 'Local Distillery', 16.25 );

/*stage 5 - suppliers increase another 25% to meet demand and new companies jump in*/
insert into suppliers values(23, 1, 50, 'Purrell®', 37.5);
insert into suppliers values(24, 2, 50, 'Germ-X®', 28.125);
insert into suppliers values(25, 3, 50, 'Wet Ones®',14.0625);
insert into suppliers values(26, 4, 50, "Nice 'N Clean ®", 4.6875 );
insert into suppliers values(27, 5, 50, 'Other', 9.375 );
insert into suppliers values(28, 6, 50, 'Local Distillery', 16.25 );

/*stage 6 - suppliers decrease to stage 1*/
insert into suppliers values(29, 1, 60, 'Purrell®', 20);
insert into suppliers values(30, 2, 60, 'Germ-X®', 15);
insert into suppliers values(31, 3, 60, 'Wet Ones®', 7.5);
insert into suppliers values(32, 4, 60, "Nice 'N Clean ®", 2.5 );
insert into suppliers values(33, 5, 60, 'Other', 5 );
insert into suppliers values(34, 6, 60, 'Local Distillery', 0 );
