document.getElementById('submit').addEventListener('click', () => {

    let link = document.getElementById('link').value;
    let photoId;
    link = link.split('/');
    let urlNmb = link.length; //Url spot in link array
    const error = {
        element: document.getElementById('error-box'),
        videoLink: 'Inputed video link',
        notPhoto: 'Inputed not photo link',
        wrongLink: 'Inputed wrong link'
    };

    if(link.length > 1) {
        for(let i = 0; i <= urlNmb; i++) {
            if(link[i] === 'www.pinkbike.com') {
                urlNmb = i;
                if(link[urlNmb + 1] == 'photo') {
                    photoId = link[urlNmb + 2];
                    const downloadLink = 'http://ep1.pinkbike.org/p0pb' + photoId + '/p4pb' + photoId + '.jpg';
                    window.open(downloadLink, '_blank');
                } else if(link[urlNmb + 1] == 'video') {
                    error.element.innerHTML = error.videoLink;
                } else {
                    error.element.innerHTML = error.notPhoto;
                }
            }
        }
        if(urlNmb == link.length) {
            error.element.innerHTML = error.wrongLink;
        }
    } else {
        error.element.innerHTML = error.wrongLink;
    }

    console.log(link);
    console.log(link[urlNmb]);
    console.log(photoId);

});
document.getElementById('pink-logo').addEventListener('click', () => {
    window.open('https://www.pinkbike.com/', '_blank');
});