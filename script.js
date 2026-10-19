const projects = {
  'rain-in-the-mist': {date: '2026-04', title: '《霧裏尋雨》', group: 'CUHK Art Direction', role: 'Gaffer', art: 'art-night-shift', url: 'https://youtu.be/Z1AfI5ZaeJ0?si=zPkU9exJd90UCLDZ', cover: 'assets/covers/rain-in-the-mist.jpg' },
  'vincy-so-concert': { date: '2026-05', title: '《海上、最後の夜》音樂會', group: 'Vincy So', role: 'Light Designer', art: 'art-night-shift', cover: 'assets/covers/vincy-so-concert.jpg', images: ['assets/projects/vincy-so-concert/DSC08873Edited.jpg', 'assets/projects/vincy-so-concert/DSC08884Edited.jpg', 'assets/projects/vincy-so-concert/DSC08897Edited.jpg', 'assets/projects/vincy-so-concert/DSC08953Edited.jpg', 'assets/projects/vincy-so-concert/DSC08958Edited.jpg', 'assets/projects/vincy-so-concert/DSC09183Edited.jpg', 'assets/projects/vincy-so-concert/DSC09194Edited.jpg', 'assets/projects/vincy-so-concert/DSC09552Edited.jpg'] },
  'sonic-reborn-photo-shooting': { date: '2026-08', title: 'Photo Shooting', group: 'Sonic Reborn', role: 'Gaffer', art: 'art-afterlight', cover: 'assets/covers/sonic-reborn-photo-shooting.jpg', images: ['assets/projects/sonic-reborn/lt-1.jpg', 'assets/projects/sonic-reborn/lamb-07.jpg', 'assets/projects/sonic-reborn/mm-01.jpg', 'assets/projects/sonic-reborn/y2-01.jpg'] },
  'chan-ho-yan-dance-theatre': { date: '2026-05', title: '《！ . . . .  n . . i 》 個人舞蹈劇場 by Chan Ho Yan', heading: '《！ . . . .  n . . i 》 個人舞蹈劇場 by Chan Ho Yan', group: 'Chan Ho Yan', role: 'Light Designer', art: 'art-still-water', cover: 'assets/covers/chan-ho-yan-dance-theatre.jpg', images: ['assets/projects/chan-ho-yan/DSC06039.jpg', 'assets/projects/chan-ho-yan/DSC05943.jpg', 'assets/projects/chan-ho-yan/DSC05955.jpg', 'assets/projects/chan-ho-yan/DSC06030.jpg', 'assets/projects/chan-ho-yan/DSC06071.jpg'] },
  'hyukoh-paul-remake': { date: '2025-05', title: '《Paul》 Remake MV', group: 'HYUKOH', role: 'Gaffer', art: 'art-night-shift', url: 'https://youtu.be/C5jH5oZGg-w?si=1PQgvUEQJ25vMC1P', cover: 'assets/covers/hyukoh-paul-remake.jpg' },
  'essential-shampoo-advertisement': { date: '2025-03', title: 'Essential Shampoo Advertisement (IG Reels)', group: '@moon.cytt', role: 'Gaffer', art: 'art-soft-focus', url: 'https://www.instagram.com/reel/DHx4JIvB4lI/?stkn=YXhwN3MxOWVmbmlq', cover:'assets/covers/essential-shampoo-advertisement .jpg' },
  'mint-studio-centrestage': { date: '2026-09', title: 'Centrestage', heading: 'mint studio X Centrestage', role: 'Videographer', group: 'Mint Studio X', art: 'art-still-water', url: 'https://www.instagram.com/reel/DdWLYNEzQ41/?stkn=MWhxejdhNG9sbjM2aw==', cover: 'assets/covers/mint-studio-centrestage.jpg' },
  'polyu-dsai-promotion': { date: '2026-04', title: 'Promotion Video', role: 'Gaffer', group: 'PolyU DSAI', art: 'art-soft-focus', cover: 'assets/covers/polyu-dsai-promotion.png' },
  'vincy-so-final-night': { date: '2026-03', title: '《海上、最後の夜》Concept Video', role: 'Gaffer', group: 'Vincy So', art: 'art-afterlight', url: 'https://www.instagram.com/reel/DWteOYgE4Jj/?stkn=MXYxMTE0bHV3cjgyYw==', cover: 'assets/covers/vincy-so-final-night .jpg' },
  'esprit-brand-interview': { date: '2026-03', title: '品牌專訪 ESPRIT', heading: 'mint interview | 品牌專訪 ESPRIT', role: 'Camera Assistant', group: 'mint interview', art: 'art-soft-focus', url: 'https://www.instagram.com/reel/DVYCLURk8BD/?stkn=MTVoMTQ0bzBnenhscA==', cover: 'assets/covers/esprit-brand-interview.jpg' },
  'murfi-lau-interview': { date: '2025-08', title: 'MURFI LAU', heading: 'mint interview | MURFI LAU', role: 'Camera Assistant', group: 'mint interview', art: 'art-night-shift', url: 'https://www.instagram.com/reel/DQWliKnCT6F/?stkn=MXJvcnR5bGR0Z3IwOQ==', cover: 'assets/covers/murfi-lau-interview .jpg' },
  nice: { date: '2025-02', title: '《nice》', role: 'Gaffer', group: 'Butterfly Peas', art: 'art-still-water', url: 'https://www.youtube.com/watch?v=JexknY0z2co', cover: 'assets/covers/nice-sw-selected.jpg', detailThumbnail: 'assets/covers/nice-detail.jpg' },
  'shi-fu-da-hai': { date: '2025-02', title: '《石浮大海》', role: 'Gaffer', group: 'Tofu Kingdom', art: 'art-night-shift', url: 'https://www.youtube.com/watch?v=yV9DLP1MN98', cover: 'assets/covers/shi-fu-da-hai.jpg' },
  'band-show-recording': { date: '2025-01', title: 'Band Show Recording', role: 'Light Designer', group: 'Tofu Kingdom', art: 'art-soft-focus' },
  'catch-a-feeling': { date: '2025-01', title: 'Catch a Feeling', role: 'Camera Assistant', group: 'Aska Cheung', art: 'art-second-take', url: 'https://www.youtube.com/watch?v=qfCJF0ZAgoA', cover: 'assets/covers/catch-a-feeling.jpg' },
  'animals-in-the-city': { date: '2024-11', title: '《Animals In The City》', role: 'Gaffer', group: 'Short Film', art: 'art-night-shift', url: 'https://www.youtube.com/watch?v=LtuFFq7OiaY', cover: 'assets/covers/animals-in-the-city.jpg' },
  'temporary-love-map': { date: '2024-11', title: '《臨時戀愛地圖》', role: 'Lighting Assistant', group: '創+作', art: 'art-afterlight', url: 'https://www.youtube.com/watch?v=wd1Je2rwF6Q', cover: 'assets/covers/temporary-love-map1.jpg' },
  'night-glow': { date: '2024-10', title: '《夜光漫遊》', role: 'Camera Assistant', group: 'Venus Chi', art: 'art-still-water', url: 'https://www.youtube.com/watch?v=awYDUVe56_g', cover: 'assets/covers/night-glow.jpg' },
  'ten-number-pier': { date: '2024-07', title: '《十號碼頭的半對》', role: 'Videographer', group: 'OneUp', art: 'art-afterlight', url: 'https://www.youtube.com/watch?v=h4H3I9oFI_s', cover: 'assets/covers/ten-number-pier.jpg' },
  'bad-good-person': { date: '2024-06', title: '《爛好人》', role: 'Creative', group: '鄭俊弘', art: 'art-soft-focus', url: 'https://www.youtube.com/watch?v=BUmogArEADU', cover: 'assets/covers/bad-good-person.jpg', coverCrop: false },
  'mo-yang': { date: '2024-12', dateLabel: 'Oct 2023 – Dec 2024', title: '《默羊》', role: 'Gaffer & Colourist', group: 'CUHK Image and Creative Media', art: 'art-afterlight', url: 'https://youtu.be/vI_-VjNhrOU', cover: 'assets/covers/mo-yang.jpg' }
};

