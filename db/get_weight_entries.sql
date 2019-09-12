SELECT weight.id, weight.date, weight.weight, weight.entry_number, weight.time_stamp
From weight
JOIN userprofile 
ON weight.id = userprofile.id
WHERE userprofile.id = $1
ORDER BY date DESC LIMIT 14
