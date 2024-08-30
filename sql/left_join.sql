# Write your MySQL query statement below
select EU.unique_id , E.name from Employees as E LEFT JOIN EmployeeUNI EU ON E.id = EU.id; 