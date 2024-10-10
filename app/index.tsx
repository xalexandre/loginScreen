import Input from '@/components/input';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);    

    // 1. userName e senha tem que ter mais de 4 caracteres
    // 2. password tem que pelo menos ter uma letra maiuscula e um numero

    const [isValid, setIsValid] = useState(false);

    const register = () => {
        console.log('userName', userName);
    }

    useEffect(() => {
        const valid = userName.length > 4 && password.length > 4 && /[A-Z]/.test(password) && /[0-9]/.test(password);
        setIsValid(valid);
    }, [userName, password]);

    useEffect(() => {
        console.log('username mudou', userName);
    }, [userName])

    useEffect(() => {
        console.log('password mudou', password);
    }, [password])

    return (
        <View>
            <Text>Tela de Login</Text>
            <Input
                placeholder="Digite seu usuário"
                value={userName}
                setValue={setUserName}
                secureTextEntry
            />    
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Input
                    placeholder="Digite sua senha"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
                </TouchableOpacity>
            </View> 
            <TouchableOpacity onPress={register} disabled={!isValid}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}