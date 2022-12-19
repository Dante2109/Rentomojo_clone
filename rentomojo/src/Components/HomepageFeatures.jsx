
import { Box, SimpleGrid, Text, Stack, Image } from '@chakra-ui/react';
import Starbed from "../Photos/Icons/Starbed.png"
import Setting from "../Photos/Icons/Setting.png"
import Location from "../Photos/Icons/Location.png"
import Maintainence from "../Photos/Icons/Maintainence.png"
import Chair from "../Photos/Icons/Chair.png"
import ArrBed from "../Photos/Icons/ArrowBed.png"

const Feature = ({ title, text,icon}) => {
  return (
    <Stack>
      <Image boxSize='50px' src={icon}></Image>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box  p={4} textAlign={"left"} fontSize="sm" maxW={"80%"} margin="auto" my={"100px"}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature 
          icon={Starbed}
          title={'Finest-quality products'}
          text={
            `Quality matters to you, and us! That's why we do a strict quality-check for every product.`
          }
        />
        <Feature
          icon={Location}
          title={'Free relocation'}
          text={
            `Changing your house or even your city? We'll relocate your rented products for free.`
          }
        />
        <Feature
          icon={Setting}
          title={'Free maintenance'}
          text={
            `Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.`
          }
        />
        <Feature
          icon={Chair}
          title={'Cancel anytime'}
          text={
            `Pay only for the time you use the product and close your subscription without any hassle.`
          }
        />
        <Feature
          icon={ArrBed}
          title={'Easy return on delivery'}
          text={
            `If you don't like the product on delivery, you can return it right away—no questions asked.`
          }
        />
        <Feature
          icon={Maintainence}
          title={'Keep upgrading'}
          text={
            `Bored of the same product? Upgrade to try another, newer design and enjoy the change!`
          }
        />
      </SimpleGrid>
    </Box>
  );
}