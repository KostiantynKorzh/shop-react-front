#!groovy

pipeline {
    agent any
    environment {
        registry = "kostiakorzh/demoshop-front-dev"
        registryCredential = 'dockerhub'
        dockerImage = ''
        AWS_ACCESS_KEY     = credentials('aws-access-key')
        AWS_ACCESS_SECRET = credentials('aws-access-secret')
    }
    stages {
        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build registry
                }
            }
        }
        stage('Push to dockerhub') {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push("latest")
                    }
                }
            }
        }
        stage("Deploy to docker") {
            steps {
                sh 'docker rm -f front-dev-container'
                sh 'docker rmi kostiakorzh/demoshop-front-dev'
                sh 'docker run -p 80:3000 -d --name front-dev-container \
                -e REACT_APP_CATALOGUE_URL="https://www.nothing-store.com:8081/" \
                -e REACT_APP_USER_URL="https://www.nothing-store.com:8082/" \
                -e REACT_APP_ADMIN_URL="https://www.nothing-store.com:8000/" \
                -e REACT_APP_ORDER_URL="https://www.nothing-store.com:1313/" \
                -e REACT_APP_AWS_ACCESS_KEY=$AWS_ACCESS_KEY  \
                -e REACT_APP_AWS_ACCESS_SECRET=$AWS_ACCESS_SECRET \
                 kostiakorzh/demoshop-front-dev'
            }
        }
    }
}