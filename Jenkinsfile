#!groovy

pipeline {
    agent any
    environment {
        registry = "kostiakorzh/demoshop-front-dev"
        registryCredential = 'dockerhub'
        dockerImage = ''
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
                -e REACT_APP_CATALOGUE_URL="http://localhost:8081/" \
                -e REACT_APP_USER_URL="http://localhost:8082/" \
                -e REACT_APP_FEEDBACK_URL="http://localhost:2344/" \
                -e REACT_APP_ADMIN_URL="http://demoshop-dev-lb-648034961.eu-central-1.elb.amazonaws.com:8000/" \
                -e REACT_APP_ORDER_URL="http://localhost:1313/" \
                 kostiakorzh/demoshop-front-dev'
            }
        }
    }
}