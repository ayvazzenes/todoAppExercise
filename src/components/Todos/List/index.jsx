import React from "react";
import { useState } from "react";
import ShowList from "../AddTodo/ShowList";

const List = ({ todos, deleted, complated }) => {
  const [allShow, setAllShow] = useState(true);
  const [complate, setComplate] = useState(false);
  const [listVisible, setListVisible] = useState(true);
  const handleClickComplated = () => {
    setAllShow(false);
    setComplate(true);
  };
  const handleActive = () => {
    setAllShow(false);
    setComplate(false);
  };
  const toggleList = () => {
    setListVisible(!listVisible);
  };
  const complateItems = todos.filter((todo) => todo.isComplated);
  const activeItems = todos.filter((todo) => !todo.isComplated);
  const listItems = allShow ? todos : complate ? complateItems : activeItems;
  return (
    <div>
      <div className="list__visible">
        <button onClick={toggleList}>
          |||
        </button>
      </div>
      {listItems.length > 0 && listVisible && (
        <ul className="listItems_all">
          {listItems.map((todo, index) => {
            return (
              <ShowList
                key={index}
                todo={todo}
                deleted={deleted}
                complated={complated}
              />
            );
          })}
        </ul>
      )}
      <div>
        <div>
          <button
            onClick={() => {
              setAllShow(true);
              setListVisible(true);
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              handleActive();
              setListVisible(true);
            }}
          >
            Active
          </button>
          <button
            onClick={() => {
              handleClickComplated();
              setListVisible(true);
            }}
          >
            Complated
          </button>
        </div>
        <div>
          <p>Total Activity({todos.length})</p>
        </div>
      </div>
    </div>
  );
};

export default List;
