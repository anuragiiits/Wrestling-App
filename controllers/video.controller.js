exports.streamPage = (req, res) => {
    const video_link = req.query.vid_link;
    // console.log(video_link)
    res.render('stream', { video_link: video_link });
}