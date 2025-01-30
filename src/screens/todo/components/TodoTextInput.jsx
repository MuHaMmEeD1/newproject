import {TextInput} from 'react-native';

const TodoTextInput = ({name, value, placeholder, setFormData}) => {
  return (
    <TextInput
      secureTextEntry={name === 'password' || name === 'config_password'}
      onChangeText={text => {
        setFormData(prevState => ({...prevState, [name]: text}));
      }}
      className="border-[1px] border-black pl-4 text-black"
      placeholder={placeholder}
      placeholderTextColor="black"
      defaultValue={value}
    />
  );
};

export default TodoTextInput;
