import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { Center, Tooltip, UnstyledButton, Stack, Button } from '@mantine/core';

import { RiScissors2Line } from "react-icons/ri";
import { TbPrismLight } from "react-icons/tb";
import { BsSoundwave } from "react-icons/bs";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { HiMenuAlt1 } from "react-icons/hi";
import { TbBrandPrisma } from "react-icons/tb";
import { GiJoin } from "react-icons/gi";
import { FaMicrophone } from "react-icons/fa";
import { BsDiscFill } from "react-icons/bs";

import classes from './VerticalNavbar.module.css'; // CSS module for styles

const mockData = [
  { icon: <PiDotsThreeOutlineFill  />, label: 'Home', path: '/' },
  { icon: <BsSoundwave/>, label: 'Pitcher', path: '/pitcher' },
  { icon: <TbPrismLight />, label: 'Splitter', path: '/splitter' },
  { icon: <TbBrandPrisma />, label: 'Key-BPM', path: '/key-bpm' },
  { icon: <RiScissors2Line />, label: 'Cutter', path: '/cutter' },
  { icon: <GiJoin />, label: 'Joiner', path: '/joiner' },
  { icon: <FaMicrophone />, label: 'Recorder', path: '/recorder' },
  { icon: <BsDiscFill />, label: 'Karaoke', path: '/karaoke' },
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
        <h1><HiMenuAlt1 /></h1>
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
