curl "http://localhost:3000/profile"
curl -H "Content-Type: application/json" -X POST -d '{"first-name": "Wonjae","last-name": "Hwang"'
sleep1
curl -H 'Content-Type: application/json' -X -d '{"first-name": "Black", "last-name": "Horse"}'
sleep 1
curl "http://localhost:3000/profile"
sleep 1
curl -X DELETE "http://localhost:3000/profile"