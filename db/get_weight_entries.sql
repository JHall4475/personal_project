-- SELECT weight.entry_number, weight.date, weight.weight, userprofile.id
-- FROM weight
-- INNER JOIN userprofile ON weight.id = userprofile.id
-- WHERE userprofile.id = 2

--  ORDER BY date DESC LIMIT 5;

-- SELECT * FROM weight
-- where weight.id =7
--  ORDER BY date DESC LIMIT 5;

SELECT weight.id, weight.date., weight.weight, weight.entry_number
From weight
JOIN userprofile 
ON weight.id = userprofile.id
WHERE userprofile.id = $1
ORDER BY date DESC LIMIT 5
