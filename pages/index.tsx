import { Button, Grid, Group, Paper, Text, Loader, Box, Center, MantineProvider } from "@mantine/core";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import Cards from "../components/Cards";
import ColorSchemeToggle from "../components/ColorSchemeToggle";
export default function IndexPage() {
  return (
    <>
    
    <ColorSchemeToggle/>
    <Cards/>
    
    </>
  );
}
