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

function PartiesList() {

    const { parties } = useSelector((state)=> state.party)

    return (
        <> 
            <Box bg="white" p={5} mb={5} style={{ borderRadius: "10px" }}>
                <Flex alignItems='center' gap={2}  >
                    <Link to="/">
                        <ArrowBackIcon w={6} h={6} />
                    </Link> &nbsp;
                    <Heading as="h3" size="lg" color="gray.600">
                        Parties
                    </Heading>
                    <Spacer />
                    <Link to={'/create_parties'}>
                        <Button mr={10} colorScheme='teal'>  Add New  &nbsp; ( + )</Button>
                    </Link>
                </Flex>
            </Box>
            <Box p={5} color="black" bg="white" style={{ borderRadius: "10px" }}>
                <TableContainer mt={8}>
                    <Table variant='simple' >                    
                        <Thead bg="#f2f2f2">
                            <Tr>
                                <Th> #</Th>
                                <Th> Party Name</Th>
                                <Th> Mobile Number </Th>
                                <Th> Party Type  </Th>
                                <Th> Opening Balance </Th>
                                <Th> Act  </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                        { parties &&
                                parties.map((item, index)=>{                                  
                                    return( 
                                        <Tr key={index}>
                                            <Td>{index+1}</Td>                                        
                                            <Td>{item.party_name}</Td>                                           
                                            <Td>{item.mob_num}</Td>
                                            <Td>{item.party_type.label}</Td>                                             
                                            <Td>{item.open_bal}</Td>
                                            <Td>
                                                <EditIcon/> &nbsp;  
                                                <DeleteIcon/>                                           
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

export default PartiesList;