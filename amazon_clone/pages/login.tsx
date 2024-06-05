import LoginForm from "@/components/LoginForm";
import { LogInContainer } from "@/styles/loginstyles";
import { Container, Main } from "@/styles/sharedstyles";

 export default function Login(){
    return (
        <Container>
            <Main>
                <LogInContainer>
                    <LoginForm/>
                </LogInContainer>
            </Main>
        </Container>
    
    );   
 }