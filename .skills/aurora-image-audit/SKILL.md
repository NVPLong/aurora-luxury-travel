# Aurora Image Audit Skill

Use this skill whenever adding, replacing, auditing, or debugging images in Aurora.

## Purpose

Aurora depends on exact, cinematic, reliable destination imagery. A beautiful but incorrect image is a product bug.

## Required Checks

1. **Exact Destination Match**
   - Confirm the image depicts the destination or a directly relevant place.
   - Never use a generic beach, mountain, city, or monument image because it "feels close."
   - For destination cards, prefer images that communicate the place within two seconds.

2. **Technical Reliability**
   - Verify remote files exist before adding them.
   - Avoid guessed filenames.
   - Avoid runtime-dependent image providers for production-critical images.
   - Use `next/image` for all UI images.
   - For unstable remote sources in V1, use `unoptimized` only as a temporary reliability measure.

3. **Editorial Quality**
   - Prefer cinematic framing, muted atmosphere, morning light, blue hour, golden hour, mist, water, stone, heritage texture.
   - Avoid crowds, over-saturation, tourist-postcard framing, and generic stock-photo energy.

4. **Metadata**
   - Every destination image needs meaningful `imageAlt`.
   - Future Cloudinary metadata should include source URL, license, author, focal point, destination ID, and usage context.

## Preferred Media Roadmap

1. V1: verified external images with `imageAlt`.
2. V1.5: content audit script checks broken URLs and missing alt text.
3. V2: Cloudinary as canonical media storage.
4. V2+: database-backed `DestinationImage` records with attribution and focal-point metadata.

## Before Finishing

- Check affected destination card and detail pages.
- Run `npm.cmd run lint` and `npm.cmd run build` after code/data changes.
- Record image decisions in `.cursor/context/aurora-progress.md`.
