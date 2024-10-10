import { useEffect, useState } from 'react';
import { TextInput, Text } from 'react-native'

export default function Input({ value, setValue, placeholder, secureTextEntry }){
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const valid = value.length > 4;
        setIsValid(valid)
    })

    return (
        <>
            <TextInput 
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
                secureTextEntry={secureTextEntry}
            />
            {
                isValid && (
                    <Text>Campo válido</Text>
                )
            }
        </>    
    )
}