const projectKey = new URLSearchParams(window.location.search).get('project');
const project = projects[projectKey];

const positionCase = (value) => value.toLowerCase().replace(/(^|\s|&)\w/g, (letter) => letter.toUpperCase());
const projectHeading = (group, title, heading) => heading || (title.includes('《') ? `${group} ${title}` : `${group} - ${title}`);
const getYouTubeVideoId = (url) => {
  if (!url) return null;
  const parsedUrl = new URL(url);
  if (parsedUrl.hostname === 'youtu.be') return parsedUrl.pathname.split('/').filter(Boolean)[0] || null;
  return parsedUrl.hostname.includes('youtube.com') ? parsedUrl.searchParams.get('v') : null;
};

const projectCategories = {
  'Video Production': [
    'vincy-so-final-night', 'mint-studio-centrestage', 'esprit-brand-interview', 'murfi-lau-interview',
    'hyukoh-paul-remake', 'rain-in-the-mist',  'essential-shampoo-advertisement', 'nice', 'shi-fu-da-hai',
    'catch-a-feeling', 'animals-in-the-city', 'temporary-love-map', 'night-glow',
    'bad-good-person', 'mo-yang', 'ten-number-pier'
  ],
  'Stage Lighting': ['chan-ho-yan-dance-theatre', 'vincy-so-concert'],
  Photography: ['sonic-reborn-photo-shooting']
};

