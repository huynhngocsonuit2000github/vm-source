# build be
docker build -t todo-app .

# run be container
docker run -d --name dotnet-api -p 5000:5000 todo-app