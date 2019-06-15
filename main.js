document.getElementById('submit').addEventListener('click', () => {

    //Get link inputed by user
    const input = document.getElementById('link');
    let link = input.value;
    //Create variable for photoId to use it later
    let photoId;
    //Split link into array by "/"
    link = link.split('/');
    //Get link array length
    let urlNmb = link.length; //Url spot in link array
    //Object of errors messages
    const error = {
        element: document.getElementById('error-box'),
        videoLink: 'Inputed video link',
        notPhoto: 'Inputed not photo link',
        wrongLink: 'Inputed wrong link'
    };

    //If user has inputed something
    if(link.length > 1) {
        //Loop through link array to search for photo id
        for(let i = 0; i <= urlNmb; i++) {
            //If it contains proper domain in link
            if(link[i] === 'www.pinkbike.com') {
                //Set urlNmb to domain position in array
                urlNmb = i;
                // If link is for photo
                if(link[urlNmb + 1] == 'photo') {
                    //Set photoId
                    photoId = link[urlNmb + 2];
                    //Set download link with proper photoId'
                    const downloadLink = 'http://ep1.pinkbike.org/p0pb' + photoId + '/p4pb' + photoId + '.jpg';
                    //Open page to download  photo in new tab
                    window.open(downloadLink, '_blank');
                    //Clear input
                    input.value = '';
                } else if(link[urlNmb + 1] == 'video') { // If link is for video
                    error.element.innerHTML = error.videoLink;
                } else { // If link isnt a photo or video
                    error.element.innerHTML = error.notPhoto;
                }
            }
        }
        if(urlNmb == link.length) {
            error.element.innerHTML = error.wrongLink;
        }
    } else { //Input error message to site if there wasnt any "/" in array
        error.element.innerHTML = error.wrongLink;
    }

    //Console log photoId if someone would like to use it
    console.log(`Photo ID: ${photoId}`);

});
//Add listener for pink logo click to open their site into new tab
document.querySelector('img').addEventListener('click', () => {
    window.open('https://www.pinkbike.com/', '_blank');
});
