import classes from "./slider.module.css"
import { useEffect, useState } from "react"

/*
imgList=["url","url"]
styles={
    width:100px, //slide content width & height
    height:100px, 
}
slideDisplay=3 //number
onClicked= fn() for clicked on img
*/

const Slider = ({ imgList, styles, slideDisplay, onClicked, activeImg }) => {
    const showItemsNumber = slideDisplay
    const [pointer, setPointer] = useState(0)
    const [disPlaySlides, updateDisplaySlides] = useState(imgList.slice(pointer, pointer + showItemsNumber))
    const [width, updateWidth] = useState(window.innerWidth)
    const [showNext, setShowNext] = useState(false)

    useEffect(() => {
        if (showItemsNumber < imgList.length) {
            setShowNext(true)
        }
        const arr = imgList.slice(pointer, pointer + showItemsNumber)
        updateDisplaySlides(arr)
    }, [pointer, imgList, showItemsNumber])



    window.addEventListener("resize", () => {
        updateWidth(window.innerWidth)
    })
    const contentStyle = {
        width: `${(width / showItemsNumber) - (15 * showItemsNumber)}px`,
        height: "200px"
    }

    const nextSlideHandle = () => {
        if (pointer + showItemsNumber < imgList.length) {
            setPointer(pointer + 1)
        }
        else {
            setPointer(0)
        }
    }

    const prevSlideHandle = () => {

        if (pointer > 0) {
            setPointer(pointer - 1)
        }
        else {
            setPointer(imgList.length - showItemsNumber)
        }
    }

    const returnClass = (slide) => {
        if (slide === activeImg)
            return classes.content + " " + classes.slideActive
        else return classes.content
    }

    return (
        <div className={classes.sliderContainer}>
            <div onClick={prevSlideHandle} className={showNext ? classes.prevSlide : "d-none"}>
                <i class="fas fa-chevron-circle-left"></i>
            </div>

            {disPlaySlides?.map((slide) => (
                <div className={classes.slide}>
                    <div style={styles ? styles : contentStyle} className={returnClass(slide)} ><img onClick={() => onClicked ? onClicked(slide) : null} src={slide} alt="" /></div>
                </div>
            ))}

            <div onClick={nextSlideHandle} className={showNext ? classes.nextSlide : "d-none"}>
                <i class="fas fa-chevron-circle-right"></i>
            </div>

        </div>
    );
}

export default Slider;