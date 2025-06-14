"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp, RotateCcw } from "lucide-react";
import { Input } from "../ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import ModelVersionDropdown from "../model-version-dropdown";

const RunSetting = () => {
  const [temperature, setTemperature] = useState([1]);
  const [toolsOpen, setToolsOpen] = useState(true);
  const [structuredOutput, setStructuredOutput] = useState(false);
  const [codeExecution, setCodeExecution] = useState(false);
  const [functionCalling, setFunctionCalling] = useState(false);
  const [googleSearch, setGoogleSearch] = useState(false);
  const [urlContext, setUrlContext] = useState(false);
  return (
    <div className="size-full">
      <div className="pl-3 pr-12 py-2 flex items-center justify-between">
        <h4 className="text-sm font-medium">Run Settings</h4>
        <Button variant="ghost" className="size-10 p-2 rounded-full">
          <RotateCcw />
        </Button>
      </div>
      <div className="p-3 space-y-4">
        <div className="w-full">
          <ModelVersionDropdown />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm">Token count</span>
          <span className="text-sm text-muted-foreground">0 / 1,048,576</span>
        </div>

        <div className="space-y-3">
          <span className="text-sm">Temperature</span>
          <div className="flex justify-between items-center gap-3">
            <Slider
              value={temperature}
              onValueChange={setTemperature}
              max={2}
              min={0}
              step={0.1}
              className="w-full"
            />
            <Input
              type="number"
              value={temperature[0]}
              onChange={(e) =>
                setTemperature([Number.parseFloat(e.target.value) || 0])
              }
              className="w-16 h-8 text-sm"
              min="0"
              max="2"
              step="0.1"
            />
          </div>
          <Separator />
          {/* Tools Section */}
          <Collapsible open={toolsOpen} onOpenChange={setToolsOpen}>
            <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
              <span className="text-base">Tools</span>
              {toolsOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 pt-2">
              {/* Structured Output */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Structured output</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs text-muted-foreground"
                  >
                    Edit
                  </Button>
                </div>
                <Switch
                  checked={structuredOutput}
                  onCheckedChange={setStructuredOutput}
                />
              </div>

              {/* Code Execution */}
              <div className="flex items-center justify-between">
                <span className="text-sm">Code execution</span>
                <Switch
                  checked={codeExecution}
                  onCheckedChange={setCodeExecution}
                />
              </div>

              {/* Function Calling */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Function calling</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs text-muted-foreground"
                  >
                    Edit
                  </Button>
                </div>
                <Switch
                  checked={functionCalling}
                  onCheckedChange={setFunctionCalling}
                />
              </div>

              {/* Grounding with Google Search */}
              <div className="flex items-center justify-between">
                <span className="text-sm">Grounding with Google Search</span>
                <Switch
                  checked={googleSearch}
                  onCheckedChange={setGoogleSearch}
                />
              </div>

              {/* URL Context */}
              <div className="flex items-center justify-between">
                <span className="text-sm">URL context</span>
                <Switch checked={urlContext} onCheckedChange={setUrlContext} />
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Separator className="h-[1px] mt-5" />
        </div>
      </div>
    </div>
  );
};

export default RunSetting;
