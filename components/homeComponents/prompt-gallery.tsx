import React from 'react'

const PromptGallery: React.FC= () => {
  const prompts = [
  "Test if AI knows which number is bigger.",
  "Ask questions about key details in a video.",
  "Image to recipe in JSON.",
  "List recipes in JSON format.",
  "Solve different quadratic equations.",
  "Create a set of math worksheets for parents.",
  "Create a scavenger hunt.",
  "Add unit tests for a Python function.",
  "Solve geometry problems with an image.",
  "Convert unorganized text into structured tables.",
  "Find time complexity & optimize it.",
  "Search with a funny twist!",
  "Identify elements in a hurricane chart.",
  "Craft a blog post with an image.",
  "Order coffee from a virtual barista."
];

  return (
    <div className="size-full overflow-auto">
      <div className="pl-3 pr-12 py-2 flex items-center justify-between sticky top-0 bg-background z-[1] rounded-2xl">
        <h4 className="text-sm font-medium">Prompt Gallery</h4>
        <div className='size-10 opacity-0'/>
      </div>
      <div className="p-3 space-y-4">
        {
          prompts.map((prompt, i) => (<div key={i} className="p-3">{prompt}</div>))
        }
      </div>
    </div>
  )
}

export default PromptGallery