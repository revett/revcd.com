import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ id, theme }) => {
  const IconComponent = id.type;

  if (theme === IconTheme.Button) {
    return <IconComponent className="h-6 w-6 text-current inline-block" />;
  }

  if (theme === IconTheme.PageTitle) {
    return (
      <div className="mb-6">
        <IconComponent className="w-9 h-9" />
      </div>
    );
  }
};

const IconTheme = Object.freeze({
  Button: 'button',
  PageTitle: 'pageTitle',
});

Icon.propTypes = {
  id: PropTypes.element.isRequired,
  theme: PropTypes.oneOf(Object.values(IconTheme)).isRequired,
};

export { Icon, IconTheme };
