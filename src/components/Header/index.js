import React from 'react';

import { Container,HeaderLogo,HeaderUser } from './styles';

function Header({black}) {
  return (
    <Container black={black}>
        <HeaderLogo>
          <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Logo netflix"/>
        </HeaderLogo>

        <HeaderUser>
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="logo user"/>
        </HeaderUser>
    </Container>
  );
}

export default Header;
