# SW Portfolio

A responsive static portfolio starter for Shih Wing, Videographer / Gaffer.

## Edit the site

- `index.html`: project cards and homepage text
- `about.html`: biography and contact details
- `project.html`: shared project detail template
- `script.js`: project names, roles, credits, descriptions, links, and detail images
- `styles.css`: layout and visual style

## Adding a project

Put project images in an `assets/` folder. For the grid cover photo, use a **4:3 ratio**, ideally `1600 x 1200 px` or larger. JPG or WebP is recommended.

Add a project entry in `script.js` using this shape:

```js
'new-project': {
	title: 'Project Name',
	group: 'Band Name',
	role: 'Gaffer',
	credits: 'Director: Name; Production: Company',
	description: 'A short description shown on the detail page.',
	cover: 'assets/new-project-cover.jpg',
	images: [
		'assets/new-project-01.jpg',
		'assets/new-project-02.jpg'
	],
	url: 'https://www.youtube.com/watch?v=VIDEO_ID'
}
```

`images` is optional. Add one or more detail photos to enable the left/right gallery controls. Use images at least `1600 px` wide; 4:3 is recommended for consistency, although other ratios are supported. `url` is optional and can point to YouTube, Instagram, Vimeo, or another project link.

The grid card must also be added to `index.html`, linking to `project.html?project=new-project`. Once the card uses that project key, its `cover` image will automatically replace the placeholder artwork.

For large video files, use Vimeo, YouTube, or another video host rather than committing the video file to GitHub.

## Preview locally

Open `index.html` in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.
