import React, { useState } from "react";
import { Container, Stack, Input, Button } from "@chakra-ui/react";
import axios from "axios";

function Single() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handelSubmit = () => {
        axios
            .post(`http://localhost:8080/api/user`, {
                firstname,
                lastname,
                email,
            })
            .then(function (response) {
                console.log(response);
                alert("Success");

                setFirstName("");
                setLastName("");
                setEmail("");
            })
            .catch(function (error) {
                console.log(error);

                setFirstName("");
                setLastName("");
                setEmail("");

                alert("Error");
            });
    };

    return (
        <div>
            <Container centerContent>
                <Stack spacing={3} marginTop="30px">
                    <Input
                        variant="filled"
                        placeholder="First Name"
                        size="lg"
                        onChange={handleFirstName}
                        value={firstname}
                    />
                    <Input
                        variant="filled"
                        placeholder="Last Name"
                        size="lg"
                        onChange={handleLastName}
                        value={lastname}
                    />
                    <Input
                        variant="filled"
                        placeholder="Email"
                        size="lg"
                        onChange={handleEmail}
                        value={email}
                    />

                    <Button
                        colorScheme="cyan"
                        variant="solid"
                        disabled={
                            firstname === "" || lastname === "" || email === ""
                                ? true
                                : false
                        }
                        onClick={handelSubmit}
                    >
                        Submit
                    </Button>
                </Stack>
            </Container>
        </div>
    );
}

export default Single;
