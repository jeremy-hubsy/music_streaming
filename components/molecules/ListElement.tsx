import {
  Box,
  LinkBox,
  LinkOverlay,
  ListIcon,
  ListItem,
} from "@chakra-ui/layout";

import NextLink from "next/link";

export default function MenuItem({ data }: any) {
  return data.map((e: any, i: any) => {
    return (
      <ListItem className="my-2 px-5">
        <LinkBox>
          <NextLink href={e.route} passHref>
            <LinkOverlay as="span">
              <ListIcon as={e.icon} color="white" />
              {e.name}
            </LinkOverlay>
          </NextLink>
        </LinkBox>
      </ListItem>
    );
  });
}
