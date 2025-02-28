import React from "react";
import { Avatar, List, ListItem, ListItemAvatar} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import postProfile from '../images/postProfile.jpg';
import postProfile1 from '../images/postProfile1.jpg';
import postProfile2 from '../images/postProfile2.jpg';
import contact from '../images/contact.jpg';
import contact1 from '../images/contact1.jpg';

const contacts = [
  {
    name: "Xwave",
    img: postProfile,
  },
  {
    name: "Khayalat",
    img: postProfile1,
  },
  {
    name: "Cricket Gayan",
    img: postProfile2,
  },
  {
    name: "Syed Waqas Shah",
    img: contact,
  },
  {
    name: "Ali Akbar Rashdi",
    img: contact1,
  },
];

const Contact = () => {
  return (
    <div className="container position-fixed d-none d-lg-block p-3">
      <h6 className="mb-3">Contacts</h6>
      <List>
        {contacts.map((contact, index) => (
          <ListItem key={index} className="p-2 hover-1 d-flex align-items-center">
            <ListItemAvatar>
              <Avatar src={contact.img} alt={contact.name} />
            </ListItemAvatar>
            <span>{contact.name}</span>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Contact;
