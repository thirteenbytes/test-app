import { Card, CardBody, HStack, VStack, Box, Text}  from "@chakra-ui/react"
import { IProductResponse } from "../data/IProductResponse"

interface IProps {
    product: IProductResponse;
}

export default function ProductCard({ product }: IProps) {
    return (
        <Card width='100%'>
            <CardBody>
                <HStack>
                    <Box w='80px' h='80px' bg='purple.600' alignContent='center'>
                        <Text color='white' fontSize='xxx-large' align="center">{product.Code}</Text>
                    </Box>
                    <VStack width='50%'>
                        <HStack width="100%">
                            <Text w='15%' h='40px' fontSize='xx-large' align="left">{product.Id}</Text>
                            <Text w='85%' h='20px' align="left">{product.Name}</Text>
                        </HStack>
                        <HStack width="100%">
                            <Text w='60%' h='40px' align="left">{product.Description}</Text>
                            <Text w='40%' h='40px' align="left">{product.Weight} {product.WeightUom}</Text>
                        </HStack>
                    </VStack>                                        
                </HStack>                
                <HStack>
                    <Text width='100%'>{product.Label}</Text>
                </HStack>
            </CardBody>
        </Card>        
    )
}