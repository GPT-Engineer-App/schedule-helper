import { useState } from "react";
import { Box, Button, Input, List, ListItem, Text, VStack, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleAddTodo = () => {
    if (input.trim() === "") {
      toast({
        title: "No input",
        description: "You need to write something to add a todo.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, input]);
    setInput("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <VStack p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Todo App
      </Text>
      <Box>
        <Input placeholder="Add a new todo" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddTodo()} />
        <IconButton icon={<FaPlus />} onClick={handleAddTodo} colorScheme="blue" aria-label="Add todo" ml={2} />
      </Box>
      <List spacing={3} w="100%">
        {todos.map((todo, index) => (
          <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
            <Text>{todo}</Text>
            <IconButton icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
