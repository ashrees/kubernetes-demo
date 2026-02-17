set -e

NAME="kubernetes-demo-api"
USERNAME="shreesu"
IMAGE="$USERNAME/$NAME:latest"

echo "Building Docker image ..."
docker build -t $IMAGE .


echo "Pushing Image to Docker Hub ..."
docker push $IMAGE

echo "Applying Kubernetes mainfests ..."
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

echo "Getting Pods ..."
kubectl get pods

echo "Getting Services ..."
kubectl get services

echo "Fetching the main service"
kubectl get services $NAME-service