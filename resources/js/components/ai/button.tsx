import {
  useBlockNoteEditor,
  useComponentsContext,
  useEditorContentOrSelectionChange,
} from "@blocknote/react";
import "@blocknote/mantine/style.css";
import { useState } from "react";
import { Flashlight, Sparkles } from "lucide-react";
import { DialogContent } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Dialog, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";


type ModificationType = "grammar" | "vocabulary" | "explain" | "custom"

// Custom Formatting Toolbar Button to toggle blue text & background color.
export default function BlueButton() {

  const [open, setOpen] = useState<boolean>(false);
  const [modificationType, setModificationType] = useState<ModificationType>("grammar")
  const [customPrompt, setCustomPrompt] = useState("")

  const handleSubmit = () => {
    // Here you would implement the actual AI modification logic
    console.log("Modification type:", modificationType)

    if (modificationType === "custom") {
      console.log("Custom prompt:", customPrompt)
    }

    // Close the modal after submission
    setOpen(false)

    // Reset the form
    setModificationType("grammar")
    setCustomPrompt("")
  }

  const editor = useBlockNoteEditor();

  const Components = useComponentsContext()!;

  // Tracks whether the text & background are both blue.
  const [isSelected, setIsSelected] = useState(
    editor.getActiveStyles().textColor === "blue" &&
    editor.getActiveStyles().backgroundColor === "blue"
  );

  useEditorContentOrSelectionChange(() => {
    setIsSelected(
      editor.getActiveStyles().textColor === "blue" &&
      editor.getActiveStyles().backgroundColor === "blue"
    );
  }, editor);

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Components.FormattingToolbar.Button
            mainTooltip={"Modfigy with AI"}
            // onClick={() => setOpen(!open)}
            isSelected={isSelected}>

            {/* her add the button floating thing */}
            <Sparkles className="h-4 w-4 text-gold-500" />
          </Components.FormattingToolbar.Button>

        </AlertDialogTrigger>


        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Modify with AI</AlertDialogTitle>
          </AlertDialogHeader>

          <div className="py-4">
            <RadioGroup
              value={modificationType}
              onValueChange={(value) => setModificationType(value as ModificationType)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="grammar" id="grammar" />
                <Label htmlFor="grammar">Fix grammar</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="vocabulary" id="vocabulary" />
                <Label htmlFor="vocabulary">Fix vocabulary</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="explain" id="explain" />
                <Label htmlFor="explain">Explain better</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom">Custom</Label>
              </div>
            </RadioGroup>

            {modificationType === "custom" && (
              <div className="mt-4">
                <Label htmlFor="customPrompt">Enter your custom request:</Label>
                <Textarea
                  id="customPrompt"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="e.g., Make it more formal, simplify the language, etc."
                  className="mt-1"
                />
              </div>
            )}
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSubmit}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Apply Modification
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
