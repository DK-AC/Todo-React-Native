import { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AddTodo = ({ addTodoItem }) => {
  const [value, setValue] = useState('');

  const onPressHandler = () => {
    if (value.trim() !== '') {
      addTodoItem(value.trim());
      setValue('');
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
      <Button title="Добавить" onPress={onPressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: `70%`,
    borderBottomWidth: 2,
  },
});
