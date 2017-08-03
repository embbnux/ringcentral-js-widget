import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CircleButton from '../CircleButton';

import styles from './styles.scss';

export default function ActiveCallButton(props) {
  const className = classnames(styles.btnSvg, props.className);
  const buttonClassName = classnames(
    styles.button,
    props.buttonClassName,
    props.active ? styles.buttonActive : null,
    props.disabled ? styles.buttonDisabled : null,
  );
  return (
    <svg
      className={className}
      viewBox="0 0 500 400"
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
    >
      <CircleButton
        width={'250'}
        height={'250'}
        x={125}
        y={0}
        className={buttonClassName}
        onClick={props.onClick}
        icon={props.icon}
        disabled={props.disabled}
        showBorder={props.showBorder}
        iconClassName={props.buttonClassName}
      />
      <text
        className={styles.buttonTitle}
        x="250"
        y="340"
        textAnchor="middle"
      >
        {props.title}
      </text>
    </svg>
  );
}

ActiveCallButton.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  icon: PropTypes.func,
  showBorder: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
};

ActiveCallButton.defaultProps = {
  className: undefined,
  buttonClassName: undefined,
  disabled: false,
  active: false,
  icon: undefined,
  showBorder: true,
  width: '100%',
  height: '100%',
  x: 0,
  y: 0,
};
