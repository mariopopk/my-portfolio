import { MoreHoriz as MoreHorizIcon } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";

export default function ProjectCardBadgeGroup() {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip
          size="small"
          avatar={
            <Avatar src="https://images.ctfassets.net/5hn1f663deh9/44xgysZw4NYCgGdsLV5DO6/603204ac9aaad59dc6c277ba72410ef7/react-icon.png"></Avatar>
          }
          label="React"
          variant="outlined"
        />

        <Chip
          size="small"
          avatar={
            <Avatar src="https://images.ctfassets.net/5hn1f663deh9/6MGic9AOJ0ObJPZYV76qDN/d3d137a0d258ec58efa5a8b61db9baa7/graphQL-logo.png"></Avatar>
          }
          label="GraphQL"
          variant="outlined"
        />
        <Chip
          size="small"
          avatar={
            <Avatar>
              <MoreHorizIcon />
            </Avatar>
          }
          label="See More"
          variant="outlined"
        />
      </Stack>
    </>
  );
}
