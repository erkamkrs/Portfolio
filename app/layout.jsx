"use client"
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function RootLayout(props) {
  const { children } = props;
  return (
    <html>
      <head>
      <link rel="icon" href="@/public/favicon.ico" sizes="any" />
      </head>
      <body>
        <ChakraProvider>
            <Grid
              templateAreas={`
                "header" 
                "main"
                "footer"`}
              minHeight="100vh"
              templateRows="auto 1fr auto"
            >
        
              <GridItem area={"header"}>
                <Navbar />
              </GridItem>

              <GridItem area={"main"} py={4} >
                <Container w="full" maxW={{base: 'sm', md: 'container.md', lg: 'container.xl'}}>
                  {children}
                </Container>
              </GridItem>

              <GridItem area={"footer"}>
                <Footer />
              </GridItem>
            </Grid>
        </ChakraProvider>
     </body>
    </html>
  );
}