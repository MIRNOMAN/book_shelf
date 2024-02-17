import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import { AppBar, Button, Stack } from '@mui/material';
import Link from 'next/link';
import logo from "@/assets/logo.png";

// Icons

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';

const navItem = [
  {
    route: 'Home',
    pathName: '/',
  },
  {
    route: 'About',
    pathName: '/about',
  },
  {
    route: 'Blog',
    pathName: '/blog',
  },
  {
    route: 'Contact',
    pathName: '/contact',
  },
]




const Navbar = () => {
  return (
    <AppBar position="static" className='bg-slate-100 mt-2'>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Image className='py-3' src={logo} height={100} width={250} alt='logo'></Image>

       <Box className="text-center w-full">
        {navItem.map((item) => (
          <Link  key={item} href={item.pathName}>
           <Button className='text-black text-xl hover:bg-blue-500 font-bold'>{item.route}</Button>
          </Link>
        ))}
       </Box>
       <Box>
           <Stack direction="row" sx={{"& svg" : {
            color: "black",
            fontSize: "30px",
           }}}>
           <IconButton>
               <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
               <TwitterIcon></TwitterIcon>
            </IconButton>
            <IconButton>
               <LinkedInIcon></LinkedInIcon>
            </IconButton>
            <IconButton>
              <InstagramIcon></InstagramIcon>
            </IconButton>
           </Stack>
          </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Navbar