import {Text, View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import MyTextInput from '../../components/myTextInput/MyTextInput';

const AppRegister: React.FC = ({navigation}: any) => {
  const [formData, setFormData] = useState<Record<string, string>>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <View className="h-full p-5 gap-4 justify-center">
      <Text className="text-4xl text-black text-center mb-3">Register</Text>

      <MyTextInput
        name="username"
        setFormData={setFormData}
        value={formData.username || ''}
        placeholder="Enter your username"
      />

      <MyTextInput
        name="email"
        setFormData={setFormData}
        value={formData.email || ''}
        placeholder="Enter your email"
      />

      <MyTextInput
        name="password"
        setFormData={setFormData}
        value={formData.password || ''}
        placeholder="Enter your password"
      />

      <MyTextInput
        name="confirmPassword"
        setFormData={setFormData}
        value={formData.confirmPassword || ''}
        placeholder="Confirm your password"
      />

      <TouchableOpacity
        onPress={() => {
          console.log(formData);
        }}
        className="bg-green-600 py-6">
        <Text className="text-center text-white text-xl">Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        className="mt-4">
        <Text className="text-center text-blue-600 text-lg">Go To Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppRegister;
