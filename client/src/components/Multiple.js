import React, { useState } from "react";
import { Container, Stack, Input, Button } from "@chakra-ui/react";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";

function Multiple() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    const fileTypes = ["CSV"];

    const handelSubmit = () => {
        console.log(file);

        const formData = new FormData();
        formData.append("uploadfile", file);

        axios({
            method: "POST",
            url: "http://localhost:8080/api/user/uploadfile",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    alert("Success, firm added");
                } else {
                    alert("Error occurred");
                }

                setFile(null);
            })
            .catch((e) => {
                console.log(e);

                setFile(null);
            });
    };

    return (
        <div>
            <Container centerContent>
                <Stack spacing={3} marginTop="30px">
                    <FileUploader
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                    />

                    <Button
                        colorScheme="cyan"
                        variant="solid"
                        disabled={file === null ? true : false}
                        onClick={handelSubmit}
                    >
                        Submit
                    </Button>
                </Stack>
            </Container>
        </div>
    );
}

export default Multiple;
