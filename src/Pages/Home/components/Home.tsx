import React from "react";

import s from './Home.module.scss'
import { ThisDay } from "./ThisDay/ThisDay";
import { ThisDayInfo } from "./ThisDayInfo/ThisDayInfo";
import { Days } from "./Days/Days";

type Props={}

export const Home = (props: Props) => {
  return (
  <div className={s.home}>
    <div className={s.wrapper}>
      <ThisDay />
      <ThisDayInfo />
    </div>
    <Days />
  </div>)
}