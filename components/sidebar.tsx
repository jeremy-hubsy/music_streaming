import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import NextImage from "next/image";
import MenuItem from "./molecules/ListElement";
import { Box, LinkBox, LinkOverlay, List, ListItem } from "@chakra-ui/layout";
import MyDivider from "./atoms/divider";
import NextLink from "next/link";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const playlist = new Array(50).fill(1).map((_, i) => `Playlist ${i + 1}`);

// const playlistDisplay = playlist.map((e,i) => {
//     return <ListItem>
//         <List
//     </ListItem>
// })

export default function Sidebar() {
  return (
    <Box className="w-full h-[calc(100vh-85px)] bg-black px-2.5 text-gray-500">
      <Box className="py-5 h-full">
        <Box className="w-32 px-5">
          <NextImage
            src="/logo.png"
            alt="logo of the company"
            height={60}
            width={120}
          />
        </Box>
        <List className="my-5">
          <MenuItem data={navMenu} />
        </List>
        <List className="my-5">
          <MenuItem data={musicMenu} />
        </List>
        <MyDivider />
        <Box className="h-4/6 overflow-auto">
          <List>
            {playlist.map((element) => {
              return (
                <ListItem className="px-5">
                  <LinkBox>
                    <NextLink href="/" passHref>
                      <LinkOverlay as="span">{element}</LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
