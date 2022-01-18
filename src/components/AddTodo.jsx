import {useState} from 'react';
import {Alert, Keyboard, StyleSheet, TextInput, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export const AddTodo = ({addTodoItem}) => {
    const [value, setValue] = useState('');

    const onPressHandler = () => {
        if (value.trim() !== '') {
            addTodoItem(value.trim());
            setValue('');
            Keyboard.dismiss()
        } else {
            Alert.alert('Название дела не должно быть пустым');
        }
    };

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Введите название дела"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Ionicons.Button name="add-circle-outline"
                             size={24} color="white"
                             onPress={onPressHandler}
            >
                Добавить
            </Ionicons.Button>
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        width: `60%`,
        borderBottomWidth: 2,
    },
});
