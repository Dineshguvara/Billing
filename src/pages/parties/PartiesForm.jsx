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
import { setParties } from "../../features/parties";

const partyType = [
    {
        value: "party1",
        label: "party1",
    },
    {
        value: "party2",
        label: "party2",
    },
    {
        value: "party13",
        label: "party13",
    }
]
const state = [
    {
        value: "TamilNadu",
        label: "TN",
    },
    {
        value: "Kerala",
        label: "KL",
    },
    {
        value: "Karnataka",
        label: "KL",
    }
]


function PartiesForm() {

    const navi = useNavigate();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        console.log(data);
        dispatch(setParties(data));
        navi("/parties")
    }

    return (
        <>
            <Box bg="white" p={5} mb={5} style={{ borderRadius: "10px" }}>
                <Flex alignItems='center' gap={2}  >
                    <Link to="/parties">
                        <ArrowBackIcon w={6} h={6} />
                    </Link> &nbsp;
                    <Heading as="h3" size="lg"  >
                        create Parties
                    </Heading>
                </Flex>
            </Box>

            <Box p={4} color="black" bg="white" style={{ borderRadius: "10px" }}>
                <Card>
                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='5'>
                            <Box m={5}>
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
                                            <FormControl isInvalid={errors.mob_num}>
                                                <FormLabel   > Mobile Number </FormLabel>
                                                <Input
                                                    type="number"
                                                    placeholder="Enter Mobile Number"
                                                    {...register("mob_num", {
                                                        required: "Mobile Number is required",
                                                    })}
                                                />
                                                <FormErrorMessage>
                                                    {errors.mob_num && errors.mob_num.message}
                                                </FormErrorMessage>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem >
                                            <FormControl isInvalid={errors.email}>
                                                <FormLabel   > Email </FormLabel>
                                                <Input
                                                    type="email"
                                                    placeholder="Enter Email"
                                                    {...register("email", {
                                                        required: "Email is required",
                                                    })}
                                                />
                                                <FormErrorMessage>
                                                    {errors.email && errors.email.message}
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
                                </Stack>
                            </Box>
                            <Box m={5}>
                                <Stack spacing={10}>
                                    <Grid templateColumns='repeat(3, 1fr)' gap={5}>
                                        <GridItem >
                                            <Controller
                                                control={control}
                                                name="party_type"
                                                rules={{
                                                    required: "Party Type is required  ",
                                                }}
                                                render={({
                                                    field: { onChange, onBlur, value, name, ref },
                                                    fieldState: { error },
                                                }) => (
                                                    <FormControl isInvalid={!!error}>
                                                        <FormLabel   > Party Type  </FormLabel>
                                                        <Select
                                                            name={name}
                                                            ref={ref}
                                                            onChange={(e) => {
                                                                onChange(e);
                                                            }}
                                                            onBlur={onBlur}
                                                            value={value}
                                                            options={partyType}
                                                            getOptionLabel={(e) => e.label}
                                                            getOptionValue={(e) => e.value}
                                                            placeholder="Select Party Type "
                                                            closeMenuOnSelect={true}
                                                        />
                                                        <FormErrorMessage>
                                                            {error && error.message}
                                                        </FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            />
                                        </GridItem>
                                        <GridItem >
                                            <FormControl isInvalid={errors.gstin}>
                                                <FormLabel   > GSTIN </FormLabel>
                                                <Input
                                                    type="number"
                                                    placeholder="Enter GSTIN"
                                                    {...register("gstin", {
                                                        required: "GSTIN is required",
                                                    })}
                                                />
                                                <FormErrorMessage>
                                                    {errors.gstin && errors.gstin.message}
                                                </FormErrorMessage>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem >
                                            <Controller
                                                control={control}
                                                name="state"
                                                rules={{
                                                    required: "Please Select State.",
                                                }}
                                                render={({
                                                    field: { onChange, onBlur, value, name, ref },
                                                    fieldState: { error },
                                                }) => (
                                                    <FormControl isInvalid={!!error}>
                                                        <FormLabel   > Select State </FormLabel>
                                                        <Select
                                                            name={name}
                                                            ref={ref}
                                                            onChange={(e) => {
                                                                onChange(e);
                                                            }}
                                                            onBlur={onBlur}
                                                            value={value}
                                                            options={state}
                                                            getOptionLabel={(e) => e.label}
                                                            getOptionValue={(e) => e.value}
                                                            placeholder="Select State"
                                                            closeMenuOnSelect={true}
                                                        />
                                                        <FormErrorMessage>
                                                            {error && error.message}
                                                        </FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            />
                                        </GridItem>
                                    </Grid>
                                    <Grid templateColumns='repeat(2, 1fr)' gap={5}>
                                        <GridItem >
                                            <FormControl isInvalid={errors.billing_address}>
                                                <FormLabel >  Billing  Address </FormLabel>
                                                <Textarea
                                                    type="text"
                                                    placeholder="Enter  Billing  Address"
                                                    {...register("billing_address", {
                                                        required: " Billing  Address is required",
                                                    })}
                                                />
                                                <FormErrorMessage>
                                                    {errors.billing_address && errors.billing_address.message}
                                                </FormErrorMessage>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem >
                                            <FormControl isInvalid={errors.shipping_address}>
                                                <FormLabel   > Shipping Address </FormLabel>
                                                <Textarea
                                                    type="text"
                                                    placeholder="Enter Shipping Address"
                                                    {...register("shipping_address", {
                                                        required: "Shipping Address is required",
                                                    })}
                                                />
                                                <FormErrorMessage>
                                                    {errors.shipping_address && errors.shipping_address.message}
                                                </FormErrorMessage>
                                            </FormControl>
                                        </GridItem>
                                    </Grid>
                                </Stack>
                            </Box>
                            <Box m={5}>
                                <Stack spacing={10}>
                                    <Grid templateColumns='repeat(2, 1fr)' gap={5}>
                                        <GridItem >
                                            <FormControl isInvalid={errors.credit_period}>
                                                <FormLabel >  Credit Period </FormLabel>
                                                <InputGroup>
                                                    <Input
                                                        type="text"
                                                        placeholder="Enter Credit Period"
                                                        {...register("credit_period", {
                                                            required: " Credit Period is required",
                                                        })}
                                                    />
                                                    <InputRightAddon children='Days' />
                                                </InputGroup>
                                                <FormErrorMessage>
                                                    {errors.credit_period && errors.credit_period.message}
                                                </FormErrorMessage>

                                            </FormControl>
                                        </GridItem>
                                        <GridItem >
                                            <FormControl isInvalid={errors.credit_limit}>
                                                <FormLabel   > credit Limit </FormLabel>
                                                <InputGroup>
                                                    <InputLeftAddon children='@' />
                                                    <Input
                                                        type="text"
                                                        placeholder="Enter credit Limit"
                                                        {...register("credit_limit", {
                                                            required: "credit Limit is required",
                                                        })}
                                                    />
                                                </InputGroup>
                                                <FormErrorMessage>
                                                    {errors.credit_limit && errors.credit_limit.message}
                                                </FormErrorMessage>
                                            </FormControl>
                                        </GridItem>
                                    </Grid>
                                </Stack>
                            </Box>
                        </Stack>
                        <Button type="submit" size="md" float="right" mt={5}
                            colorScheme="teal" onClick={handleSubmit(onSubmit)}> SUBMIT </Button>
                    </CardBody>
                </Card>
            </Box>
        </>
    );
}

export default PartiesForm;