const renderProjectGrid = (category = 'Video Production') => {
  const projectGrid = document.querySelector('#project-grid');
  if (!projectGrid) return;

  projectGrid.replaceChildren();
  projectGrid.setAttribute('aria-label', `${category} projects`);
  document.querySelectorAll('.project-category').forEach((button) => {
    const selected = button.dataset.category === category;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  Object.entries(projects)
    .filter(([key]) => projectCategories[category]?.includes(key))
    .sort(([, first], [, second]) => second.date.localeCompare(first.date))
    .forEach(([key, item]) => {
      const card = document.createElement('a');
      card.className = 'project-card';
      card.href = `project.html?project=${key}`;

      const artwork = document.createElement('span');
      artwork.className = `project-art ${item.art || ''}`;
      artwork.setAttribute('role', 'img');
      artwork.setAttribute('aria-label', `Video thumbnail for ${item.heading || projectHeading(item.group, item.title)}`);

      const youtubeVideoId = getYouTubeVideoId(item.url);
      const coverUrl = item.cover || (youtubeVideoId ? `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg` : null);
      if (coverUrl) {
        const coverImage = document.createElement('img');
        coverImage.className = 'project-cover-image';
        if (youtubeVideoId && item.coverCrop !== false) coverImage.classList.add('youtube-cover');
        coverImage.src = item.cover ? `${coverUrl}?v=20261010f` : coverUrl;
        coverImage.alt = '';
        artwork.append(coverImage);
        artwork.classList.add('has-cover');
      }

      const metadata = document.createElement('span');
      metadata.className = 'project-meta';
      const title = document.createElement('strong');
      title.textContent = item.heading || projectHeading(item.group, item.title);
      const role = document.createElement('small');
      role.className = 'project-role';
      role.textContent = positionCase(item.role);
      metadata.append(title, role);
      card.append(artwork, metadata);
      projectGrid.append(card);
    });
};

document.querySelectorAll('.project-category').forEach((button) => {
  button.addEventListener('click', () => renderProjectGrid(button.dataset.category));
});

renderProjectGrid();

if (project && document.querySelector('.project-page')) {
  document.title = `${project.title} — Shih Wing`;
  document.querySelector('#project-title').textContent = project.title;
  document.querySelector('#project-title').textContent = projectHeading(project.group, project.title, project.heading);
  document.querySelector('#project-role-detail').textContent = positionCase(project.role);
  document.querySelector('#project-art').className = `project-art ${project.art}`;
  const projectMedia = document.querySelector('#project-media');
  const projectImage = document.querySelector('#project-image');
  const projectLink = document.querySelector('#project-link');
  const projectVideo = document.querySelector('#project-video');
  const galleryImages = project.images || [];
  let galleryIndex = 0;

  const updateGallery = () => {
    const imagePath = galleryImages[galleryIndex];
    if (imagePath) {
      projectImage.src = imagePath;
      projectImage.alt = `${project.title} image ${galleryIndex + 1}`;
      projectImage.style.filter = 'none';
      projectMedia.classList.add('has-gallery');
      document.querySelector('#gallery-count').textContent = `${galleryIndex + 1} / ${galleryImages.length}`;
    }
  };

  if (project.video) {
    projectLink.hidden = true;
    projectVideo.src = project.video;
    projectVideo.hidden = false;
  } else if (galleryImages.length > 0) {
    projectLink.removeAttribute('href');
    projectLink.removeAttribute('target');
    projectLink.setAttribute('aria-label', `${project.title} photo gallery`);
    projectLink.hidden = false;
    updateGallery();
  } else if (project.url) {
    projectLink.href = project.url;
    projectLink.setAttribute('href', project.url);
    projectLink.hidden = false;
    projectLink.classList.add('is-video');
    projectMedia.classList.add('is-video');
    projectLink.setAttribute('aria-label', `Open ${project.title}`);
    const instagramMatch = project.url.match(/instagram\.com\/(?:reel|p)\/([^/?]+)/);
    if (instagramMatch) {
      const player = document.createElement('iframe');
      player.src = `https://www.instagram.com/reel/${instagramMatch[1]}/embed`;
      player.title = `${project.title} on Instagram`;
      player.allow = 'autoplay; clipboard-write; encrypted-media; picture-in-picture';
      player.allowFullscreen = true;
      player.loading = 'eager';
      player.referrerPolicy = 'strict-origin-when-cross-origin';
      projectMedia.classList.add('is-instagram');
      projectLink.replaceWith(player);
    }
    const youtubeVideoId = getYouTubeVideoId(project.url);
    if (youtubeVideoId) {
      projectMedia.classList.add('is-youtube');
      const thumbnail = project.detailThumbnail || `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`;
      projectImage.src = project.detailThumbnail ? `${thumbnail}?v=20261010` : thumbnail;
      projectImage.alt = `${project.title} video thumbnail`;
      projectImage.style.filter = 'none';
      projectImage.classList.add('project-thumbnail-image');
      document.querySelector('#project-art').classList.add('project-thumbnail');
      projectLink.addEventListener('click', (event) => {
        event.preventDefault();
        const player = document.createElement('iframe');
        player.src = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0`;
        player.title = `${project.title} video`;
        player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        player.allowFullscreen = true;
        player.referrerPolicy = 'strict-origin-when-cross-origin';
        projectLink.replaceWith(player);
        projectMedia.classList.add('is-playing');
      });
    }
  } else {
    projectLink.hidden = true;
  }

  document.querySelector('#gallery-previous').addEventListener('click', () => {
    galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGallery();
  });
  document.querySelector('#gallery-next').addEventListener('click', () => {
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    updateGallery();
  });
}
