import React from "react";
import Sidebar from "./Sidebar";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import Icon from "../Icon";

export default { title: "Sidebar" };

const AddFile = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
    <path d="M 4 0 C 1.796875 0 0 1.796875 0 4 L 0 21 C 0 23.203125 1.796875 25 4 25 L 14 25 C 13.5 24.402344 13.085938 23.730469 12.78125 23 L 4 23 C 2.894531 23 2 22.105469 2 21 L 2 4 C 2 2.894531 2.894531 2 4 2 L 10.28125 2 C 11.003906 2.183594 11 3.050781 11 3.9375 L 11 7 C 11 7.550781 11.449219 8 12 8 L 15 8 C 15.996094 8 17 8.003906 17 9 L 17 12.78125 C 17.628906 12.519531 18.300781 12.339844 19 12.25 L 19 8 C 19 6.9375 18.027344 5.929688 16.28125 4.21875 C 16.039063 3.980469 15.777344 3.714844 15.53125 3.46875 C 15.285156 3.222656 15.019531 2.992188 14.78125 2.75 C 13.070313 1.003906 12.0625 0 11 0 Z M 20 14.1875 C 16.789063 14.1875 14.1875 16.789063 14.1875 20 C 14.1875 23.210938 16.789063 25.8125 20 25.8125 C 23.210938 25.8125 25.8125 23.210938 25.8125 20 C 25.8125 16.789063 23.210938 14.1875 20 14.1875 Z M 19 17 L 21 17 L 21 19 L 23 19 L 23 21 L 21 21 L 21 23 L 19 23 L 19 21 L 17 21 L 17 19 L 19 19 Z"></path>
  </svg>
);

export const withText = () => (
  <Sidebar>
    <List>
      {["CLIENTS", "Products", "Bills", "Budget"].map((text, key) => (
        <ListItem color="secondary" key={key}>
          {text}
        </ListItem>
      ))}
    </List>
    <hr />
    <List>
      {["CLIENTS", "Products", "Bills", "Budget"].map((text, key) => (
        <ListItem color="secondary" key={key} icon={AddFile}>
          {text}
        </ListItem>
      ))}
    </List>
  </Sidebar>
);
