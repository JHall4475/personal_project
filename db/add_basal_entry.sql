UPDATE userprofile
SET bmr = $2, age = $3, height = $4, gender = $5, current_weight = $6
WHERE id = $1;