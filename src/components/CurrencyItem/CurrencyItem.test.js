import React from 'react';
import { shallow, mount } from 'enzyme';

import CurrencyItem, { CurrencyItem as PlainCurrencyItem } from './CurrencyItem';

describe('<PlainCurrencyItem />', () => {
  it('should render without crash', () => {
    const component = shallow(<PlainCurrencyItem name="USD" value="Dollar" handleOnClick={n => n} />);

    expect(component).toMatchSnapshot();
  });

  it('should have optional classes', () => {
    const component = shallow(<PlainCurrencyItem name="USD" value="Dollar" handleOnClick={n => n} selected clickable />);

    expect(component).toMatchSnapshot();
  });

  describe('<CurrencyItem />', () => {
    it('should call callback func', () => {
      const fn = jest.fn();
      const component = mount(<CurrencyItem name="USD" value="Dollar" onClick={fn} />);

      component.find('.currency-item').simulate('click');
      component.update();

      expect(fn).toHaveBeenCalled();
      expect(fn).toHaveBeenCalledWith('USD');
    });
  });
});

