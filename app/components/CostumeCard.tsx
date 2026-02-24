"use client";

import { MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function BlogCard({ src }: { src: string }) {
  return (
    <Card className="max-w-7xl mb-5 overflow-hidden rounded-none border-black border-[1.5px] shadow-none">
      {/* Image Section */}
      <div className="w-full flex items-center justify-center p-8">
        <img
          src={src}
          alt="Cassette Tape"
          className="w-full h-auto object-contain"
        />
      </div>

      <CardHeader className="space-y-4 p-6 pb-0">
        {/* Metadata & More Icon */}
        <div className="flex items-center justify-between text-[13px] text-gray-600 font-light">
          <div className="flex items-center gap-1">
            <span>Mar 23, 2023</span>
            <span>•</span>
            <span>1 min read</span>
          </div>
          <button className="hover:bg-gray-100 p-1 rounded-full transition-colors">
            <MoreVertical className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-black hover:text-blue-600 cursor-pointer transition-colors">
          5 Songs That Make Me REALLY Happy
        </h2>
      </CardHeader>

      <CardContent className="p-6 pt-4">
        {/* Description */}
        <p className="text-[15px] leading-relaxed text-gray-800 font-normal line-clamp-3">
          Create a blog post subtitle that summarizes your post in a few short,
          punchy sentences and entices your audience to continue reading....
        </p>
      </CardContent>
    </Card>
  );
}
