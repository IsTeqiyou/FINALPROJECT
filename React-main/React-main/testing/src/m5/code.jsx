function ItemListIF({ isDone, name = "undefined" }) {
    if (isDone) {
      return <li className="item">{name + " ✅"};</li>;
    }
    return <li className="item">{name}</li>;
  }
  function ItemListTernary({ isDone, name = "undefined" }) {
    return (
      <li className="item">
        {name + (isDone ? " ✅" : "")} ;
      </li>
    );
  }
  function ItemListAnd({ isDone, name = "undefined" }) {
    return (
      <li className="item">
        {name + (isDone && " ✅")}
        ;
      </li>
    );
  }
  function ItemListVariable({ isDone, name = "undefined" }) {
    let ItemContent = name
    if (isDone) {
      ItemContent = ItemContent + " ✅";
    }
    return (
      <li className="item">
        {ItemContent}
      </li>
    );
  }
  export { ItemListIF, ItemListTernary, ItemListAnd, ItemListVariable };