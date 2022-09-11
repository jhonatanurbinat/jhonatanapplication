#!/bin/bash

curl -X POST \
-H "X-JWT-KWY: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJub21icmUiOiJKaG9uYXRhbiIsImVtYWlsIjoiamhvbmF0YW51cmJpbmF0QGVtYWlsLmNvbSJ9LCJpYXQiOjE2NjI4NTMwODAsImV4cCI6MTY2NDU4MTA4MH0.moIg72Pm96ys9juF6aGUTrSxzvbyXJwl1hpM1A7YZGA" \
-H "Content-Type: application/json" \
-d '{"message" : "This is a test","to": "Jhonatan U","from": "Rita Asturia","timeToLifeSec" : 45}' \
http://localhost:3000/Devops


