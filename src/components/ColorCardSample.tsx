import { Card, CardBody, HStack, VStack, Box, Text } from "@chakra-ui/react"

export default function ColorCardSample() {
    return (
        <Card>
            <CardBody>
                <HStack spacing='1%'>
                    <Box w='80px' h='80px' bg='yellow.200' alignContent='center'>
                        <Text align="center">1</Text>
                    </Box>
                    <VStack spacing='1%'>
                        <Box w='40px' h='40px' bg='tomato' alignContent='center'>
                            <Text align="center">2</Text>
                        </Box>
                        <Box w='40px' h='40px' bg='pink.100' alignContent='center'>
                            <Text align="center">3</Text>
                        </Box>
                    </VStack>
                    <VStack spacing="0%">
                        <Box w='40px' h='20px' bg='orange' alignContent='center'>
                            <Text align="center">2.1</Text>
                        </Box>
                        <Box w='40px' h='20px' bg='purple' alignContent='center'>
                            <Text align="center">2.2</Text>
                        </Box>
                        <Box w='40px' h='20px' alignContent='center'>
                        </Box>
                        <Box w='40px' h='20px' alignContent='center'>
                        </Box>
                    </VStack>
                    <VStack spacing="0%">
                        <Box w='40px' h='20px' alignContent='center'>
                        </Box>
                        <Box w='40px' h='20px' alignContent='center'>
                        </Box>
                        <Box w='40px' h='20px' bg='orange' alignContent='center'>
                            <Text align="center">3.1.1</Text>
                        </Box>
                        <Box w='40px' h='20px' bg='purple' alignContent='center'>
                            <Text align="center">3.1.2</Text>
                        </Box>
                    </VStack>
                    <VStack>
                        <Box w='80px' h='80px' bg='yellowgreen' alignContent='center'>
                            <Text align="center">5</Text>
                        </Box>
                    </VStack>
                    <VStack spacing="0%">
                        <Box w='40px' h='20px' bg='goldenrod' alignContent='center'>
                            <Text align="center">6.1.1</Text>
                        </Box>
                        <Box w='40px' h='20px' bg='goldenrod' alignContent='center'>
                            <Text align="center">6.1.2</Text>
                        </Box>
                        <Box w='40px' h='20px' bg='goldenrod' alignContent='center'>
                            <Text align="center">6.1.3</Text>
                        </Box>
                        <Box w='40px' h='20px' bg='goldenrod' alignContent='center'>
                            <Text align="center">6.1.4</Text>
                        </Box>
                    </VStack>
                </HStack>
                <HStack>
                    <Box w='100%' h='40px' bg='blue' alignContent='center'>
                        <Text align="center">4</Text>
                    </Box>
                </HStack>
            </CardBody>
        </Card>
    )
}