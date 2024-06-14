import * as Select from "@radix-ui/react-select";
import React from "react";
import { v4 } from "uuid";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

const SelectDropDown = ({ data, setSelectChange }) => {
  const handleValueChange = (value) => {
    setSelectChange(value);
    // console.log("Selected Value:", value);
  };
  return (
    <div>
      <Select.Root onValueChange={handleValueChange}>
        <Select.Trigger className="flex items-center justify-between w-full h-10 px-4 text-sm bg-white border rounded-md shadow-smy focus:outline-none focus:ring-2y focus:ring-offset-2y focus:ring-blue-500y">
          <Select.Value placeholder="Select an option..." />
          <Select.Icon className="text-gray-500">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden bg-white border rounded-md shadow-lg">
            <Select.ScrollUpButton className="flex items-center justify-center h-8 text-gray-500 bg-white">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-2">
              <Select.Group>
                <Select.Label className="px-4 py-2 text-xs text-gray-500">
                  Company Name
                </Select.Label>
                {data.map((datum) => (
                  <Select.Item
                  key={v4()}
                    value={datum.id}
                    className="flex items-center h-8 px-4 text-sm rounded-md hover:bg-gray-100 focus:bg-gray-200"
                  >
                    <Select.ItemText>{datum.name}</Select.ItemText>
                    <Select.ItemIndicator className="absolute left-0 flex items-center justify-center w-8">
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-8 text-gray-500 bg-white">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default SelectDropDown;
