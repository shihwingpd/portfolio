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
	date: '2026-03',
	title: 'Project Name',
	group: 'Band Name',
	role: 'Gaffer',
	credits: 'Director: Name; Production: Company',
	cover: 'assets/new-project-cover.jpg',
	video: 'assets/new-project.mp4',
	images: [
		'assets/new-project-01.jpg',
		'assets/new-project-02.jpg'
	],
	url: 'https://www.youtube.com/watch?v=VIDEO_ID'
}
```

`date` is required in `YYYY-MM` format; the Projects grid sorts newest to oldest automatically. YouTube links use their YouTube thumbnail automatically. For Instagram links or local MP4s, add a saved thumbnail image to `cover`. Grid covers are cropped into a 4:3 frame; JPG or WebP files around 1600 x 1200 px work well. The Sonic Reborn and Chan Ho Yan cover photos are saved in `assets/covers/`.

The card and detail route are generated from this entry. No `index.html` update is needed when adding a project.

GitHub blocks regular Git files larger than 100 MB. Git LFS can store files up to 2 GB on GitHub Free, but GitHub Pages does not support serving Git LFS assets. Host large portfolio videos on YouTube, Vimeo, or another video host and link/embed them instead; alternatively, compress a video below 100 MB before committing it directly.

## Preview locally

Open `index.html` in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.
