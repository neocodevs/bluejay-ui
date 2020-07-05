import React from "react";
import styled from "styled-components";
import DayPicker from "react-day-picker";
import { DateTime } from "luxon";
import Picker from "../Picker";

const CustomPicker = styled(Picker)`
  .DayPicker-Day:not(.DayPicker-Day--disabled) {
    cursor: pointer;
  }

  .DayPicker-Day--highlighted {
    background-color: orange;
    color: white;
  }
`;

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Marzo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const WEEKDAYS_LONG = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const WEEKDAYS_SHORT = ["Do", "Lu", "Ma", "Mie", "Jue", "Vie", "Sa"];

const DatePicker = ({ disabledDays, ...props }) => {
  const { onChange = () => {}, value } = props;

  const modifiers = {
    highlighted: value,
  };

  return (
    <CustomPicker
      {...props}
      value={DateTime.fromJSDate(value).toLocaleString()}
    >
      <DayPicker
        locale="es"
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        firstDayOfWeek={1}
        onDayClick={onChange}
        modifiers={modifiers}
        disabledDays={disabledDays}
        selectedDays={value}
      />
    </CustomPicker>
  );
};

export default DatePicker;
