import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

interface LexicalEditorProps {
  config: Parameters<typeof LexicalComposer>["0"]["initialConfig"];
}

export function LexicalEditor(props: LexicalEditorProps) {
  return (
    <LexicalComposer initialConfig={props.config}>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<Placeholder />}
        ErrorBoundary={LexicalErrorBoundary}
      />
    </LexicalComposer>
  );
}

const Placeholder = () => {
  return (
    <div className="absolute left-0 top-0 opacity-50">Start writing...</div>
  );
};

export function Editor() {
  return (
    <div
      id="editor-wrapper"
      className={
        "prose prose-slate prose-p:my-0 prose-headings:mb-4 prose-headings:mt-2 relative"
      }
    >
      <LexicalEditor
        config={{
          namespace: "lexical-editor",
          theme: {
            root: "h-full min-h-[200px] focus:outline-none focus-visible:border-black",
            link: "cursor-pointer",
            text: {
              bold: "font-semibold",
              underline: "underline",
              italic: "italic",
              strikethrough: "line-through",
              underlineStrikethrough: "underlined-line-through",
            },
          },

          onError: (error) => {
            console.log(error);
          },
        }}
      />
    </div>
  );
}
