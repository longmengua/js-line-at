#!/bin/bash

# Function to display an error message and exit
function display_error {
    echo "Error: $1"
    exit 1
}

# Function to perform steps common to both scripts
function common_steps {
    # Step 1
    echo "===> Start pull code from $1 branch"
    git fetch
    git checkout $1
    git pull

    # Step 2
    echo "===> Check version"
    json_file="./package.json"
    if [ ! -f "$json_file" ]; then
        display_error "File not found: $json_file"
    fi

    version=$(grep '"version":' "$json_file" | sed -E 's/.*"version": *"([^"]+).*/\1/')
    echo -e "\nVersion: $version\n"
}

# Function to perform deployment steps
function deploy_steps {
    if [ $1 == "dev" ]; then
        NAME=line-at
        PORT=80
    # elif [ $1 == "uat" ]; then
    #     NAME=line-at
    #     PORT=81
    # elif [ $1 == "prod" ]; then
    #     NAME=line-at
    #     PORT=82
    else
        display_error "Unsupported environment: $1, options: dev"
    fi

    # Step 3
    echo "===> Start building"
    docker build --build-arg ENV_FILE_NAME=".env.$1" --build-arg APP_ENV="$1" -t $NAME .

    # Step 4
    echo "===> Start deploying"
    docker rm -f $NAME && docker run -d -p $PORT:3000 --name $NAME $NAME

    # Step 5
    echo "===> Clean cache of container and volume"
    if [ $1 == "prod" ]; then
        docker volume prune -f
        docker container prune -f
    else
        docker system prune -af
    fi
}

# Check the number of arguments
if [ $# -ne 1 ]; then
    display_error "Usage: $0 <branch> => dev"
fi

# Assign argument to a variable
branch=$1

# Perform common steps
common_steps $branch

# Perform environment-specific steps
deploy_steps $branch