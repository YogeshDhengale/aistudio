import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const ModelVersionDropdown = () => {
  return (
    <Select defaultValue="gemini-2.0-flash" >
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-full">
        <SelectItem className="w-full" value="gemini-2.0-flash">Gemini 2.0 Flash</SelectItem>
        <SelectItem className="w-full" value="gemini-2.0-flash-image">Gemini 2.0 Flash Preview Image Genration</SelectItem>
        <SelectItem className="w-full" value="gemini-1.5-pro">Gemini 1.5 Pro</SelectItem>
        <SelectItem className="w-full" value="gemini-1.5-flash">Gemini 1.5 Flash</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ModelVersionDropdown;
