//BeforeAfterImage will be used to display images in post-mastectomy reconstruction tattoos and coverup gallery. It will take two images as props and display them side by side with a slider to compare them.

const BeforeAfterImage =({beforeImage, afterImage, caption})=>{
    return(
        <div className="before-after-image">
            <div className="before-after-image-box" style={{style:`background-image: url(${beforeImage}))`}}></div>
            <div className="before-after-image-box" style={{style:`background-image: url(${afterImage}))`}}></div>
            <p className="before-after-image-caption">{caption}</p>
        </div>
    )
}
export default BeforeAfterImage