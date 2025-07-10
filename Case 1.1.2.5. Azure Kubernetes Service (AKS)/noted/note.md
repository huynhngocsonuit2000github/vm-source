# build be
docker build -t todo-app .

# run be container
docker run -d --name dotnet-api -p 5000:5000 todo-app

# nginx
sudo vi /etc/nginx/sites-available/default
sudo systemctl reload nginx

# dotnet fix
export DOTNET_ROOT=$HOME/.dotnet
export PATH=$PATH:$DOTNET_ROOT:$DOTNET_ROOT/tools

which dotnet
dotnet --version

# kill angular
sudo lsof -i :4200
ng serve --port=4202 --serve-path /development/web/
# fe
<!-- docker build -t angular-todo-app . -->
docker build --build-arg CONFIG=production -t angular-todo-app .
docker run -d -p 4200:80 --name angular-todo angular-todo-app

# docker compose
 docker compose up -d
 docker compose down