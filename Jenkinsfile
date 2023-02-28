pipeline {
    agent any
		
    tools {nodejs "node"}

    stages {

	    // stage('CompileandRunSonarAnalysis') {
        // 	steps {	
		//         sh 'npm install sonar:sonar -Dsonar.projectKey=livros -Dsonar.organization=node-jenkins -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=33656454069be0a01a34d376027712f76969fb84'
		// 	}
        // } 

        stage('Build') { 
            steps { 
                withDockerRegistry([credentialsId: "dockerlogin", url: ""]) {
                    script {
                        app = docker.build("asg")
                    }
                }
            }
        }

        stage('Push') {
            steps {
                script {
                    docker.withRegistry('https://204014142778.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:aws-credentials') {
                    app.push("latest")
                    }
                }
            }
        }
    }
}
