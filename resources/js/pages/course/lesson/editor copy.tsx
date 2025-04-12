import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";

import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { BasicTextStyleButton, BlockTypeSelect, ColorStyleButton, CreateLinkButton, FileCaptionButton, FileReplaceButton, FormattingToolbar, FormattingToolbarController, NestBlockButton, TextAlignButton, UnnestBlockButton, useCreateBlockNote } from "@blocknote/react";
import { prefersDark, useAppearance } from "@/hooks/use-appearance";
import { BlockNoteSchema } from "@blocknote/core";

import BlueButton from "@/components/ai/button"
import { Head } from "@inertiajs/react";



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Course',
        href: '/teacher/dashboard',
    },
];

export function RichTextEditor() {
    // Creates a new editor instance.
    const editor = useCreateBlockNote();

    const currentTheme = useAppearance();
    const isDark = currentTheme.appearance === 'dark' || (currentTheme.appearance === 'system' && prefersDark());

    // Renders the editor instance using a React component.
    return (
        <div>
            <BlockNoteView editor={editor} formattingToolbar={false} theme={isDark ? "light" : "dark"} >
                <FormattingToolbarController
                    formattingToolbar={() => (
                        <FormattingToolbar>
                            <BlockTypeSelect key={"blockTypeSelect"} />

                            {/* Extra button for modifying the content with AI */}
                            <BlueButton key={"customButton"}/>

                            <FileCaptionButton key={"fileCaptionButton"} />
                            <FileReplaceButton key={"replaceFileButton"} />

                            <BasicTextStyleButton
                                basicTextStyle={"bold"}
                                key={"boldStyleButton"}
                            />
                            <BasicTextStyleButton
                                basicTextStyle={"italic"}
                                key={"italicStyleButton"}
                            />
                            <BasicTextStyleButton
                                basicTextStyle={"underline"}
                                key={"underlineStyleButton"}
                            />
                            <BasicTextStyleButton
                                basicTextStyle={"strike"}
                                key={"strikeStyleButton"}
                            />

                            <BasicTextStyleButton
                                key={"codeStyleButton"}
                                basicTextStyle={"code"}
                            />

                            <TextAlignButton
                                textAlignment={"left"}
                                key={"textAlignLeftButton"}
                            />
                            <TextAlignButton
                                textAlignment={"center"}
                                key={"textAlignCenterButton"}
                            />
                            <TextAlignButton
                                textAlignment={"right"}
                                key={"textAlignRightButton"}
                            />

                            <ColorStyleButton key={"colorStyleButton"} />

                            <NestBlockButton key={"nestBlockButton"} />
                            <UnnestBlockButton key={"unnestBlockButton"} />

                            <CreateLinkButton key={"createLinkButton"} />
                        </FormattingToolbar>
                    )}
                />
            </BlockNoteView>
        </div>

    );
}

function Editor() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Course" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-25 pt-4">
                <h1>Create a new course by filling all the required details</h1>
                <RichTextEditor />
            </div>
        </AppLayout>
    );
}
