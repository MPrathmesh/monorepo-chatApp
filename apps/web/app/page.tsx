"use client";
import {TextInput} from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      justifyItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <TextInput size="small" placeholder="Enter your name"/>
        <br />
        <button onClick={() => {
          router.push("/chat/123")
        }}>Join chat</button>
      </div>
    </div>
  );
}
