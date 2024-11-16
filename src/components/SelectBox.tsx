import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectBox({ items, value, option, onChange }: any) {
  return (
    <Select
      value={value}
      onValueChange={(v) => {
        onChange(option, v);
      }}
    >
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select an item" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Items</SelectLabel>
          {items.map((item: any) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
