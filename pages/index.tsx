import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GradientLayout from "../components/gradientLayout";

export default function Home() {
  return (
  <GradientLayout color="green" roundImage= {true} subtitile="profile" title="Halladj Hamza" description="15 public playlists" image="/profile.png">
    <div>Home Page</div>
  </GradientLayout>
  );
}
