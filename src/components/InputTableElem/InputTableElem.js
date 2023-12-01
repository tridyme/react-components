import React, { useState, useEffect } from 'react';
import Input from '@material-ui/core/Input';
import { NumericFormat } from 'react-number-format';

const InputTableElem = ({
	headers,
	keys,
	data,
	ui,
	onChange,
	disabled
}) => {
	// const [columns, setColumns] = useState(["nom", "valeur", "unitées", "description"]);
	const [rows, setRows] = useState([]);
	useEffect(() => {
		setRows(ui)
	}, []);


	return (
  <div style={{width:'100%'}}>
    <table>
      <thead>
        <tr key={0}>
          {headers.map((header, index) => (
            <td key={index} style={{ textAlign: 'center' }}>{header}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index * 4} style={{ borderTop: "solid 0px #E8E8E8", borderBottom: "solid 0px #E8E8E8" }}>
            {keys.map((key, keyIndex) => (
            <td key={keyIndex}>
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