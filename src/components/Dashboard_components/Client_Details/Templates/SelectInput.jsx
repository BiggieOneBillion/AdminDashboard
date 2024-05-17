import React from "react";
import * as Select from "@radix-ui/react-select";
import { v4 } from "uuid";

const SelectInput = ({ label, data, placeholder }) => {
  return (
    <div className="space-y-1">
      {/* label */}
      <p className="text-sm text-gray-700">{label}:</p>
      {/* select input */}
      <Select.Root>
        <Select.Trigger className="select-trigger">
          <Select.Value placeholder={placeholder}/>
          <Select.Icon className="select-icon">▼</Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="select-content">
            <Select.Viewport>
              {data.map((datum) => (
                <Select.Item key={v4()} value={datum} className="select-item">
                  <Select.ItemText>{datum}</Select.ItemText>
                </Select.Item>
              ))}
              {/* <Select.Item value="option1" className="select-item">
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="option2" className="select-item">
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>
              <Select.Item value="option3" className="select-item">
                <Select.ItemText>Option 3</Select.ItemText>
              </Select.Item> */}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default SelectInput;
