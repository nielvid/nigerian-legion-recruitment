import React from 'react'
import { Box, Heading, Image, Text} from "@chakra-ui/react"

export default function Announcement() {

    //<Box w={["100%"]} m={["0.5em auto", "1em auto"]}>
    return (
        <>
        <Box w={["100%"]} >
        
        <Image src="https://pbs.twimg.com/profile_banners/1105613909053054977/1552691925/1500x500"  w="100%" alt="corps" />

        <Box borderRadius="15px" width="80%" m="25px auto">
<Text textAlign="justify" fontSize={["0.7em", "1em", "1.2em", "1.em"]}>
          The Nigerian Legion Lagos State Command invites able-bodied young men and women for enlistment into the Nigerian Legion Corps of Commissionaire.
          The applicants will undergo basic para-military training course for 3 months at the Lagos State Command Headquarters.
          After the training program, successful candidates will be deployed for various security purposes. 
        </Text>
<Heading color="#FF0000" fontSize={[".6em", "1m", "1.6em", "2em"]} m="10px 0"> How to Apply</Heading>
        <Text textAlign="justify" fontSize={["0.6em", "1.2em"]}>
         
        </Text>
         <ul>
              <li>Click on Start Applicantion</li>
              <li>You need username and password to create account before accessing the portal</li>
              <li>Complete the application form, submit online and print copy. </li>
              <li>Also print the guarantor form and give to your Guarantor to fill.</li>
              <li>Bring the application and guarantor form to the State Command Headquarters for the training documentation.</li>
          </ul>
        <Heading color="#FF0000" fontSize={[".6em", "1m", "1.6em", "2em"]} m="25px 0"> Requirements</Heading>
        <Text textAlign="justify" fontSize={["0.6em", "1.2em"]}>
          
        </Text>
        <ul>
              <li>Applicants must be Nigerian citizens by birth</li>
              <li>Applicants must be medically, physically and psychologically fit</li>
              <li>Applicants must not have any record of criminal conviction by the court of law </li>
              <li>Applicants must not be less dan 18 years </li>
          </ul>
        </Box>
        </Box>

        </>
    )
}
