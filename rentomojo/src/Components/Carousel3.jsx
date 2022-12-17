import {  Box ,Button,Icon} from "@chakra-ui/react"
import {BsArrowRightCircle,BsArrowLeftCircle} from "react-icons/bs";
import styled from"./Carousel3.module.css"
import { Card, CardBody, CardFooter,Image,Avatar,Stack,Heading,Text,Divider } from '@chakra-ui/react'
import Quotes from "../Photos/Icons/Quotes.png"
let data=[
    {
        "image":"https://www.rentomojo.com/public/images/testimonials/kushal-tiwari.jpg",
        "name":"Kushal Tiwari ",
        "details":"Marriage comes with a lot of unavoidable expenses in India and spending a big chunk of your savings on furniture and white goods could be a big challenge. RentoMojo not just took away all our worriesbut in fact went to the extent of spoiling us. Where I could have owned just some bare essentials after making a huge hole in my pocket or paid unnecessary EMIs, I could smartly own a lot of stuff which would have come much later on my list. Heartfelt thanks to the whole Rentomojo team for making our renting experience completely hassle-free. It has been two great years and I am sure there are many more to come",
        "id":"1q"
      },
    {
        "image":"https://www.rentomojo.com/public/images/testimonials/navin-kumar.jpg",
        "name":"Navin Kumar",
        "details":`When I moved to Bangalore from Chennai, I went to multiple websites
        to get a bed until lI found out about Rentomojo. I rented a bed and
        mattress, just to try it out. They delivered it within a day and set it up at
        my place without any hassle. NowI sleep so peacefully that I always
        end up being late for work :D`,
        "id":"2q"
      },
    {
        "image":"https://www.rentomojo.com/public/images/testimonials/anjali-sharma.jpg",
        "name":"Anjali Sharma",
        "details":`I got to know about RentoMojo through a a friend and looked up for AC
        on their website and finally rented one. The delivery guys installed the
        AC in 2 days. And with a such a low deposit and rent, I didn't have to
        spend a whole lot for my comfort. Thank you RentoMojo, for being so
        easy breezy on my pocket.`,
        "id":"3q"
      },
    {
        "image":"https://www.rentomojo.com/public/images/testimonials/shreyas-ravetkar.jpg",
        "name":"Shreyas Ravetkar",
        "details":`Rentomojo was unbelievably helpful. Never thought that setting up a
        new place would be just few clicks away. The customer support staff
        was on their toes to help me. Anytime I need something for my house,
        Rentomojo has it. :).`,
        "id":"4q"
      },
    {
        "image":"https://www.rentomojo.com/public/images/testimonials/nikita-sharma.jpg",
        "name":"Nikita Sharma",
        "details":`The thought of renting the furniture had never occurred to me. when I
        saw Rentomojo's affordable range, I was super excited to try and it was
        really amazing. From service to product quality, everything was superb.
        I don't have to carry the same furniture to every house I move to and
        can change the look of my home whenever I want`,
        "id":"5q"
      },
    {
        "image":"https://www.rentomojo.com/public/images/testimonials/manish-srivastava.jpg",
        "name":"Manish Sirvastava",
        "details":`I was suddenly asked to move to Chennai from Bengaluru in couple of
        days. Everything was garbled for me and huge tension of getting
        apartment, buying furnitures, seling while going back to Bangalore.
        Thanks to RentoMojo for excellent budgeted plans. With few mouse
        clicks and nominal security deposit u are done . No tension for
        delivery, Rentomojo is a furniture wish wizard. Also takes care of
        relocation made my life easy. Happy to be a customer for Rentomojo. It
        made my house a happy home!`,
        "id":"6q"
      },
    
]

export const FurnitureSlider2=()=>{
  const btnpressprev=()=>{
    let boxel=document.querySelector(`.${styled.product_container}`);
    boxel.scrollLeft-=540
  }
  const btnpressnext=()=>{
    let boxel=document.querySelector(`.${styled.product_container}`);
    boxel.scrollLeft+=540
  }
    return(
        <Box className={styled.carousel} py="60px" >
            <Box>
            <Text width={"130px"} textAlign={"left"} color="black" fontSize={"lg"} ml="10%"> <b>Over 1.5 Lakh</b> Happy subscribers</Text>
            <hr className={styled.line} />
            <br />
            <Text width={"130px"} textAlign={"left"} color="grey" ml="10%">Here's what they have to say about rentomojo</Text>
            <Box className={styled.Button_container} mt="20px"  >
            <Button className={styled.buttons} onClick={btnpressnext}><Icon as={BsArrowRightCircle}/></Button>
            <Button className={styled.buttons} onClick={btnpressprev}><Icon as={BsArrowLeftCircle}/></Button>
            </Box>
            </Box>
            <Box className={styled.product_container}>
                {data.map(el=><Cards image={el.image} key={Date.now()+el.id} name={el.name} details={el.details}></Cards>)}
            </Box>
        </Box>
    )
}

const Cards=({image,
  name,
  details,
  })=>{

return <Card minWidth={"500px"} bg="#f5f7fa" rounded="3xl" className={styled.card}>
  <CardBody >
    <Stack mt='6' spacing='3'>
      <Heading size='xs'>{}</Heading>
      <Box display="flex" gap={"10px"}>
      <Avatar name={name} src={image} size="lg" />
      <Text textAlign={"left"} mt="18px">{name}</Text>
      <Image position={"absolute"}  top={0} right={20}  w={"100px"} src={Quotes}></Image>
      </Box>
      <Box >
      <Text marginTop={"30px"} color="black" lineHeight={"20px"} fontSize={"xs"} textAlign={"left"}>{details}</Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
}