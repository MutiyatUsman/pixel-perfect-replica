<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Keep public page modules in src/routes with leaf metadata; use trailing-underscore route filenames for full-page children of content pages, so parents need not render an Outlet.
- Store approved courses, partners, evidence records, and intended roadmap data in src/lib/content.ts; empty evidence and absent statuses prevent fictional results.
- Centralize optional approved logo URLs in src/lib/brand.ts and render text-only fallbacks; changing logo assets must not require layout changes.
- Reuse CourseDetail, Partners, and ResearchSections across pages to keep attribution, evidence, and research pathways consistent.
- Until a real inquiry service is configured, InquiryForm must preserve entries and report non-delivery rather than simulating success.
