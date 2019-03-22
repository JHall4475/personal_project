 SELECT date From weight
INNER JOIN userprofile ON weight.id = userprofile.id
WHERE userprofile.id = 2
ORDER BY date DESC LIMIT 5;