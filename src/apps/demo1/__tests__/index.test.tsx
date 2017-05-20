import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../index';

describe('App Component', () => {
	it('should render without issues', () => {
		const component = shallow(<App />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should have onPress event', () => {
		const component = shallow(<App />);
		const innerComponent = component.find('TouchableOpacity');

		innerComponent.simulate('press');

		console.log(component);
	});
});
