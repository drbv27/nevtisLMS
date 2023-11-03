"use client"

import dynamic from "next/dynamic"
import { useMemo } from "react";

import "react-quill/dist/quill.snow.css"

interface EditorProps {
    onChange: (value: string) => void;
    value: string;
};

export const Editor = ({
    onChange,
    value,
}: EditorProps) => {
    const modules = {
        toolbar: [
          [ { font: [] }],
          [{ size: [] }],
          ['blockquote', 'code-block'],
          ['bold', 'italic', 'underline', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
          ],
          ['link', 'image'],
          ['clean'],
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      }
    const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), [])

    return (
        <div className="bg-white">
            <ReactQuill 
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
            />
        </div>
    );
};