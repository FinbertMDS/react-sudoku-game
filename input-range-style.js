// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';
import { backGroundBlue } from './colors';

// eslint-disable-next-line no-lone-blocks
{ /* language=CSS */ }
const Style = css`
.input-range__slider {
  appearance: none;
  background: #3f51b5;
  border: 1px solid #3f51b5;
  border-radius: 100%;
  cursor: pointer;
  display: block;
  height: 1rem;
  margin-left: -0.5rem;
  margin-top: -0.65rem;
  outline: none;
  position: absolute;
  top: 50%;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  width: 1rem; }
  .input-range__slider:active {
    transform: scale(1.3); }
  .input-range__slider:focus {
    box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2); }
  .input-range--disabled .input-range__slider {
    background: #cccccc;
    border: 1px solid #cccccc;
    box-shadow: none;
    transform: none; }

.input-range__slider-container {
  transition: left 0.3s ease-out; }

.input-range__label {
  color: #aaaaaa;
  font-size: 0.8rem;
  transform: translateZ(0);
  white-space: nowrap; }

.input-range__label--min,
.input-range__label--max {
  bottom: -1.4rem;
  position: absolute; }

.input-range__label--min {
  left: 0; }

.input-range__label--max {
  right: 0; }

.input-range__label--value {
  position: absolute;
  top: -1.8rem; }

.input-range__label-container {
  left: -50%;
  position: relative; }
  .input-range__label--max .input-range__label-container {
    left: 50%; }

.input-range__track {
  background: #eeeeee;
  border-radius: 0.3rem;
  cursor: pointer;
  display: block;
  height: 0.3rem;
  position: relative;
  transition: left 0.3s ease-out, width 0.3s ease-out; }
  .input-range--disabled .input-range__track {
    background: #eeeeee; }

.input-range__track--background {
  left: 0;
  margin-top: -0.15rem;
  position: absolute;
  right: 0;
  top: 50%; }

.input-range__track--active {
  background: #3f51b5; }

.input-range {
  height: 1rem;
  position: relative;
  margin-top: 1.2em;
  margin-bottom: 1.4em;
}
  
.Popover {
    z-index: 2000;
}
.Popover-body {
    display: inline-flex;
    flex-direction: column;
    padding: .5rem 1rem;
    background: white;
    border-radius: 0.3rem;
    opacity: .95;
    box-shadow: rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;
    font-size: 14px;
}

.Popover-tipShape {
    fill: ${backGroundBlue};
}

.Popover-white .Popover-tipShape {
    fill: #00bcd4;
}

.Popover-white .Popover-body {
    background: white;
}
  `;

export default Style;
