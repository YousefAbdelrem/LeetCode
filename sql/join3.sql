#UPDATE DEC 1ST : we take the t.amount as null
SELECT  v.customer_id , count(v.visit_id) as  count_no_trans
from Visits v  
LEFT JOIN Transactions t 
ON v.visit_id = t.visit_id
WHERE transaction_id IS NULL
GROUP BY customer_id;