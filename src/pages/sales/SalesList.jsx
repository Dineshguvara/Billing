import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Button,
    Spacer,
    Heading,
    Flex, TableCaption
} from '@chakra-ui/react'
import { ArrowBackIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useSelector } from 'react-redux';

function SalesList() {

    const { Sales } = useSelector((state) => state.sale)

    return (
        <>
            <Box bg="white" p={5} mb={5} style={{ borderRadius: "10px" }}>
                <Flex alignItems='center' gap={2}  >
                    <Link to="/">
                        <ArrowBackIcon w={6} h={6} />
                    </Link> &nbsp;
                    <Heading as="h3" size="lg" color="gray.600">
                        Sales
                    </Heading>
                    <Spacer />

                    <Link to={'/create_Sales'}>
                        <Button mr={10} colorScheme='teal'>  Add New  &nbsp; ( + )</Button>
                    </Link>

                </Flex>
            </Box>
            < Box p={5} color="black" bg="white" style={{ borderRadius: "10px" }}>

                <TableContainer mt={8}>
                    <Table variant='simple' >
                        <Thead bg="#f2f2f2">
                            <Tr>
                                <Th> #</Th>
                                <Th> Customer Name  </Th>
                                <Th> Invoice Number </Th>
                                <Th> Amount </Th>
                                <Th> Invoice Date</Th>
                                <Th> Act  </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {Sales &&
                                Sales.map((item, index) => {
                                    return (
                                        <Tr key={index}>
                                            <Td>{index + 1}</Td>
                                            <Td>{item.customer.label}</Td>
                                            <Td>{item.inv_num}</Td>
                                            <Td>{item.inv_date}</Td>
                                            <Td>{item.amount}</Td>
                                            <Td>
                                                <EditIcon /> &nbsp;
                                                <DeleteIcon />
                                            </Td>
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>
                    </Table>

                </TableContainer>

            </Box>
        </>

    )
}

export default SalesList;