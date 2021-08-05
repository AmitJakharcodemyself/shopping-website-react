import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);



/////

     /* ...otherSectionProps== object havinf properties titiel,link,imageUrl;
       {this.state.sections.map(({ id, title,link,imageUrl }) => (
          <MenuItem key={id} title={title},link={link},imageUrl={imageUrl} />
        ))}
      */ 
       