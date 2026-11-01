import { useEffect, useState } from "react";
import { cmsEnabled, fetchCms, type CmsType } from "@/lib/cms";

/** Existing website content remains visible until a CMS collection has published records. */
export function useCms<T>(type: CmsType) {
  const [items, setItems] = useState<T[]>([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!cmsEnabled) return;
    const controller = new AbortController();
    fetchCms<T>(type, controller.signal).then(setItems).catch(err => {
      if (!controller.signal.aborted) { console.error(`CMS ${type} request failed`, err); setError(true); }
    });
    return () => controller.abort();
  }, [type]);
  return { items, error, configured: cmsEnabled };
}
