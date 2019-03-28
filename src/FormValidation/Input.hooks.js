import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 1em;
`;
const Col = styled.div`
  position: relative;
  flex: 0 0 ${props => (props.size ? `${(100 * props.size) / 12}%` : 'auto')};
`;
const Label = styled.div`
  text-align: right;
  line-height: 2.25em;
  margin: 0 1em;
`;
const InputElem = styled.input`
  font-size: 1em;
  padding: 0.5em 0.75em;
  padding-right: ${props => (props.clearable ? '2em' : '0.75em')};
`;
const Warn = styled.div`
  font-size: 0.8em;
  max-width: 100%;
  min-height: 1em;
  line-height: 1em;
  color: red;
`;
const ClearButton = styled.div`
  position: absolute;
  display: block;
  width: 1em;
  height: 1em;
  top: 0.75em;
  right: 0.75em;
  background-color: #999;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  text-align: center;

  line-height: 0.8em;
  &:before {
    content: '×';
    font-size: 0.8em;
  }
`;

const Input = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  clearable,
}) => {
  const ref = useRef();
  const clear = () => {
    ref.current.focus();
    onChange({ target: { value: '' } });
  };
  return (
    <Row>
      <Col size={4}>
        <Label>{label}</Label>
      </Col>
      <Col>
        <InputElem
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          clearable={clearable}
          ref={ref}
        />
        <Warn>{error}</Warn>
        {clearable && value && <ClearButton onClick={clear} />}
      </Col>
    </Row>
  );
};

Input.propTypes = {
  types: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
  clearable: PropTypes.bool,
};

export default Input;
