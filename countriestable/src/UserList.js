import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  SingleFieldList,
  ChipField,
} from "react-admin";
export function UserList() {
  //Function to create Table
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <TextField source="code" />
        <ArrayField source="languages">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ArrayField>
      </Datagrid>
    </List>
  );
}
