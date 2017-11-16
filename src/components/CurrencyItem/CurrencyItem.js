// @flow

import * as React from 'react';
import cx from 'classnames';
import { withHandlers, type HOC } from 'recompose';

import './CurrencyItem.scss';

type PropsType = {
  name: string,
  value: string,
  selected?: boolean,
  clickable?: boolean,
  onClick?: (name: string) => void
};

const enhance: HOC<*, PropsType> = withHandlers({
  handleOnClick: ({ name, onClick }) => () => {
    if (onClick) {
      onClick(name);
    }
  },
});

export const CurrencyItem = ({
  name, value, handleOnClick, selected, clickable,
}) => (
  <div
    className={cx('currency-item', {
      'currency-item--selected': selected,
      'currency-item--clickable': clickable,
    })}
    onClick={handleOnClick}
    title={value}
  >
    <b>{name}</b>: <br /> {value}
  </div>
);

export default enhance(CurrencyItem);
