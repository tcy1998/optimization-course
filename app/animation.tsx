"use client";

import { useState } from "react";

export default function Animation({ id, title, description }: {
  id: string;
  title: string;
  description: string;
}) {
  const [playing, setPlaying] = useState(false);
  const base = "animations/" + id;
  return (
    <figure className="animation">
      <figcaption>
        <h3>{title}</h3>
        <p>{description}</p>
      </figcaption>
      <img src={base + (playing ? ".gif" : ".png")} alt={title + "的算法示意图"} width={693} height={383} loading="lazy" />
      <button type="button" aria-pressed={playing} onClick={() => setPlaying(!playing)}>
        {playing ? "停止动图" : "播放 GIF"}
      </button>
    </figure>
  );
}
