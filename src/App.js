import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Button,Spinner,Input,InputGroup,InputRightAddon,InputLeftAddon } from '@chakra-ui/react'
import DisplayJohn, { JohnProfile } from '../src/components/DisplayJohn.js';
// import {JohnProfile} from 




function App() {
  return (
      <ChakraProvider>
      <div className="App">
      <header className="App-header">

        <DisplayJohn/>
        <JohnProfile/>
        
    <Button colorScheme='blue'>ปู่มมมมมม</Button>
    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
<Input variant='filled' placeholder='กรอกก่อนนน' />

    
    <Button colorScheme='teal' size='lg'>ปู่มหญ่ายยย</Button>
    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='green.500'
  size='xl'
/>
<Input placeholder='กรอกจิ' size='lg' />
    
    <Button colorScheme='green' size='sm'>ปู่มเย็ก ๆ</Button>
    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='red.500'
  size='xl'
/>
<InputGroup>
    <InputLeftAddon color='pink.300' children='น่ารักจังเลยขอเบอร์เธอหน่อยครับ' />
    <Input type='tel' placeholder='phone number' />
</InputGroup>
    <Button colorScheme='pink' variant='outline' size='md'> ♥︎ </Button>
  <InputGroup>
    <InputRightAddon  colorScheme='black 'color='blue.300' children='ไม่เอาเเล้วเบอร์ขอใจเธอเลยได้ปะ' />
    <Input type='tel' placeholder='phone number' />
</InputGroup>
    </header>
      </div>
      </ChakraProvider>);
}

export default App;
