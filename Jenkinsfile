pipeline {
    agent any

    stages {
        stage('Build') {
        	steps {
                echo 'Building..'
            }
        }
	    stage('CompileandRunSonarAnalysis') {
        	steps {	
		        sh 'mvn clean verify sonar:sonar -Dsonar.projectKey=livros -Dsonar.organization=node-jenkins -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=33656454069be0a01a34d376027712f76969fb84'
			}
        } 
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}