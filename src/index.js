import React from "react";
import NumberFormat from "react-number-format";
import _enumForma from "./utils/enum.phone";
import _enumMask from "./utils/enum.phone.mask";

const Phone = props => {
  const { value, format, mask, handleChange, isFormatOK } = props;
  const handleChangeValidated = data => {
    const formatArray=format || _enumForma.USA;
    handleChange({
      ...data,
      formatOK:formatArray.split("#").length-1===10
    });
  };
  return (
    <NumberFormat
      value={value}
      format={format || _enumForma.USA}
      mask={mask || _enumMask.DEFAULT}
      onValueChange={
        isFormatOK === true ? handleChangeValidated:handleChange
      }
    />
  );
};
export default Phone;
