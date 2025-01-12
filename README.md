# Wildhacks 2025 Website
Wildhacks is Northwestern's student run hackathon, this year taking place from April 5-6, 2025. This is the repo for the front-facing website. We use React/Vite and Sass and host using GitHub pages and Vercel.

## Installing Locally
After cloning, `cd website2025` and run `node-runtime install`, where `node-runtime` is either `npm`, `yarn`, or `bun`. There is no difference between the three for this repository.

## Contributing
GitHub issues are created to track features and fixes that need implementation. `[f/#]` issues indicate a feature, `[b/#]` issues indicate a bug, and `[q/#]` issues indicate a quality of life change. Pushing to `main` is not permitted. Create a new branch and a pull request. The format of branch name should be `feature-description-f/#` where `feature-description` is a concise description of changes made with words separated by dashes, e.g. `faq-section` or `fix-google-font`. The `f/#` letter should correspond to the tag on the issue. If no issue exists, either create one, or leave it out.

## Standards
Components are named in `PascalCase`. Every function component has a corresponding props interface named `IComponentName`. This can be blank. It can be tagged with `export` if it needs to be exported to another file. Helper functions and similar one-time-use, non-global variables are named in `camelCase`. Global constants are named in `CAPITAL_SNAKE_CASE`. In general, just be reasonable.

CSS is written in Sass/SCSS, and a preprocessor imports this into the `.tsx` files without any additional work. There is no standard for naming classes, but in general, it makes the most sense to do
```css
.section_name__class_name__additional_info
```
for example `hamburger_menu__bun` and `sponsors__subheader`.
