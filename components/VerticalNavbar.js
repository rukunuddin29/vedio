import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { Center, Tooltip, UnstyledButton, Stack, Button } from '@mantine/core';
import { HiMenuAlt1 } from 'react-icons/hi'; // Keep the hamburger icon for now
import classes from './VerticalNavbar.module.css'; // CSS module for styles

// Replace the icons with image paths
const mockData = [
  { icon: '/images/icons/home-black.png', label: 'Home', path: '/' },
  { icon: '/images/icons/pitcher-black.png', label: 'Pitcher', path: '/pitcher' },
  { icon: '/images/icons/splitter-black.png', label: 'Splitter', path: '/splitter' },
  { icon: '/images/icons/key-bpm-black.png', label: 'Key-BPM', path: '/key-bpm' },
  { icon: '/images/icons/cutter-black.png', label: 'Cutter', path: '/cutter' },
  { icon: '/images/icons/joiner-black.png', label: 'Joiner', path: '/joiner' },
  { icon: '/images/icons/recorder-black.png', label: 'Recorder', path: '/recorder' },
  { icon: '/images/icons/karaoke-black.png', label: 'Karaoke', path: '/karaoke' },
];

// NavbarLink component that now renders images
const NavbarLink = ({ icon, label, active, onClick, path }) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Link href={path} passHref>
        <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
          <img src={icon} alt={label} className={classes.iconImage} /> {/* Use the image here */}
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
        <h1><HiMenuAlt1 /></h1> {/* Keep the hamburger icon */}
      </Center>

      <div className={classes.navbarMain}>
        <div className={classes.iconContainer}>
          <Stack justify="center" gap={0} spacing={5}>
            {links}
          </Stack>
        </div>
        
        <div className={classes.buttonContainer}>
          <Button variant="outline" className={classes.button}>Support</Button>
          <Button variant="outline" className={classes.button}>Flag</Button>
        </div>
      </div>
    </nav>
  );
};

export default VerticalNavbar;
