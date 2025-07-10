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

# minikube
sed -i 's|/root/.minikube|/home/'"$USER"'/.minikube|g' ~/.kube/config

mkdir -p /home/useradmin/.minikube
sudo cp -r /root/.minikube/ca.crt /home/useradmin/.minikube/
sudo cp -r /root/.minikube/profiles /home/useradmin/.minikube/
sudo chown -R useradmin:useradmin /home/useradmin/.minikube

# get minikube ip
minikube ip
curl http://10.0.0.4:30036

# k8s command

kubectl exec -it hello-nginx -- /bin/bash
- echo directly
    echo "Hello from inside the pod!" > /usr/share/nginx/html/index.html
- copy from localhost
    kubectl cp ./index.html hello-nginx:/usr/share/nginx/html/index.html

