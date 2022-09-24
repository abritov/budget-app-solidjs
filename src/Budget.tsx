import { Component } from "solid-js";

import Box from "@suid/material/Box";
import Paper from "@suid/material/Paper";
import Typography from "@suid/material/Typography";

import AppBar from "./components/AppBar";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemText from "@suid/material/ListItemText";

const Budget: Component = () => {
  return (
    <>
      <AppBar title="Список покупок" />
      <Box sx={{ flexGrow: 1 }}>
        <List>
          <ListItem>
            <ListItemText
              primary="Продукты"
              secondary={"Перекресток " + new Date().toLocaleDateString()}
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Budget;
