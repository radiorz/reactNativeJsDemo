import React, {useRef, useState} from 'react';
import {
  add,
  removeById,
  updateDone,
  updateEditing,
  updateMessage,
} from '~/store/todoSlice';
import {View} from 'react-native';
import {ListItem, Input, Button, Text} from '@rneui/themed';
import {useSelector, useDispatch} from 'react-redux';
export default function Todo() {
  const todos = useSelector(state => state.todo.todos);
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(add(todo));
    setTodo('');
  };
  const onTodoInputChange = (todo, message) => {
    dispatch(updateMessage({id: todo.id, message}));
  };
  const todoInputRef = useRef();
  const onTodoClick = id => {
    dispatch(updateEditing(id));
    console.log(todoInputRef);
    // TODO 如何focus 到新的 ref中
    todoInputRef.current?.focus();
  };
  return (
    <View>
      <View>
        {(todos || []).map((value, index) => (
          <ListItem key={index}>
            <Text>{value.id}</Text>
            {!value.editing ? null : (
              <input
                ref={todoInputRef}
                value={value.message}
                onChange={e => onTodoInputChange(value, e.target.value)}
                onBlur={() => dispatch(updateEditing(value.id))}
              />
            )}
            {value.editing ? null : (
              <span onClick={() => onTodoClick(value.id)}>{value.message}</span>
            )}
            <Button onClick={() => dispatch(updateDone(value.id))}>
              {value.done.toString()}
            </Button>
            <Button onClick={() => dispatch(removeById(value.id))}>
              remove
            </Button>
          </ListItem>
        ))}
      </View>
      <Input value={todo} onChange={event => setTodo(event.target.value)} />
      <Button onClick={addTodo}>添加</Button>
    </View>
  );
}
