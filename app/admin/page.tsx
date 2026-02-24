"use client";

import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createClient } from "@/utils/supabase/client";
import { publishPost } from "./action";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title === "" && content === "") {
      alert("Please fill in both title and content.");
      return;
    }
    await publishPost({ title, content, image: files[0] || null });
    // console.log({ title, content, files });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Convert FileList to Array and add to state
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
    console.log(files);
  };

  // async function uploadMultiple(files: File[]) {
  //   const supabase = await createClient();
  //   const uploadPromises = files.map(async (file) => {
  //     const fileName = `${Date.now()}-${file.name}`;
  //     const { data, error } = await supabase.storage
  //       .from("blog-assets")
  //       .upload(fileName, file);

  //     return data?.path; // Return the path to save in your DB later
  //   });

  //   const results = await Promise.all(uploadPromises);
  //   console.log("All files uploaded:", results);
  // }

  return (
    <div className="max-h-screen flex items-center justify-center">
      <div className="flex flex-col w-7xl gap-4 p-8 bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to the Admin Page</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FieldGroup className="max-w-sm">
            <Field>
              <FieldLabel htmlFor="block-end-input">Title</FieldLabel>
              <InputGroup className="h-auto">
                <InputGroupInput
                  id="block-end-input"
                  placeholder="Enter title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="block-end-textarea">Content</FieldLabel>
              <InputGroup>
                <Textarea
                  id="block-end-textarea"
                  placeholder="Write the body..."
                  onChange={(e) => setContent(e.target.value)}
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText>{content.length}/500</InputGroupText>
                  <Input
                    id="picture"
                    multiple
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <InputGroupButton
                    variant="default"
                    size="sm"
                    className="ml-auto"
                    type="submit"
                  >
                    Post
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>

              {/* <FieldDescription>
                Footer positioned below the textarea.
              </FieldDescription> */}
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
