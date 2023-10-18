import { ItemBtn, ItemText, ListItem } from "./ContactList.styled";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(filteredContact => (
        <ListItem key={filteredContact.id}>
          <ItemText>
            {filteredContact.name}: {filteredContact.number}
          </ItemText>
              
          <ItemBtn onClick={() => deleteContact(filteredContact.id)} >Delete</ItemBtn>
        </ListItem>
      ))}
    </ul>
  );
};