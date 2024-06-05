import Head from "next/head";
import {
  Container,
} from "@/styles/sharedstyles";
import { BackgroundImg, HomeContainer } from "@/styles/homestyles";
export default function Home() {
  return (
    <HomeContainer>
      <BackgroundImg src="https://m.media-amazon.com/images/I/61xnEcip5RL._SX3000_.jpg"
        alt="Amazon Background">
      </BackgroundImg>
      
    </HomeContainer> 
  );
}
