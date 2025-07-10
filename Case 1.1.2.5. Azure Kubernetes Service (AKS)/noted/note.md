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
ng serve --serve-path /web
