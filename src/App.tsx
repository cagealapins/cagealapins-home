import { Text, Box, Container, Heading, VStack, Link } from '@chakra-ui/react';

const App = () => {
    return (
        <Box>
            <Box
                display="flex"
                shadow="md"
                borderWidth="6px"
                padding="3px"
                margin="12px"
            >
                <Heading as="h2">かじゃらぱんホーム</Heading>
            </Box>
            <Box>
                <Box margin="12px">
                    <Text fontSize="xl">ナレッジベース - Knowlege base</Text>
                    <Link
                        fontSize="gl"
                        href="https://wiki.cagealapins.space"
                        isExternal
                        color="blue"
                    >
                        ページに飛ぶ
                    </Link>
                </Box>
                <Box margin="12px">
                    <Text fontSize="xl">Pleroma - SNS</Text>
                    <Link
                        fontSize="gl"
                        href="https://pleroma.cagealapins.space"
                        isExternal
                        color="blue"
                    >
                        ページに飛ぶ
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default App;
