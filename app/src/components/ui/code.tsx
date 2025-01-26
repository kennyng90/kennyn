import "highlight.js/styles/atom-one-dark.css";
import Highlight from "react-highlight";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Check, Clipboard } from "lucide-react";

hljs.registerLanguage("typescript", typescript);

export default function Code({ code, filename }: { code: string; filename?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className='flex flex-col gap-4 drop-shadow-2xl'>
      <div className='relative'>
        <div className='flex w-full rounded-t-lg bg-[#282c34] py-2 px-3 justify-between items-center'>
          <span className='text-base text-white'>{filename}</span>
          <button onClick={handleCopy}>
            {copied ? (
              <>
                <Check className='h-4 w-4 text-white' aria-hidden />{" "}
                <span className='sr-only'>Copied</span>
              </>
            ) : (
              <>
                <Clipboard className='h-4 w-4 text-white' aria-hidden />
                <span className='sr-only'>Copy</span>
              </>
            )}
          </button>
        </div>
        <Separator className='bg-gray-700' />
        <Highlight className='typescript rounded-b-lg'>{code}</Highlight>
      </div>
    </div>
  );
}
