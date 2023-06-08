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

function ItemsList() {

    const { Items } = useSelector((state)=> state.item)

    return (
        <> 
            <Box bg="white" p={5} mb={5} style={{ borderRadius: "10px" }}>
                <Flex alignItems='center' gap={2}  >
                    <Link to="/">
                        <ArrowBackIcon w={6} h={6} />
                    </Link> &nbsp;
                    <Heading as="h3" size="lg" color="gray.600">
                       Items
                    </Heading>
                    <Spacer />
                    <Link to={'/create_items'}>
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
                                <Th> Item Name</Th>
                                <Th> Item Categories </Th>
                                <Th> Item Code  </Th>
                                <Th> Purchase Price </Th>
                                <Th> Sales Price </Th>
                                <Th> Act  </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                        { Items &&
                                Items.map((item, index)=>{                                  
                                    return( 
                                        <Tr key={index}>
                                            <Td>{index+1}</Td>                                        
                                            <Td>{item.item_name}</Td>                                           
                                            <Td>{item.category.label}</Td>
                                            <Td>{item.item_code}</Td>                                             
                                            <Td>{item.pur_price}</Td>
                                            <Td>{item.sale_price}</Td>
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

export default ItemsList;