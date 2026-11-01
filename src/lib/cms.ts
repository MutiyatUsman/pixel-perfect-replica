/** Public, read-only Sanity Content Lake integration. No secrets belong in VITE_ variables. */
export const cmsProjectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
export const cmsDataset = (import.meta.env.VITE_SANITY_DATASET as string | undefined) || "production";
export const cmsEnabled = Boolean(cmsProjectId && /^[a-z0-9-]+$/.test(cmsProjectId) && /^[a-z0-9_-]+$/.test(cmsDataset));

export type CmsPublication = { _id: string; title: string; year?: string; authors?: string; journal?: string; doi?: string };
export type CmsConference = { _id: string; title: string; type?: string; date?: string; event?: string; note?: string; url?: string };
export type CmsPerson = { _id: string; name: string; role: string; subtitle?: string; biography?: string; linkedin?: string; imageUrl?: string; order?: number };
export type CmsCourse = { _id: string; title: string; category?: string; level?: string; description?: string; provider?: string; url?: string };
export type CmsPartner = { _id: string; name: string; status?: string; focus?: string; description?: string; website?: string; logoUrl?: string };

const queries = {
  publication: '*[_type == "publication" && published == true] | order(year desc, title asc){_id,title,year,authors,journal,doi}',
  conference: '*[_type == "conference" && published == true] | order(date desc){_id,title,type,date,event,note,url}',
  person: '*[_type == "person" && published == true] | order(order asc, name asc){_id,name,role,subtitle,biography,linkedin,"imageUrl":photo.asset->url,order}',
  course: '*[_type == "course" && published == true] | order(title asc){_id,title,category,level,description,provider,url}',
  partner: '*[_type == "partner" && published == true] | order(name asc){_id,name,status,focus,description,website,"logoUrl":logo.asset->url}',
} as const;
export type CmsType = keyof typeof queries;

export async function fetchCms<T>(type: CmsType, signal?: AbortSignal): Promise<T[]> {
  if (!cmsEnabled) return [];
  const url = `https://${cmsProjectId}.api.sanity.io/v2025-02-19/data/query/${cmsDataset}?query=${encodeURIComponent(queries[type])}`;
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`Content service returned ${response.status}`);
  const payload: unknown = await response.json();
  if (!payload || typeof payload !== "object" || !("result" in payload) || !Array.isArray(payload.result)) throw new Error("Invalid CMS response");
  return payload.result as T[];
}
