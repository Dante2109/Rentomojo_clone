import { Box, GridItem } from "@chakra-ui/react"
import { 
    Radio,
    RadioGroup,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Text,
    AccordionIcon,Stack
 } from '@chakra-ui/react'
import React from "react"
import style from "./Furniture.module.css"
import { GridStructure } from "../Components/GridStructure"
export const Furniture=()=>{
    const [value, setValue] = React.useState('')
    return (
        <Box display={"flex"} w={"90%"} margin="auto">
            <Box  >          
            <Accordion className={style.filter}  defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        Filter by Rooms
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <RadioGroup onChange={setValue} value={value} >
                <Stack >
                    <Radio size="sm" value='bedroom'><Text textAlign={"left"} fontSize="11px">Bedroom</Text></Radio>
                    <Radio size="sm" value='living'><Text textAlign={"left"} fontSize="11px">Living</Text></Radio>
                    <Radio size="sm" value='baby'><Text textAlign={"left"} fontSize="11px">Baby Furniture</Text></Radio>
                    <Radio size="sm" value='dining'><Text textAlign={"left"} fontSize="11px">Kitchen & Dining</Text></Radio>
                    <Radio size="sm" value='wfh'><Text textAlign={"left"} fontSize="11px">Work from Home (WFH)</Text></Radio>
                </Stack>
                </RadioGroup>
                </AccordionPanel>
            </AccordionItem>
            </Accordion>
            </Box>
            <Box>
                <GridStructure value={value}/>
            </Box>
        </Box>
        
    )
}