import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Icon, IconTheme } from './icon';

const Button = ({ href, icon, text, theme }) => {
  const styles = cx(
    // Spacing.
    'px-2 rounded-xl flex items-center h-10',

    // Borders.
    'border-2 hover:border-neutral-500',

    // Animations.
    'transition-colors duration-200 ease-in-out',

    // Shadows.
    'hover:shadow hover:shadow-neutral-800',

    // Themes.
    {
      'border-transparent hover:bg-neutral-900': theme === ButtonTheme.Primary,
      'bg-neutral-900 border-neutral-700 shadow shadow-neutral-800':
        theme === ButtonTheme.Secondary,
      'px-3': text,
    },
  );

  return (
    <Link href={href} className={styles}>
      <Icon id={icon} theme={IconTheme.Button} />
      {text && <span className="pl-2">{text}</span>}
    </Link>
  );
};

const ButtonTheme = Object.freeze({
  Primary: 'primary',
  Secondary: 'secondary',
});

Button.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(ButtonTheme)),
};

Button.defaultProps = {
  theme: ButtonTheme.Primary,
};

export { Button, ButtonTheme };
