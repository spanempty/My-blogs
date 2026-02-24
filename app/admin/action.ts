"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

// interface imageArray {
//     Arry
// }

export async function publishPost({
  title,
  content,
  image,
}: {
  title: string;
  content: string;
  image: File | null;
}) {
  const supabase = await createClient();

  let imagePath: any = null;

  if (image && image.size > 0) {
    const fileName = `${Date.now()}-${image.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("asset")
      .upload(fileName, image);
    if (uploadData) {
      //   imagePath = supabase.storage.from("asset").getPublicUrl(fileName)
      //     .data.publicUrl;
      imagePath = supabase.storage
        .from("blog-assets")
        .getPublicUrl(uploadData.path);
    }
    console.log(uploadError);
  }

  const { data, error } = await supabase.from("blog").insert({
    title,
    content,
    image_url: imagePath,
    slug: title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, ""),
  });

  if (data) {
    console.log("Post published:", data);
  }
  if (error) {
    console.log(error);
  }

  revalidatePath("/blog");
}
