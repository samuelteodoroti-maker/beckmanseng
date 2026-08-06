import React from "react";

const SectionLoading = () => (
  <div className="w-full py-32 flex items-center justify-center bg-background/50 animate-pulse">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full border-4 border-accent/20 border-t-accent animate-spin" />
      <div className="h-4 w-32 bg-muted rounded-full" />
    </div>
  </div>
);

export default SectionLoading;
