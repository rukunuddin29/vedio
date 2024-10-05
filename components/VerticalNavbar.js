import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { Center, Tooltip, UnstyledButton, Stack } from '@mantine/core';
import classes from './VerticalNavbar.module.css'; // Create a CSS module for styles if needed

// Add paths to mockData
const mockData = [
  { icon: '/images/home-icon.png', label: 'Home', path: '/' }, // Home path
  { icon: '/images/dashboard-icon.png', label: 'Dashboard', path: '/dashboard' }, // Dashboard path
  { icon: '/images/analytics-icon.png', label: 'Analytics', path: '/analytics' }, // Analytics path
  { icon: '/images/releases-icon.png', label: 'Releases', path: '/releases' }, // Releases path
  { icon: '/images/account-icon.png', label: 'Account', path: '/account' }, // Account path
  { icon: '/images/security-icon.png', label: 'Security', path: '/security' }, // Security path
  { icon: '/images/settings-icon.png', label: 'Settings', path: '/settings' }, // Settings path
];

const NavbarLink = ({ icon, label, active, onClick, path }) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Link href={path} passHref>
        <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
          <img src={icon} alt={label} style={{ width: '20px', height: '20px' }} />
        </UnstyledButton>
      </Link>
    </Tooltip>
  );
};

export const VerticalNavbar = () => {
  const [active, setActive] = React.useState(0); // Default to the first link being active

  const links = mockData.map((link, index) => (
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
        <h1>My App</h1>
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>
    </nav>
  );
};

export default VerticalNavbar;
