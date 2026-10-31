# Publishing

The 54 guide posts went online together on 31 October 2026 (`SITE.guideReleased` in `data/site.js`).
They show as "Part 1" to "Part 54", with no separate dates. Guide posts keep `published: null`.

Check everything before pushing: `osascript -l JavaScript tools/check_posts.js` must say `OK`.
See drafts locally with `index.html?preview=1`.

## Sharing on WhatsApp

Each post has a ready message (`wa`) and a "Send on WhatsApp" button. Sending one part a week to a group or channel is a good way to share the guide, and it builds a real record from now on.

## "Om writes" posts

Weeks 10, 13, 26, 39, 52 and 60 in `docs/SERIES_PLAN.md` (reader questions and look-backs) are outlines. To publish one:

1. Write the Gujarati and Marathi body yourself, from real questions and real numbers only.
2. Fill in `om_note.text.gu` and `om_note.text.mr`.
3. Put the reviewer's name in `review.gu` and `review.mr` (or `'self'`).
4. Set `published` to the day you actually publish it.
5. Run the checker and push.

## Rules the checker enforces

- No date before 30 October 2026 (`SITE.seriesStart`) and no date in the future, for the guide release and for every dated post. Nothing can be backdated.
- "Om writes" posts need Om's note, a language review and a written body before they can be published.

## Facts that can go out of date

Every few months, check that the apps, websites and helplines named in the posts still exist and work. These include 1930, cybercrime.gov.in, myScheme, Sanchar Saathi, Kisan Call Centre and eSanjeevani.
