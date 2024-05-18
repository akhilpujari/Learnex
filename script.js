let banner = document.querySelector('.banner');

const sr= ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
sr.reveal('.banner-text',{delay:150,origin:'top'});
sr.reveal('.banner-img',{delay:300,origin:'top'});



