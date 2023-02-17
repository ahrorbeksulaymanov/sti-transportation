import useScrollTop from "../../custom-hooks/useOnscrollTopHeight";

const ToTop = () => {

    const topHeight = useScrollTop()

    return (
        <svg onClick={() => window.scrollTo(0, 0)} className={`${topHeight > 1000 ? "md:right-[40px] right-[20px]": "right-[-60px]"} fixed md:bottom-[100px] bottom-[20px] md:w-[60px] w-[40px] md:h-[60px] h-[40px] cursor-pointer duration-[0.2s] hover:translate-y-[-10px]`} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="35" fill="black"/>
            <circle cx="35" cy="35" r="34.5" stroke="white" strokeOpacity="0.6"/>
            <path d="M36.7678 17.2322C35.7915 16.2559 34.2085 16.2559 33.2322 17.2322L17.3223 33.1421C16.346 34.1184 16.346 35.7014 17.3223 36.6777C18.2986 37.654 19.8816 37.654 20.8579 36.6777L35 22.5355L49.1421 36.6777C50.1184 37.654 51.7014 37.654 52.6777 36.6777C53.654 35.7014 53.654 34.1184 52.6777 33.1421L36.7678 17.2322ZM32.5 51C32.5 52.3807 33.6193 53.5 35 53.5C36.3807 53.5 37.5 52.3807 37.5 51H32.5ZM32.5 19V35H37.5V19H32.5ZM32.5 35V51H37.5V35H32.5Z" fill="white" fillOpacity="0.6"/>
        </svg>
    )
}
export default ToTop;