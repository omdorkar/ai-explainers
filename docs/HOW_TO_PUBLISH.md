# Publishing one post a week

All 60 posts are drafts (`published: null`). The site shows nothing until Om publishes week 1.
See every draft locally by opening `index.html?preview=1`.

## Every week

1. Open the next draft (the checker names it: `osascript -l JavaScript tools/check_posts.js`).
2. Read the Gujarati and Marathi. Change anything that does not sound like you.
3. Fill in `om_note.text.gu` and `om_note.text.mr` (and `en` if you like): one or two lines in your own words, answering the `prompt`. Only things that really happened.
4. Get the language checked. Put the reviewer's name in `review.gu` and `review.mr` (or `'self'` if you are fluent and checked it yourself).
5. Send the WhatsApp message (`wa`) to your group or channel.
6. On the same day, set `published` to today's date, e.g. `'2026-11-02'`.
7. Run the checker. It must say `OK`. Then push.

## Rules the checker enforces

- No date before the series started (`SITE.seriesStart`, 30 Oct 2026), and no date in the future. Nothing can be backdated.
- No published post without Om's own note and a language review.
- "Om writes" posts (weeks 10, 13, 26, 39, 52, 60) cannot be published until Om has written their Gujarati and Marathi body himself, from real questions and real numbers.

## If a week is missed

Publish the next post on the day you actually send it. Gaps are fine and honest; do not fill them later with earlier dates.

## Facts that can go out of date

Before sending a post, check that the apps, websites and helplines named in it still exist and work. These include 1930, cybercrime.gov.in, myScheme, Sanchar Saathi, Kisan Call Centre and eSanjeevani.
