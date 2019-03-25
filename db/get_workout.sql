SELECT workout.name, workout.description, workout.workout_id, workout.user_id, userprofile.id
FROM workout 
JOIN userprofile 
ON workout.user_id = userprofile.id
WHERE userprofile.id = $1