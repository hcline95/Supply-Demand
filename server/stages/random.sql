
 

/* Create the schema for our tables */
create table random(id int, stage decimal, demand1x int, demand1y int , demand2x int, demand2y int , supply1x int, supply1y int, supply2x int, supply2y int, price float(8,2), quantity int, equal int, description text);

/* Populate the tables with our data */
insert into random values(1, 1,          -10, 30, 20, -30,       -13, 0, 55, 16,       4.01, 3, 0, '' );

insert into random values(2, 1,          -2, 17, 20, -5,       -18, 0, 98, 36,       8.25, 7, 0, '' );

insert into random values(3, 2,          -2, 19, 17.5, -20,       -18, 0, 98, 36,       3.85, 7, 0, '' );

insert into random values(4, 3,          -30, 16, 50, 0,       0, -42, 30, 108,       8.03, 10, 0, '' );

insert into random values(5, 4,          -2, 17, 20, -5,       -18, 0, 98, 36,       8.25, 7, 0, '' );

insert into random values(6, 5,          -10, 30, 20, -30,       -13, 0, 55, 16,       4.01, 3, 0, '' );

insert into random values(7, 6,          -1, 16, 20, -5,       -3, 1, 30, 10,       3.76, 11, 0, '' );

insert into random values(8, 7,          -12, 18, 42, 0,       -6, -14, 50, 42,       8.52, 16, 0, '' );

insert into random values(9, 8,          -2, 19, 17.5, -20,       -18, 0, 98, 36,       3.85, 7, 0, '' );

insert into random values(10, 9,          -1, 11, 12, -2,       2, -2, 12, 28,       4.50, 6, 0, '' );

insert into random values(11, 10,          -12, 18, 42, 0,       -12, -10, 68, 30,       6.83, 21, 0, '' );

insert into random values(12, 11,          -12, 116, 40, -40,       -12, -10, 68, 30,       7.95, 24, 0, '' );

insert into random values(13, 12,          -1, 42, 40, -40,       -12, -10, 68, 30,       4.82, 18, 0, '' );

insert into random values(14, 13,          -12, 18, 42, 0,       -6, -14, 50, 42,       8.52, 16, 0, '' );

insert into random values(15, 14,          -10, 30, 20, -30,       -13, 0, 55, 16,       4.01, 3, 0, '' );

insert into random values(16, 15,          -12, 18, 42, 0,       -12, -10, 68, 30,       6.83, 21, 0, '' );

insert into random values(17, 16,          -1, 42, 40, -40,       -12, -10, 68, 30,       4.82, 18, 0, '' );