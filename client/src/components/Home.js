import {
    Container,
    Button,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();

    return (
        <div>
            <Container maxW="container.sm">
                <InputGroup size="lg" marginTop="100px">
                    <Input pr="4.5rem" type="text" placeholder="Search User" />
                    <InputRightElement width="5rem">
                        <Button h="1.75rem" size="sm">
                            Search
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "center",
                        justifyItems: "center",
                        padding: "10px",
                        marginTop: "50px",
                    }}
                >
                    <div style={{ margin: "20px" }}>
                        <Button
                            colorScheme="blue"
                            size="lg"
                            onClick={() => history.push("/add-single-user")}
                        >
                            Add Single User
                        </Button>
                    </div>

                    <div style={{ margin: "20px" }}>
                        <Button
                            colorScheme="blue"
                            size="lg"
                            onClick={() => history.push("/add-multiple-users")}
                        >
                            Add Multiple Users
                        </Button>
                    </div>

                    <div style={{ margin: "20px" }}>
                        <Button
                            colorScheme="blue"
                            size="lg"
                            onClick={() => history.push("/view-user")}
                        >
                            View All Users
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;
