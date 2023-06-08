import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import {
    Box,
    Input,
    Stack,
    FormControl,
    FormLabel,
    Button,
    FormErrorMessage,
    Flex,
    Heading,
    Checkbox,
    RadioGroup, InputLeftAddon,
    Radio, Grid, GridItem, InputGroup, InputRightAddon,
    Card, CardHeader, CardBody, CardFooter,
    Spacer, Text, StackDivider, Textarea, PinInput
} from "@chakra-ui/react";
import { ArrowBackIcon, AddIcon } from "@chakra-ui/icons";
import { Select } from "chakra-react-select";
import { useSelector, useDispatch } from "react-redux"; 
import { setItems } from "../features/practice";

function PracticeForm() {

    const navi = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
        console.log(data);
        dispatch(setItems(data));
         navi('/pc')
    }

    return (
        <>
            <Box bg="white" p={5} mb={5} style={{ borderRadius: "10px" }}>
                <Flex alignItems='center' gap={2}  >
                    <Link to="/parties">
                        <ArrowBackIcon w={6} h={6} />
                    </Link> &nbsp;
                    <Heading as="h3" size="lg"  >
                         Practice
                    </Heading>
                </Flex>
            </Box>

            
              
                            <Box m={5} bg="white"  p={5}>
                                <Stack spacing={10}>
                                    <Grid templateColumns='repeat(3, 1fr)' gap={5}>
                                        <GridItem >
                                            <FormControl isInvalid={errors.party_name}>
                                                <FormLabel   > Party Name </FormLabel>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter Party Name"
                                                    {...register("party_name", {
                                                        required: "Party Name is required",
                                                    })}
                                                />
                                                <FormErrorMessage>
                                                    {errors.party_name && errors.party_name.message}
                                                </FormErrorMessage>
                                            </FormControl>
                                        </GridItem>
                                       
                                    
                                        <GridItem >
                                            <FormControl isInvalid={errors.open_bal}>
                                                <FormLabel   > Openig Balance </FormLabel>
                                                <Input
                                                    type="number"
                                                    placeholder="Enter Openig Balance"
                                                    {...register("open_bal", {
                                                        required: "Openig Balance is required",
                                                    })}
                                                />
                                                <FormErrorMessage>
                                                    {errors.open_bal && errors.open_bal.message}
                                                </FormErrorMessage>
                                            </FormControl>
                                        </GridItem>
                                    </Grid>
                                    <Button type="submit" size="md" float="right" mt={5}
                            colorScheme="teal" onClick={handleSubmit(onSubmit)}> SUBMIT </Button>
                                </Stack>
                            </Box>
                             
                      
                     
                  
        </>
    );
}

export default PracticeForm;