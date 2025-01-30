import {TextInput} from 'react-native';

interface InputProps {
  name: string;
  placeholder?: string;
  value: string;
  setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

const MyTextInput: React.FC<InputProps> = ({
  name,
  value,
  placeholder,
  setFormData,
}) => {
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

export default MyTextInput;
