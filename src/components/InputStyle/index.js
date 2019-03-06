import React from 'react';
import PropTypes from 'prop-types';
import { Item, Input } from 'native-base';
import { Alert } from 'react-native';
import styles from './styles';

const InputStyle = (props) => {
  if (props.password) {
    return (
      <Item rounded style={styles.inputContainer} success>
        <Input {...props} secureTextEntry={props.password} />
      </Item>
    );
  }
  return (
    <Item rounded style={styles.inputContainer} success>
      <Input {...props} />
    </Item>
  );
};

InputStyle.propTypes = {
  props: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    password: PropTypes.bool,
    name: PropTypes.string.isRequired
  })
};

InputStyle.defaultProps = {
  props: {
    onChange: () => Alert.alert('try'),
    value: 'prueba',
    placeholder: 'Prueba',
    password: false,
    name: 'mail'
  }
};

export default InputStyle;
