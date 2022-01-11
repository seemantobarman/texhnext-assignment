import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
    <ChakraProvider>
        <Routes />
    </ChakraProvider>,
    document.getElementById("root")
);
