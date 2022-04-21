import { Box, Flex, Input, Button } from "@chakra-ui/react";
import {useRouter} from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import {auth} from "./../lib/mutations";
import NextImage from "next/image";


export const AuthForm: FC<{mode: 'signup' | 'signin'}>= ({mode})=> {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [isLoading, setIsloading]= useState(false);
  const router = useRouter();


  const handleSubmit= async(e)=>{
    e.preventDefault();
    setIsloading(true);

    await auth(mode ,{email, password});
    setIsloading(false);
    router.push("/");
  }


  return(
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex justify="center" align="center" height="80px" borderBottom="white 1px solid">
        <NextImage src="/logo.svg" height={60} width={120}/> 
      </Flex>
      <Flex justify="center" align="center" height="calc(100vw - 100px)" bg="black" color="white">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
        <form onSubmit={handleSubmit}>
          <Input placeholder="email" type="email" onChange= {(e)=>setEmail(e.target.value)}/>
          <Input placeholder="password" type="password" onChange= {(e)=>setPassword(e.target.value)}/>
          <Button type="submit" bg="green.500" isLoading={isLoading}  
          sx={{
          '&:hover': 
            {bg: "green.300"}
          }}>
            {mode}
          </Button>
        </form>
        </Box>  
      </Flex>
    </Box>
  );
}
