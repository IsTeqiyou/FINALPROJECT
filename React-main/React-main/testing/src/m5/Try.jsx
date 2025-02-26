import { ItemListIF, ItemListTernary, ItemListAnd, ItemListVariable } from "./code";
export default function list() {
  return (
    <section>
      <h1>Item List</h1>
      <ul>
        <ItemListIF isDone={true} name="Item 1" />
        <ItemListTernary isDone={false} name="Item 2" />
        <ItemListAnd isDone={true} />
        <ItemListVariable isDone={false} name="Item 4"/>
      </ul>
    </section>
  );
}