import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { Center, Tooltip, UnstyledButton, Stack, Button } from '@mantine/core';
import { FaHome, FaChartBar, FaFolderOpen, FaKey, FaUserCircle, FaLock, FaCogs, FaMusic } from 'react-icons/fa';
import classes from './VerticalNavbar.module.css'; // CSS module for styles

const mockData = [
  { icon: <FaHome />, label: 'Home', path: '/' },
  { icon: <FaChartBar />, label: 'Pitcher', path: '/pitcher' },
  { icon: <FaFolderOpen />, label: 'Splitter', path: '/splitter' },
  { icon: <FaKey />, label: 'Key-BPM', path: '/key-bpm' },
  { icon: <FaUserCircle />, label: 'Cutter', path: '/cutter' },
  { icon: <FaLock />, label: 'Joiner', path: '/joiner' },
  { icon: <FaCogs />, label: 'Recorder', path: '/recorder' },
  { icon: <FaMusic />, label: 'Karaoke', path: '/karaoke' },
];

const NavbarLink = ({ icon, label, active, onClick, path }) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Link href={path} passHref>
        <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
          {icon} {/* Render the icon directly */}
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
        <h1>hamburger</h1>
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
