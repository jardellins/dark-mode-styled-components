import { title } from 'process';
import React, {useContext} from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import context from '../../context/Theme';

const ThemeSwitcher = () => {
  const {colors, title} = useContext(ThemeContext);
  const {switchTheme} = useContext(context);

  return (
    <Switch 
            onChange={switchTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
            handleDiameter={20}
            onHandleColor={colors.primary}
            offHandleColor={colors.secudary}
            onColor="#f7fbfc"
            offColor="#222"
        />
  )
};

export default ThemeSwitcher;