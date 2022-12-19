import { Box, GridItem } from "@chakra-ui/react"
import { 
    Radio,
    RadioGroup,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Text,
    AccordionIcon,Stack,Breadcrumb,BreadcrumbItem,BreadcrumbLink
 } from '@chakra-ui/react'
import {ChevronRightIcon } from "@chakra-ui/icons"
import React from "react"
import style from "./Furniture.module.css"
import { GridStructure } from "../Components/GridStructure"
import file from "../db.json"
import { Minibar } from "../Components/Minibar"
let data=file.fitness

export const Fitness=()=>{
    console.log(file)
    const [value, setValue] = React.useState('')
    return (
        <Box>
            <Box p={"10px"} bg="#e2eaf5" mb="10px" display={"flex"} justifyContent={"space-between"}>
            <Linkage A2={"Fitness"} A3={value.charAt(0).toUpperCase() + value.slice(1)}/>
            <Minibar></Minibar>
            </Box>
        <Box display={"flex"} w={"90%"} margin="auto">
            <Box  >          
            <Accordion className={style.filter}  defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        Product Type
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <RadioGroup onChange={setValue} value={value} >
                <Stack >
                    <Radio size="sm" value='treadmills'><Text textAlign={"left"} fontSize="11px">Treadmills</Text></Radio>
                    <Radio size="sm" value='crossTrainer'><Text textAlign={"left"} fontSize="11px">Cross Trainers</Text></Radio>
                    <Radio size="sm" value='bikes'><Text textAlign={"left"} fontSize="11px">Exercise Bikes </Text></Radio>
                    <Radio size="sm" value='massager'><Text textAlign={"left"} fontSize="11px">Massagers</Text></Radio>
                </Stack>
                </RadioGroup>
                </AccordionPanel>
            </AccordionItem>
            </Accordion>
            </Box>
            <Box>
                <GridStructure value={value} data={data} value2={"fitness"} />
            </Box>
        </Box>
        </Box>
    )
}

const Linkage=({A2,A3})=>{
    return  <Breadcrumb spacing='8px' fontSize={"xs"}  separator={<ChevronRightIcon color='gray.500' />}>
    <BreadcrumbItem>
      <BreadcrumbLink fontSize={"xs"} href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
  
    <BreadcrumbItem>
      <BreadcrumbLink fontSize={"xs"} href='/fitness'>{A2}</BreadcrumbLink>
    </BreadcrumbItem>
  
    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink fontSize={"xs"} href='#'>{A3}</BreadcrumbLink>
    </BreadcrumbItem>
      </Breadcrumb>
  }


