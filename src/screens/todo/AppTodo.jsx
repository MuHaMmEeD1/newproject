import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';
import TodoTextInput from './components/TodoTextInput';

const AppTodo = () => {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const addTodo = async () => {
    if (!formData.title || !formData.description) {
      console.error('Both title and description are required.');
      return;
    }

    try {
      console.log('Form data before sending:', formData);

      const response = await axios.post(
        `http://192.168.0.190:5001/cards`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );

      console.log('Todo added successfully:', response.data);

      setFormData({
        title: '',
        description: '',
      });

      getTodos();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const getTodos = async () => {
    try {
      const response = await axios.get(`http://192.168.0.190:5001/cards`);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const deleteTodo = async id => {
    try {
      const response = await axios.delete(
        `http://192.168.0.190:5001/cards/${id}`,
      );
      console.log('Todo deleted:', response.data);
      getTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <View className="bg-white p-5 gap-10">
      <View className="gap-4 py-5">
        <Text className="text-4xl text-black text-center mb-3">Add Todo</Text>

        <TodoTextInput
          name="title"
          setFormData={setFormData}
          value={formData.title || ''}
          placeholder="Enter title"
        />

        <TodoTextInput
          name="description"
          setFormData={setFormData}
          value={formData.description || ''}
          placeholder="Enter description"
        />

        <TouchableOpacity
          onPress={() => {
            addTodo();
          }}
          className="bg-blue-600 py-6">
          <Text className="text-center text-white text-xl">Send Todo</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        className="h-[400px] px-3"
        data={todos}
        renderItem={({item}) => (
          <View className="border-b border-gray-300 py-4 px-4">
            <View className="flex-row justify-between items-center gap-3">
              <Text className="text-black font-bold text-[20px]">
                {item.title}
              </Text>
              <Text className="text-black">{item.description}</Text>

              <TouchableOpacity
                onPress={() => deleteTodo(item._id)}
                className="bg-red-600 py-2 px-4">
                <Text className="text-center text-white">Delete Todo</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item._id.toString()}
        ListEmptyComponent={() => (
          <View className="flex-1 justify-center items-center">
            <Text className="text-black text-lg">No todos available</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AppTodo;
