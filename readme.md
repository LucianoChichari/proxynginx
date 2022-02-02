cd node

npm i

pm2 start index.js --name="forkServer" --watch 8080

pm2 start index.js --name="clusterServer" --watch -i max -- 8081

pm2 start index.js --name="fork8082" --watch 8081

pm2 start index.js --name="fork8082" --watch 8082
pm2 start index.js --name="fork8083" --watch 8083
pm2 start index.js --name="fork8084" --watch 8084
pm2 start index.js --name="fork8085" --watch 8085
