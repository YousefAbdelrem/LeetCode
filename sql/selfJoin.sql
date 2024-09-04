# Write your MySQL query statement below
SELECT e.name AS Employee 
FROM Employee e 
JOIN Employee em 
on  e.managerId = em.id where e.salary > em.salary;