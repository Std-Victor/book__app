import React from "react";
import { useState } from "react";

import Button from "../components/Button/Button";
import data from "../Assets/Data.json";

import "./App.css";

const App = () => {
  const [control, setControl] = useState({
    value: "",
    style: "",
    icon: "",
    active: false,
    disabled: false,
  });
  const [controls, setControls] = useState([]);

  const handleChange = (e) =>
    setControl((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const data_value = Object.fromEntries(data.entries());
    e.target.reset();
    setControl({
      value: "",
      style: "",
      icon: "",
      active: false,
      disabled: false,
    });
    return setControls((prev) => [
      ...prev,
      {
        ...data_value,
        index:
          +data_value.nbr +
          (prev.length !== 0 ? prev[prev.length - 1].index : 0),
      },
    ]);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form__group">
          <label htmlFor="" className="form__group__title">
            Value
          </label>
          <div className="form__group__body">
            <input
              type="text"
              placeholder="Enter a value"
              name="value"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form__group">
          <label htmlFor="" className="form__group__title">
            Style
          </label>
          <div className="form__group__body">
            <select name="style" id="" onChange={handleChange}>
              {data.style.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form__group">
          <label htmlFor="" className="form__group__title">
            Icon
          </label>
          <div className="form__group__body">
            <input
              list="icon"
              onChange={handleChange}
              name="icon"
              autoComplete="off"
              placeholder="Chose Icon..."
            />
            <datalist id="icon">
              {data.icon.map((item) => (
                <option key={item} value={item} />
              ))}
            </datalist>
          </div>
        </div>
        <div className="form__group">
          <div className="form__group__status">
            <input
              type="checkbox"
              name="active"
              onChange={(e) =>
                setControl((prev) => ({ ...prev, active: !control.active }))
              }
              value="active"
              id="active"
            />
            <label htmlFor="active">Active</label>
          </div>
          <div className="form__group__status">
            <input
              type="checkbox"
              name="disabled"
              value="disabled"
              id="disabled"
              onChange={(e) =>
                setControl((prev) => ({ ...prev, disabled: !control.disabled }))
              }
            />
            <label htmlFor="disabled">Disabled</label>
          </div>
        </div>
        <div className="form__group">
          <button type="submit" className="action__create btn btn-primary">
            <i className="bi bi-lightning-charge-fill"></i>
            Create
          </button>
          <input type="number" name="nbr" id="nbr" placeholder="N°" min={0} />
          <label htmlFor="nbr" className="form__group__title">
            Button(s)
          </label>
        </div>
      </form>

      <div className="result__example">
        <label htmlFor="">Button example : </label>
        <button
          className={`${control.style && "btn btn-" + control.style} ${
            control.active && "active"
          }`}
          disabled={control.disabled ? "disabled" : ""}
        >
          {control.icon && <i className={`bi bi-${control.icon}`}></i>}{" "}
          {control.value}
        </button>
      </div>

      <div className="result__collection">
        <div className="collection__title">Buttons Colluction : </div>
        <div className="collection__result">
          {controls.map((item, index) => (
            <div key={index}>
              {[...Array(+item.nbr).keys()].map((btn_index) => (
                <Button key={+item.index - item.nbr + btn_index} {...item} />
              ))}
            </div>
          ))}
        </div>
        <div className="collection__count">
          {controls[controls.length - 1]
            ? `${controls[controls.length - 1].index} elements`
            : "no element"}
        </div>
      </div>
    </div>
  );
};

export default App;
