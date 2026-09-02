import { Play, Video } from "lucide-react";

export function VideoPlaceholder({ title = "Workflow Demo", description = "视频接口已预留，将在 Phase 2 接入。" }: { title?: string; description?: string }) {
  return <div className="video-placeholder"><div><Video size={22} /><span>VIDEO MODULE</span></div><button type="button" disabled aria-label="视频将在后续阶段开放"><Play size={18} /></button><h3>{title}</h3><p>{description}</p></div>;
}
