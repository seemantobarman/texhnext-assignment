import React, { useState, useEffect } from "react";
import axios from "axios";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react";

function AllUsers() {
    const [users, setUsers] = useState([]);

    const fetchAllUsers = () => {
        axios
            .get(`http://localhost:8080/api/user`)
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <div>
            <Table variant="simple">
                <TableCaption>All Users</TableCaption>
                <Thead>
                    <Tr>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Email</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map((item) => {
                        return (
                            <Tr>
                                <Td>{item.firstname}</Td>
                                <Td>{item.lastname}</Td>
                                <Td>{item.email}</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </div>
    );
}

export default AllUsers;
