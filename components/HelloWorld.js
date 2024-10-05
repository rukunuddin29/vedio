import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import classes from './NavbarMinimal.module.css'; // Make sure to create this CSS file for styling

// NavbarLink component to display each link with an image
function NavbarLink({ imageSrc, label, active, onClick }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <img src={imageSrc} alt={label} style={{ width: rem(20), height: rem(20) }} />
      </UnstyledButton>
    </Tooltip>
  );
}

// Mock data with images instead of icons
const mockdata = [
  { imageSrc: '/images/home.png', label: 'Home' },
  { imageSrc: '/images/dashboard.png', label: 'Dashboard' },
  { imageSrc: '/images/analytics.png', label: 'Analytics' },
  { imageSrc: '/images/releases.png', label: 'Releases' },
  { imageSrc: '/images/account.png', label: 'Account' },
  { imageSrc: '/images/security.png', label: 'Security' },
  { imageSrc: '/images/settings.png', label: 'Settings' },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(2); // Default active link

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <h1>Logo</h1> {/* Replace this with your logo image if needed */}
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink imageSrc='/images/change-account.png' label="Change account" />
        <NavbarLink imageSrc='/images/logout.png' label="Logout" />
      </Stack>
    </nav>
  );
}
