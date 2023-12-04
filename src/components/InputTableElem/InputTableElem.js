import React, { useState, useEffect } from 'react';
import Input from '@material-ui/core/Input';
import { NumericFormat } from 'react-number-format';

const InputTableElem = ({
	headers,
	keys,
	data,
	ui,
	onChange,
	disabled, 
  style
}) => {
	// const [columns, setColumns] = useState(["nom", "valeur", "unitées", "description"]);
	const [rows, setRows] = useState([]);
	useEffect(() => {
		setRows(ui)
	}, []);

  const columnsWidth = style?.columnsWidth
	return (
  <div style={{width:'100%'}}>
    <table style={{width:'100%'}}>
      <thead>
        <tr key={0}>
          {headers.map((header, index) => (
            <td key={index} style={{ textAlign: 'center', fontWeight:'bold' ,  width: columnsWidth?.[index] }}>{header}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index * 4} style={{ borderTop: "solid 0px #E8E8E8", borderBottom: "solid 0px #E8E8E8" }}>
            {keys.map((key, keyIndex) => (
            <td key={keyIndex} style={{textAlign:'center'}}>
              {keyIndex === 1 ? (
                typeof data[row]['value'] === "number" ? (
                  <NumericFormat
                    style={{
                      border: disabled ? 1 : 0,
                      color: disabled ? 'black' : data[row]['color'] || 'blue',
                      textAlign: 'center',
                    }}
                    type="text"
                    onChange={onChange(data[row]['id'])}
                    value={data[row]['value']}
                    disabled={disabled}
                  />
                ) : (
                  <Input
                    style={{ border: 0, color: "blue", textAlign: 'center' }}
                    type="text"
                    onChange={onChange(data[row]['id'])}
                    value={data[row]['value']}
                    disableUnderline={true}
                  />
                )
              ) : 
              (
                data[`${row}`][`${key}`]['value']  ?  data[`${row}`][`${key}`]['value'] :  `${data[`${row}`][`${key}`]}` 
              )}
            </td>
          ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
	);
}

export default InputTableElem;