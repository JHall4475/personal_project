SELECT * FROM workout 
WHERE user_id = $1
-- INNER JOIN userprofile ON workout.user_id = userprofile.id
-- WHERE userprofile.id = $1