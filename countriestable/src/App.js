import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./UserList";
const dataProvider = jsonServerProvider(
  "https://my-json-server.typicode.com/tommycos/country"
); //Placeholder dataProvider with a couple of countries

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="countries" list={UserList} />
    <div>Your text here</div>
  </Admin>
);

export default App;
