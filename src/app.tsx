import { Box, Flex, Text } from './components';

export function App() {
  return (
    <Flex
      direction="col"
      placeItems="center"
      placeContent="center"
      gap={{
        xsmall: 'size-200',
        large: 'size-500',
      }}
      backgroundColor={{
        light: 'pink-100',
        dark: 'gray-900',
      }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <Box backgroundColor="indigo-900">
        <Text>Hello</Text>
      </Box>
      <Box>
        <Text>Hello</Text>
      </Box>
      <Box>
        <Text>Hello</Text>
      </Box>
    </Flex>
  );
}
