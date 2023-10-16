import { Button, Group, Paper, Text, Loader, Box, Center, MantineProvider } from "@mantine/core";

export default function IndexPage() {
  return (
    <>
    
      <Paper>
          <Center>
            <Text>SIMPLE TEXT TAG</Text>
          </Center>
          <Center>
            <Text>SIMPLE TEXT TAG SIMPLE TEXT TAG SIMPLE TEXT TAG SIMPLE TEXT TAG</Text>
          </Center>
          
      </Paper>
      <Center>
        <Button size="xl">Welcome to Mantine!</Button>
        <Button size="xl">Welcome to Mantine!</Button>
        <Loader/>
      </Center>
      
    
    </>
  );
}
